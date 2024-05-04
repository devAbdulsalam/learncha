import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import Loader from './components/Loader';
import MainHead from './components/MainHead';
import Nav from './components/Nav';

const TranscribeAlphabets = () => {
	const [isLoading, setIsLoading] = useState(true);
	const valuesToChange = [7, 12, 17, 22];
	const alphabets = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const [word, setWord] = useState('');

	const api = process.env.REACT_APP_API_URL;

	const fetchWords = async (query) => {
		const formBody = Object.keys(query)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
			)
			.join('&');
		console.log(query);
		console.log('Started fetching word from database');
		setIsLoading(true);
		await fetch(`${api}/transcribe/transcribe_alphabet`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `${formBody}`,
		})
			.then((res) => {
				console.log('Fetched word from database');
				return res.json();
			})
			.then((data) => {
				setIsLoading(false);
				console.log('Transmitting word from database');
				setWord(data);
				console.log('Speaking word!');
				window.speechSynthesis.speak(
					new SpeechSynthesisUtterance(`${query.alphabet} is for ${data}`)
				);
			})
			.catch((err) => console.log(err));
		console.log('Transmission completed!');
	};

	const displayWord = async (alphabet) => {
		const requestData = { alphabet };
		await fetchWords(requestData);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			<div className="promo flex flex-col items-center justify-center w-full pb-6">
				<MainHead title="Transcribers" />
			</div>
			<div className="flex justify-center w-full h-screen py-5">
				<div className="w-full max-w-4xl pb-6 px-4">
					<Head title="Transcribe Alphabets" color="text-red-400" />
					<div className="border-2 border-dashed border-red-400 px-3 py-2 rounded-3xl h-full w-full">
						<div className="flex flex-col justify-center items-center h-full w-full bg-red-400 rounded-xl p-2 ">
							{isLoading ? (
								<Loader />
							) : (
								<div className="relative flex flex-col justify-around h-full text-white">
									<Nav
										backwardLink="/transcribers"
										forwardLink="/transcribers/transcribe-words"
										color="cyan"
									/>
									<div
										style={{ fontFamily: 'Gochi Hand' }}
										className="flex justify-center items-center capitalize text-5xl w-full text-yellow-400"
									>
										{word}
									</div>
									<div className="grid grid-cols-5 md:grid-cols-7 gap-5 px-3">
										{alphabets.map((alphabet, index, arr) => {
											return (
												<button
													onClick={() => displayWord(alphabet)}
													style={{ fontFamily: 'Gochi Hand' }}
													className="text-xl md:text-2xl border-2 border-dashed border-white rounded-full overflow-hidden p-[2px] w-12 h-12 md:w-16 md:h-16 flex"
												>
													<div
														className={`flex justify-center items-center ${
															valuesToChange.includes(index + 1)
																? 'bg-yellow-500'
																: 'bg-gray-100 bg-opacity-[15%]'
														} h-full w-full rounded-full hover:bg-cyan-500`}
													>
														{alphabet.toUpperCase()}
														{alphabet}
													</div>
												</button>
											);
										})}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TranscribeAlphabets;
