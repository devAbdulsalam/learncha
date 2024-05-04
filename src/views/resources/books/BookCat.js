import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../transcribers/components/Loader';
import Nav from '../components/Nav';

const BookGrade = () => {
	const { category } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const currentGrade = category.split('_')[1];
	const colors = {
		one: ['red-100', 'red'],
		two: ['blue-100', 'blue'],
		three: ['green-100', 'green'],
		four: ['yellow-200', 'yellow'],
		five: ['amber-200', 'amber'],
		six: ['fuchsia-100', 'fuchsia'],
	};

	const [books, setBooks] = useState([]);

	const api = process.env.REACT_APP_API_URL;

	const fetchBooks = () => {
		setIsLoading(true);
		let foundBooks = false;
		fetch(`${api}/books/retrieve/grade_${currentGrade}`, {
			accept: 'application/json',
		})
			.then((response) => {
				if (response.status === 200) {
					foundBooks = true;
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				if (foundBooks) {
					setBooks(data);
				} else {
					setBooks([]);
				}
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	};

	function downloadFile(url, fileName) {
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
			});
	}

	useEffect(() => {
		fetchBooks();
	}, []);

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
				<div
					className={`relative flex flex-col justify-center w-full max-w-5xl items-center py-6 border-2 rounded-xl overflow-hidden border-dashed border-${colors[currentGrade][1]}-500`}
				>
					<Nav
						backwardLink="/resources/books"
						forwardLink="/resources/books/grade_two"
						color={`${colors[currentGrade][0]}`}
						hoverColor={`${colors[currentGrade][1]}`}
					/>
					<h3
						style={{ fontFamily: `'Gochi Hand', cursive` }}
						className={`capitalize text-${
							colors[currentGrade][1] === 'amber'
								? 'amber-600'
								: `colors[currentGrade][1]-400`
						} font-semibold text-2xl md:text-4xl xl:text-5xl pb-4 text-center max-w-2xs`}
					>
						Grade {currentGrade} Books
					</h3>
					{isLoading ? (
						<Loader />
					) : (
						<div className="grid lg:grid-cols-2 gap-8 py-8 px-6">
							{books.length <= 0
								? 'No books found'
								: books.map((book) => {
										return (
											<div className="w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl flex flex-col gap-4 px-2 md:px-4 py-3 md:py-4 rounded-xl shadow">
												<div className="w-full">
													<img
														className="w-full h-64 md:h-80"
														alt=""
														src="https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600"
													/>
												</div>
												<div className="flex flex-col gap-4 w-full items-center py-4">
													<h3
														style={{ fontFamily: `'Gochi Hand', cursive` }}
														className={`text-3xl text-${colors[currentGrade][1]}-400`}
													>
														{book.filename}
													</h3>
													<div className="mb-auto w-full">
														<p className="text-center w-full text-start">
															<span
																className={`text-${
																	colors[currentGrade][1] === 'amber'
																		? 'amber-600'
																		: `${colors[currentGrade][1]}-400`
																} font-semibold`}
															>
																Author
															</span>
															: <span>Author Name</span>
														</p>
														<p className="text-center w-full text-start">
															<span
																className={`text-${
																	colors[currentGrade][1] === 'amber'
																		? 'amber-600'
																		: `${colors[currentGrade][1]}-400`
																} font-semibold`}
															>
																Year of Pub.
															</span>
															: <span>{book.created}</span>
														</p>
														<p className="text-center w-full text-start flex">
															<span
																className={`text-${
																	colors[currentGrade][1] === 'amber'
																		? 'amber-600'
																		: `${colors[currentGrade][1]}-400`
																} font-semibold`}
															>
																ISBN
															</span>
															:&nbsp;{' '}
															<span className="truncate">{book.asset_id}</span>
														</p>
													</div>
													<div
														style={{ fontFamily: `'Gochi Hand', cursive` }}
														className="flex justify-around gap-2"
													>
														<a
															href={book.url}
															target="_blank"
															rel="noreferrer"
															className={`flex justify-center items-center w-24 md:w-28 h-10 border-2 border-dashed rounded-3xl border-${colors[currentGrade][1]}-400 text-${colors[currentGrade][1]}-500 hover:text-white hover:bg-${colors[currentGrade][1]}-500`}
														>
															Read
														</a>
														<button
															onClick={() =>
																downloadFile(book.url, book.filename)
															}
															className={`flex justify-center items-center w-24 md:w-28 h-10 border-2 border-dashed rounded-3xl border-${colors[currentGrade][1]}-400 text-${colors[currentGrade][1]}-500 hover:text-white hover:bg-${colors[currentGrade][1]}-500`}
														>
															Download
														</button>
													</div>
												</div>
											</div>
										);
								  })}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default BookGrade;
