import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import Loader from './components/Loader';
import MainHead from './components/MainHead';
import Nav from './components/Nav';

const numToWords = require('../../modules/numToEnglish');

const TranscribeSentence = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isCorrect, setIsCorrect] = useState('');

  const [word, setWord] = useState('');
  const [speech, setSpeech] = useState('');
  const [answer, setAnswer] = useState('');
const api = process.env.REACT_APP_API_URL;
  const fetchWords = async () => {
    setIsLoading(true);
    // console.log('Fetching word from database updated!');
    const word = await fetch(
      `${api}/transcribe/transcribe_sentence`,
      {method: 'GET'}
      )
      .then(res => {
        console.log('Fetched word from database');
        return res.json();
      })
      .then((response) => {
        console.log('Transmitting word from database');
        console.log(response);
        setIsLoading(false);
        console.log(response.split('.').slice(0,-1)[0])
        return response.split('.').slice(0,-1)[0].toLowerCase();
      })
      .catch(err => err.json());
      
    console.log('Transmitted word from database');
    return word;
  };

  const triggerSpeech = () => {
    console.log(speech);
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(speech));
  }

  const triggerAnswerSpeech = (answer) => {
    console.log(speech);
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(answer));
  }

  const recordSpeech = () => {
    let response;
    const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

    let recognition = new SpeechRecognition();
    recognition.start();
    recognition.onstart = () => {
      console.log("starting listening, speak in microphone");
    }
    recognition.onspeechend = () => {
      console.log("stopped listening");
      recognition.stop();
    }
    recognition.onresult = async (result) => {
      response = result.results[0][0].transcript;
      if (/\d/.test(response)) {
        setAnswer(response);
        triggerAnswerSpeech(`${response}, wrong`);
      } else {
        // const responseToNum = Number(response);
        if (response.toLowerCase() == word.toLowerCase()) {
          setAnswer(response);
          setIsNext(true);
          setIsCorrect(true);
          triggerAnswerSpeech(`${response}, correct!`);
        } 
        if (response != word) {
          setAnswer(response);
          setIsCorrect('');
          triggerAnswerSpeech(`${response}, wrong!`);
        }
      }
    }
  }

  const getSpeech = async (value) => {
    console.log('Speaking');
    if ('speechSynthesis' in window) {
      // window.speechSynthesis.cancel();
      setWord(value);
      // let numInWords = '';
      // if (`${value}`.length < 3) {
      // 	const splitValue = numToWords(value).split(' ');
      // 	if (splitValue.length > 2) {
      // 		numInWords = splitValue.filter((item, index, arr) =>  index > 0).join(' ')
      // 	} else {
      // 		numInWords = splitValue[1];
      // 	}
      // } else {
      // 	numInWords = numToWords(value);
      // }
      setSpeech(`${value}`);
      setWord(`${value}`)
      console.log('speech ended!');
    } else {
      console.log("Web Speech API not supported :-(");
    }
  }

  const setUp = async(loadValue) => {
    let word = await fetchWords();
    console.log(word);
    if (loadValue === 'initialLoad') {
      // const word = `${word}`.slice(0, level);
      console.log('Getting speech...');
      getSpeech(word);
    } else if (loadValue === 'newLevel') {
      // const word = `${word}`.slice(0, level);
      getSpeech(word);
      setIsCorrect('');
      setAnswer('');
      setIsNext(false);
      // setTotalCorrect(prevTotal => prevTotal < 2 ? prevTotal + 1: 0);
      // if (totalCorrect === 2) {
      // 	setLevel(prevLevel => prevLevel + 1);
      // 	console.log('Level:', level);
      // } else {
      // 	console.log('isCorrect is less than 10')
      // }
    }
  }

  const getNewLevel = () => {
    setUp('newLevel');
  }

  useEffect(() =>{
    setUp('initialLoad');
  }, []);
  return (
    <>
      <div className='promo flex flex-col items-center justify-center w-full pb-6'>
        <MainHead title='Transcribers' />
      </div>
      <div className='flex justify-center w-full h-screen py-5'>
        <div className='w-full max-w-4xl pb-6 px-4'>
          <Head title='Transcribe Sentence' color='text-green-500'/>
          <div className='border-2 border-dashed border-green-500 px-3 py-2 rounded-3xl h-full w-full'>
            <div className='relative flex flex-col justify-center items-center h-full w-full bg-gray-100 rounded-xl p-2 '>
              <Nav backwardLink='/transcribers' forwardLink='/transcribers' color='gray-400' hoverColor='green'/>
              {
                isLoading?
                <Loader />
                :
                <div style={{fontFamily: 'Gochi Hand'}} className='flex flex-col justify-around text-center h-full py-20'>
                  <div className='text-3xl md:text-4xl md:text-5xl font-bold text-green-500'>{word}</div>
                  <div className={`${isCorrect? 'text-green-500': 'text-red-500'} text-3xl`}>{answer}</div>
                </div>
              }
              <div className='w-full flex flex-col items-center justify-center gap-4'>
                <div className='flex justify-around w-full'>
                  <div>
                    <button onClick={() => {triggerSpeech()}} className='text-3xl text-cyan-500'><i className='fa-solid fa-volume-high'></i></button>
                  </div>
                  <div>
                  {
                    isCorrect === true?
                      <button className='text-3xl text-green-500'><i className='fa fa-check'></i></button>
                    : isCorrect === false?
                    <button className='text-3xl text-red-500'><i className='fa fa-times'></i></button>
                    :
                    ''
                  }
                  </div>
                  <div>
                    <button disabled={`${isNext ? 'disabled': ''}`} className={`text-4xl ${isNext? 'text-gray-500': 'animate-pulse text-red-400'}`} onClick={() => recordSpeech()}><i className='fa fa-microphone'></i></button>
                  </div>
                </div>
                <div className='flex justify-center w-full'>
                  <button style={{fontFamily: 'Gochi Hand'}} onClick={() => { getNewLevel() }} disabled={`${isCorrect? '': 'disabled'}`} className={`py-2 w-full max-w-[200px] md:max-w-[250px] border-2 border-dashed border-${isCorrect? 'green-500 text-green-500': 'gray-500 text-gray-500'} rounded-xl  text-2xl font-semibold`} >Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TranscribeSentence