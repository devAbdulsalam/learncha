import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Intro from '../climate/components/Intro';
import MainHead from '../transcribers/components/MainHead';
// import imago_quad from './images/imago_quad.png';
import imago from '../../images/imago.webp';
import LDgame from '../../images/LDgame.png';
import Animal from '../../images/Animals.png';

const GamesIndex = () => {
	const api = process.env.REACT_APP_API_URL;
	useEffect(() => {
		// Scroll to the 'games' element when the component mounts
		const gamesElement = document.getElementById('games');
		if (gamesElement) {
			gamesElement.scrollIntoView({ behavior: 'smooth' });
		}
	}, []);
	return (
		<section
			id="games"
			className="promo flex flex-col items-center justify-center w-full pb-6"
		>
			<MainHead title="Games" />
			<Intro />
			<div className="w-full flex max-w-5xl">
				<div class="dvdr"></div>
				<div className="w-full py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 sm:p-6 md:p-8">
					<div className="flex flex-col border-2 border-dashed border-green-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer">
						<div
							className="text-center text-3xl text-green-500 py-2"
							style={{ fontFamily: 'Gochi Hand' }}
						>
							<h3>4 Pictures One Word</h3>
						</div>
						<Link to="/games/imago_quad">
							<img
								className="w-full h-72 md:h-64 rounded-b-xl"
								alt="game"
								src={imago}
							/>
						</Link>
					</div>
					<div className="flex flex-col border-2 border-dashed border-red-400 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer">
						<div
							className="text-center text-3xl text-red-400 py-2"
							style={{ fontFamily: 'Gochi Hand' }}
						>
							<h3>Memory Boxes</h3>
						</div>
						<a
							target="_blank"
							rel="noreferrer"
							href={`${api}/games/forest_game`}
						>
							<img
								className="w-full h-72 md:h-64 rounded-b-xl"
								alt=""
								src={Animal}
							/>
						</a>
					</div>
					<div className="flex flex-col border-2 border-dashed border-yellow-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer">
						<div
							className="text-center text-3xl text-yellow-500 py-2"
							style={{ fontFamily: 'Gochi Hand' }}
						>
							<h3>Math and Climate</h3>
						</div>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://goeroeg.github.io/ld-learn/apps/learn/ld-learn.html"
						>
							<img
								className="w-full h-72 md:h-64 rounded-b-xl"
								alt=""
								src={LDgame}
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GamesIndex;
