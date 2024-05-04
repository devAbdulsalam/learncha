import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import Loader from './components/Loader';
import MainHead from './components/MainHead';
import Nav from './components/Nav';

const numToWords = require('../../modules/numToEnglish');

const TranscribeNumber = () => {
  	const [level, setLevel] = useState(1);
	const [totalCorrect, setTotalCorrect] = useState(0);
	const [isNext, setIsNext] = useState(false);
	const [isCorrect, setIsCorrect] = useState('');
	
	const [number, setNumber] = useState('');
	const [speech, setSpeech] = useState('');
	const [numInWords, setNumInWords] = useState('');
	const [answer, setAnswer] = useState('');
  	const [isLoading, setIsLoading] = useState(false);

	const [isTalking, setISTalking] = useState(false);

	const api = process.env.REACT_APP_API_URL;

	const fetchNumbers = async () => {
		// console.log('Fetching word from database updated!');
    	setIsLoading(true);
		const number = await fetch(
			`${api}/transcribe/transcribe_numbers`,
			{method: 'GET'}
			)
			.then(res => {
				// console.log('Fetched word from database');
				return res.json();
			})
			.then((response) => {
				// console.log('Transmitting word from database');
        		setIsLoading(false);
				return response;
			})
			.catch(err => console.log(err));
			
		// console.log('Transmitted word from database');
		return number;
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
			setISTalking(true);
		}
		recognition.onspeechend = () => {
			console.log("stopped listening");
			recognition.stop();
			setISTalking(false);
		}
		recognition.onresult = async (result) => {
			response = result.results[0][0].transcript;
			if (/[a-zA-Z]/.test(response)) {
				setAnswer(response);
				triggerAnswerSpeech(`${response} wrong`);
			} else {
				const responseToNum = Number(response)
				if (responseToNum == number) {
					setAnswer(responseToNum);
					setIsNext(true);
					setIsCorrect(true);
					triggerAnswerSpeech(`${response}, correct!`);
          console.log('response', response);
				} 
				if (responseToNum != number) {
					setAnswer(responseToNum);
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
			setNumber(value);
			let numInWords = '';
			if (`${value}`.length < 3) {
				const splitValue = numToWords(value).split(' ');
				if (splitValue.length > 2) {
					numInWords = splitValue.filter((item, index, arr) =>  index > 0).join(' ')
				} else {
					numInWords = splitValue[1];
				}
			} else {
				numInWords = numToWords(value);
			}
			setSpeech(`${numInWords}`);
			setNumInWords(`${numInWords}`)
			console.log('speech ended!');
		} else {
			console.log("Web Speech API not supported :-(");
		}
	}

	const setUp = async(loadValue) => {
		let number = await fetchNumbers();
		console.log(number)
		if (loadValue === 'initialLoad') {
			const displayNumber = `${number}`.slice(0, level);
			console.log('Getting speech...');
			getSpeech(displayNumber);
		} else if (loadValue === 'newLevel') {
			const displayNumber = `${number}`.slice(0, level);
			getSpeech(displayNumber);
			setIsCorrect('');
			setAnswer('');
			setIsNext(false);
			setTotalCorrect(prevTotal => prevTotal < 10 ? prevTotal + 1: 0);
			if (totalCorrect === 10) {
				setLevel(prevLevel => prevLevel + 1);
				console.log('Level:', level);
			} else {
				console.log('isCorrect is less than 10')
			}
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
          <Head title='Transcribe Numbers' color='text-cyan-500'/>
          <div className='border-2 border-dashed border-cyan-500 px-3 py-2 rounded-3xl h-full w-full'>
            <div className='relative flex flex-col justify-center items-center h-full w-full bg-gray-100 rounded-xl p-2 '>
				<Nav backwardLink='/transcribers' forwardLink='/transcribers/transcribe-alphabets' color='cyan' hoverColor='cyan'/>
              {
                isLoading?
                <Loader />
                :
                <div style={{fontFamily: 'Gochi Hand'}} className='flex flex-col justify-around text-center h-full py-20'>
                  <div className='text-3xl md:text-4xl md:text-5xl font-bold text-cyan-500'>{number}</div>
                  <div className='text-3xl md:text-4xl'>{numInWords} </div>
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
                    {
						isTalking?
						<button disabled={`${isNext ? 'disabled': ''}`} className={`text-4xl ${isNext? 'text-gray-500': 'animate-pulse text-red-400'}`} onClick={() => recordSpeech()}><i className='fa fa-microphone'></i></button>
						:
						<button disabled={`${isNext ? 'disabled': ''}`} className={`text-4xl ${isNext? 'text-gray-500': 'text-green-500'}`} onClick={() => recordSpeech()}><i className='fa fa-microphone'></i></button>
					}
                  </div>
                </div>
                <div className='flex justify-center w-full'>
                  <button style={{fontFamily: 'Gochi Hand'}} onClick={() => { getNewLevel() }} disabled={`${isCorrect? '': 'disabled'}`} className={`py-2 w-full max-w-[200px] md:max-w-[250px] border-2 border-dashed border-${isCorrect? 'cyan-500 text-cyan-500': 'gray-500 text-gray-500'} rounded-xl  text-2xl font-semibold`} >Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TranscribeNumber;