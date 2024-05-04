import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

// import helper functions
const viewChallenge = require('../functions/viewChallenge');

const TrendingChallenge = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [challengeContent, setChallengeContent] = useState([]);
	const api = process.env.REACT_APP_API_URL;

	const fetchTrendingChallenges = () => {
		setIsLoading(true);
		fetch(`${api}/trending/all`, {
			headers: {
				accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setChallengeContent([]);
				const sortedData = data.sort(
					(a, b) => b.progress.length - a.progress.length
				);
				const filteredData = sortedData.filter(
					(dataItem, index, arr) => index <= 4
				);
				setIsLoading(false);
				filteredData.forEach((dataItem) => {
					setChallengeContent((prevData) => [...prevData, dataItem]);
				});
			});
	};

	useEffect(() => {
		fetchTrendingChallenges();
	}, []);
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div className="w-full grid md:grid-cols-2 lg:grid-cols-1 place-items-center gap-8 font-sans">
					{challengeContent.map((item) => {
						return (
							<div className="w-full max-w-sm rounded-xl border overflow-hidden">
								<div
									className="shadow-lg py-6 w-full bg-cover h-48"
									style={{
										backgroundImage: `url(${
											item.progress.length > 0
												? item.progress[0].image
												: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=600'
										})`,
									}}
								></div>
								<div className="py-4 px-2">
									<p className="text-center uppercase font-semibold text-red-500">
										{item.name}
									</p>
									<p class="py-1 px-2">
										<span class="text-cyan-500 font-semibold font-orbitron">
											Category
										</span>
										:<span class="italic"> {item.challenge_type}</span>
									</p>
								</div>
								<div className="flex justify-center py-1">
									<Link
										className="text-cyan-500 hover:underline"
										to={`/climate/challenge/challenge_ID=${item.id}`}
									>
										View Challenge
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default TrendingChallenge;
