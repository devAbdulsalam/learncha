import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../transcribers/components/Loader';
import Nav from '../components/Nav';

const Dictionary = () => {
	const [isSuccess, setIsSuccess] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [word, setWord] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSpeaking, setIsSpeaking] = useState(false);

	const api = process.env.REACT_APP_API_URL;
	const searchWord = () => {
		let isFound = false;
		setIsLoading(true);
		fetch(`${api}/dictionary/dictionary`, {
			method: 'post',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `word=${searchValue}`,
		})
			.then((response) => {
				if (response.status === 200) {
					isFound = true;
				}
				return response.json();
			})
			.then((data) => {
				if (isFound) {
					setIsSuccess(true);
					setWord(data.definitions);
				} else {
					setWord([]);
					setIsSuccess('empty');
				}
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	};

	const speak = (value) => {
		let speakData = new SpeechSynthesisUtterance();
		speakData.volume = 1; // From 0 to 1
		speakData.rate = 1; // From 0.1 to 10
		speakData.pitch = 2; // From 0 to 2
		speakData.lang = 'en';

		if (value === 'speakWord') {
			if (searchValue) {
				speakData.text = searchValue;
			}
			speechSynthesis.speak(speakData);
		} else if (value === 'speakDefinition') {
			setIsSpeaking(true);
			if (word.length > 0) {
				speakData.text = word;
			}
			speechSynthesis.speak(speakData);
		} else {
			setIsSpeaking(false);
			speechSynthesis.cancel();
		}
	};

	useEffect(() => {
		speak('reload');
	}, [searchValue]);

	return (
		<section className="promo flex flex-col items-center justify-center w-full pb-6">
			<div>
				<h1>Resources</h1>
			</div>
			<div className="w-full max-w-5xl px-5">
				<h2
					style={{ fontFamily: `'Gochi Hand', cursive` }}
					className="text-xl text-center"
				>
					Get access to wide range of study resources/materials, books, in
					various formats (like pdf) read, download and share at will. You can
					also use our dicrionary to assist you in your learning journey...
				</h2>
			</div>
			<div className="flex flex-col items-center w-full py-8 px-2 md:px-8 gap-4 md:gap-8 xl:gap-12">
				<div className="relative flex flex-col gap-4 justify-center w-full overflow-y-auto max-w-5xl items-center py-6 border-2 rounded-xl overflow-hidden border-dashed border-green-500">
					<Nav
						backwardLink="/resources"
						forwardLink="/resources/dictionary"
						color="green-200"
						hoverColor="green"
					/>
					<h3
						style={{ fontFamily: `'Gochi Hand', cursive` }}
						className="text-green-400 font-semibold text-4xl pb-4"
					>
						Dictionary
					</h3>
					<div className="flex flex-col items-center h-full w-full">
						<form className="w-full flex justify-center px-8">
							<div className="relative w-full max-w-2xl">
								<label className="sr-only">Search Item</label>
								<input
									style={{ fontFamily: 'Gochi Hand' }}
									onChange={(e) => setSearchValue(e.target.value)}
									name="word"
									id="word"
									placeholder="Search word..."
									className="text-center  text-xl w-full py-2 md:py-3 px-3 rounded-xl border-2 border-dashed focus:shadow-lg focus:border-green-500"
								/>
								<div className="absolute right-0 top-0 h-full p-[2px]">
									<button
										type="button"
										onClick={() => searchWord()}
										className="flex justify-center items-center h-full px-3 text-xl bg-gray-100 rounded-r-xl"
									>
										<i className="fa fa-search"></i>
									</button>
								</div>
							</div>
						</form>
						{isSuccess && (
							<div className="py-3 text-xl w-full flex justify-center">
								<div className="flex px-8 w-full max-w-2xl justify-between">
									<div className="flex justify-center items-center">
										<button
											onClick={() => speak('speakWord')}
											className="hover:text-green-500 text-2xl pr-2"
										>
											<i className="fa fa-microphone"></i>
										</button>
										<span>{searchValue}</span>
									</div>
									<div>
										{isSpeaking ? (
											<button
												onClick={() => speak('stop')}
												className="hover:text-green-500"
											>
												<i className="fa fa-pause"></i>
											</button>
										) : (
											<button
												onClick={() => speak('speakDefinition')}
												className="hover:text-green-500"
											>
												<i className="fa fa-play"></i>
											</button>
										)}
									</div>
								</div>
							</div>
						)}
						{isLoading ? (
							<div className="py-16">
								<Loader />
							</div>
						) : (
							<div className="h-full">
								{isSuccess === true ? (
									<div className="flex flex-col w-full max-w-3xl px-4">
										{word.map((wordItem, index) => {
											return (
												<div className="pt-4">
													<h4 className="uppercase font-semibold py-2 pt-6">
														Definition {index + 1}
													</h4>
													{wordItem.map((definition, index) => {
														return (
															<p className="">
																<span className="font-semibold">
																	{index + 1}
																</span>
																. <span className="pl-1">{definition}</span>
															</p>
														);
													})}
												</div>
											);
										})}
									</div>
								) : isSuccess === '' ? (
									<div
										style={{ fontFamily: 'Gochi Hand' }}
										className="flex flex-col justify-center items-center h-72 text-green-600 text-opacity-50"
									>
										<span className="animate-bounce text-4xl">
											<i className="fa fa-chevron-up"></i>
										</span>
									</div>
								) : (
									<div className="py-6">Word not found!</div>
								)}
							</div>
						)}
					</div>
				</div>

				{/*<img src='https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600' />*/}
			</div>
		</section>
	);
};

export default Dictionary;
