import './index.css';
import { useState, useEffect } from 'react';

function App() {
	const [speech, setSpeech] = useState('Initial value');
	// const numberToWords = require('number-to-words');
	const numToWords = require('./modules/numToEnglish');
	console.log(numToWords(7369375595956349989974387938678));

	useEffect(() => {
		console.log('speech');
	}, [speech])

	const GetSpeech = (speech) => {
		console.log(typeof speech)
		if (typeof speech === 'string') {
			speak(speech);
		} else if (typeof speech === 'number') {
			const numToWord = numToWords(speech);
			console.log(numToWord, speech);
			speak(numToWord, [speech, numToWord]);
		} else {
			console.log("clicked microphone");
			const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

			let recognition = new SpeechRecognition();
				recognition.onstart = () => {
					console.log("starting listening, speak in microphone");
				}
				recognition.onspeechend = () => {
					console.log("stopped listening");
					recognition.stop();
				}
				recognition.onresult = (result) => {
					console.log(result.results[0][0].transcript);
					speak(result.results[0][0].transcript);
				}

				recognition.start();
		}
	}

	const getTextAPI = async () => {

		const text = await fetch(
			'http://learncha.mybluemix.net/transcribe/transcribe_words',
			{method: 'GET'}
			)
			.then(res => {
				const response = res.json()
				return response;
			})
			.catch(err => err.json());
		GetSpeech(text);
	}

	const getSentenceAPI = async () => {

		const text = await fetch(
			'http://learncha.mybluemix.net/transcribe/transcribe_sentence',
			{method: 'GET'}
			)
			.then(res => {
				const response = res.json()
				return response;
			})
			.catch(err => err.json());
		GetSpeech(text);
	}

	const getNumberAPI = async () => {

		const value = await fetch(
			'http://learncha.mybluemix.net/transcribe/transcribe_numbers',
			{method: 'GET'}
			)
			.then(res => {
				const response = res.json();
				return response;
			})
			.catch(err => err.json());

		console.log(typeof value);
		const newValue = value;
		console.log(newValue);

		GetSpeech(newValue);
	}

	const speak = (speech, speechValue) => {
		console.log(speechValue);
		if (!speechValue) {
			setSpeech(speech);
		} else {
			setSpeech(speechValue);
		}
		window.speechSynthesis.speak(new SpeechSynthesisUtterance(speech));
	}

	return (
		<div className="">
			<h1 className="text-3xl font-bold underline font-RibeyeRegular">Welcome to LearnChar</h1>
			{/* <div>
				<button className='border-2 rounded border-green-500 px-3' onClick={() => { GetSpeech() }}>Speak</button>
				<button className='border-2 rounded border-green-500 px-3' onClick={() => { getTextAPI() }}>Generate Text</button>
				<button className='border-2 rounded border-green-500 px-3' onClick={() => { getSentenceAPI() }}>Generate Sentence</button>
				<button className='border-2 rounded border-green-500 px-3' onClick={() => { getNumberAPI() }}>Generate Number</button>
			</div>
			<p>{
				(Array.isArray(speech) && speech.map(value => <p className='text-green-500'>{value}</p>)) || <p className='text-orange-500'>{speech}</p>
			}
			</p> */}
		</div>
	);
}

export default App;
