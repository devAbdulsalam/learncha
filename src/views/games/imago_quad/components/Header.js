import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
	const navigate = useNavigate();

	const leaveGame = () => {
		if (props.playState) {
			props.togglePlay();
		} else {
			navigate('/games');
		}
	};

	return (
		<header className="mb-10">
			<div className="relative flex items-center justify-center w-full px-4 py-3 text-lg font-bold bg-green-500">
				<div className="flex items-center gap-4 text-white mr-auto">
					{
						<button
							onClick={() => leaveGame()}
							className="flex text-3xl rotate-90"
						>
							<span className="animate-bounce">
								<span className="flex rotate-90">
									<i className="fa fa-arrow-right"></i>
								</span>
							</span>
						</button>
					}
					<h1 className="text-3xl">Imago Quad</h1>
				</div>
				<div className="flex items-center gap-2">
					{props.playState && (
						<button
							onClick={props.togglePlay}
							className="flex justify-center items-center w-8 h-8 bg-white p-1 rounded-full"
						>
							<span
								className={`${
									props.playState && 'hidden'
								} text-sm text-green-500`}
							>
								<i className="fa fa-play"></i>
							</span>
							<span
								className={`${
									!props.playState && 'hidden'
								} text-sm text-green-500`}
							>
								<i className="fa fa-pause"></i>
							</span>
						</button>
					)}
					<button className="flex gap-x-1 px-1.5 py-1 bg-white rounded-xl">
						<span className="block text-lg md:text-xl pl-1 font-bold text-green-500 self-center">
							{props.coinQuantity}
						</span>
						<span className="block text-lg px-1 font-bold text-yellow-500 self-center">
							<i className="fa fa-coins"></i>
						</span>
						<span className="text-sm text-green-500 font-semibold self-center">
							<i className="fa fa-plus"></i>
						</span>
					</button>
					<button
						title="Instructions"
						onClick={props.toggleInstruction}
						className="flex gap-x-1 px-1.5 py-1 bg-white rounded-xl"
					>
						<span className="text-sm text-green-500 font-semibold self-center">
							<i className="fa fa-info"></i>
						</span>
					</button>
				</div>
				<div className="absolute flex justify-center w-full -bottom-6 left-0">
					{props.playState && (
						<span className="flex justify-center items-center w-12 h-12 text-green-500 bg-white shadow shadow-green-500 rounded-full">
							{props.gameLevel}
						</span>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
