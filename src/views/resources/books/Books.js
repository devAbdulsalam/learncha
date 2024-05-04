import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Loader from '../components/Loader';

const Books = () => {
	const [isLoadingBooks, setIsLoadingBooks] = useState(false);
	const colors = {
		one: ['red-100', 'red'],
		two: ['blue-100', 'blue'],
		three: ['green-100', 'green'],
		four: ['yellow-200', 'yellow'],
		five: ['amber-200', 'amber'],
		six: ['fuchsia-100', 'fuchsia'],
	};

	const [bookCat, setBookCat] = useState([]);
	const [books, setBooks] = useState([]);
	const api = process.env.REACT_APP_API_URL;
	const fetchBooks = () => {
		setIsLoadingBooks(true);
		fetch(`${api}/books`, {
			accept: 'application/json',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setBooks(data);
				const tempBookCat = [];
				setIsLoadingBooks(false);
				data.forEach((dataItem) => {
					if (tempBookCat.indexOf(dataItem.category) === -1) {
						tempBookCat.push(dataItem.category);
					} else {
						console.log('Category a;ready exixts!');
					}
				});
				setBookCat(tempBookCat);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	function downloadFile(url, fileName) {
		console.log('Started downloading...');
		fetch(url, {
			method: 'get',
			mode: 'no-cors',
			referrerPolicy: 'no-referrer',
		})
			.then((res) => res.blob())
			.then((res) => {
				const aElement = document.createElement('a');
				aElement.setAttribute('download', fileName);
				const href = URL.createObjectURL(res);
				aElement.href = href;
				aElement.setAttribute('target', '_blank');
				aElement.click();
				URL.revokeObjectURL(href);
				console.log('Download completed!...');
			});
	}

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
				<div className="relative flex flex-col justify-center w-full max-w-5xl items-center py-6 border-2 rounded-xl overflow-hidden border-dashed border-red-500">
					<Nav
						backwardLink="/resources"
						forwardLink="/resources/dictionary"
						color="red-100"
						hoverColor="red"
					/>
					<h3
						style={{ fontFamily: `'Gochi Hand', cursive` }}
						className="text-red-400 font-semibold text-5xl pb-4"
					>
						Books
					</h3>
					{isLoadingBooks ? (
						<div className="flex justify-center items-center h-96">
							<Loader />
						</div>
					) : (
						bookCat.map((cat) => {
							console.log(cat);
							return (
								<div className="p-4 md:p-6">
									<div
										style={{ fontFamily: 'Gochi Hand' }}
										className="shadow uppercase font-semibold py-3 px-2 md:pl-8 mb-3 md:mb-5 text-xl md:text-2xl lg:text-3xl rounded-lg"
									>
										<h3 className={`text-green-500`}>{cat}</h3>
									</div>
									<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
										{books.map((book) => {
											if (book.category === cat) {
												return (
													<div className="w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl flex flex-col gap-1 px-2 md:px-4 py-3 md:py-4 rounded-xl shadow">
														<div className="w-full bg-red-400">
															<img
																className="w-full h-   full"
																alt=""
																src={`${
																	book.thumbnail[0]
																		? book.thumbnail[0].thumbnail_url
																		: 'https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600'
																}`}
															/>
														</div>
														<div className="flex flex-col w-full py-1 px-2">
															<p>
																<span
																	style={{ fontFamily: 'Gochi Hand' }}
																	className="text-green-500 text-lg"
																>
																	Title
																</span>{' '}
																:{' '}
																<span className="capitalize">{book.name}</span>
															</p>
															<p>
																<span
																	style={{ fontFamily: 'Gochi Hand' }}
																	className="text-green-500 text-lg"
																>
																	Author
																</span>{' '}
																: <span className="capitalize"></span>
															</p>
															<p className="flex items-center">
																<span
																	style={{ fontFamily: 'Gochi Hand' }}
																	className="text-green-500 text-lg"
																>
																	ISBN
																</span>
																:
																<span className="pl-1 capitalize">
																	{book.book_isbn.slice(0, 20)}
																</span>
															</p>
														</div>
														<div className="flex justify-center gap-4 md:gap-8">
															<a
																href={`https${book.url.split('http')[1]}`}
																target="_blank"
																rel="noreferrer"
																className="flex justify-center border-2 border-dashed rounded-md border-green-500 text-green-500 w-full max-w-xs py-1"
															>
																Read
															</a>
															<button
																onClick={() =>
																	downloadFile(
																		`https${book.url.split('http')[1]}`,
																		book.name
																	)
																}
																className="flex justify-center border-2 border-dashed rounded-md border-green-500 text-green-500 w-full max-w-xs py-1"
															>
																Download
															</button>
														</div>
													</div>
												);
											}
										})}
									</div>
								</div>
							);
						})
					)}
				</div>

				{/*<img src='https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600' />*/}
			</div>
		</section>
	);
};

export default Books;
