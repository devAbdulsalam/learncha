import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import img from '../../images/second3.jpg';
import AuthUser from './AuthUser';
import UpdateChallenegeModal from './components/updateChallengeModal';

const SingleChallenge = () => {
	const { challenge } = useParams();
	const currentChallengeID = challenge.split('=')[1];
	const [currentChallenge, setCurrentChallenge] = useState([]);
	const [isChallengeMember, setIsChallengeMember] = useState(false);
	const [challengeProgress, setChallengeProgress] = useState(true);

	const isActiveUser = AuthUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (!challenge.includes('challenge_ID')) {
			console.log('returning: ', isActiveUser);
			navigate('/climate/challenge');
		}
	});
	const api = process.env.REACT_APP_API_URL;
	const getCurrentChallenge = () => {
		console.log('Getting current challenge');
		fetch(`${api}/challenge/progress/${currentChallengeID}`, {
			headers: {
				accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCurrentChallenge(data);
				const challengeMembers = data.challenge_members;
				const challengeCreator = data.users_table.id;
				const presentChallenge = data;
				fetch(`${api}/me`, {
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('accessToken')
						)}`,
					},
				})
					.then((response) => response.json())
					.then((user) => {
						console.log(user);
						// challenge
						console.log(
							challengeMembers.some((member) => member.user_id === user.id)
						);
						console.log(challengeCreator, user.id);
						if (
							challengeMembers.some((member) => member.user_id === user.id) !==
								true ||
							challengeCreator !== user.id
						) {
							setIsChallengeMember(false);
							console.log('Wrong');
						} else {
							setIsChallengeMember(true);
							console.log('correct');
						}
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getCurrentChallenge();
	}, []);

	const [showChallengeModal, setShowChallengeModal] = useState(false);
	const toggleChallengeModal = () => {
		console.log('Modal toggled');
		setShowChallengeModal((prevValue) => !prevValue);
	};

	const [showJoinChallengeModal, setShowJoinChallengeModal] = useState(false);
	const toggleJoinChallengeModal = () => {
		console.log('Modal toggled');
		setShowJoinChallengeModal((prevValue) => !prevValue);
	};

	return (
		<section className="promo w-full flex flex-col items-center py-4x">
			{showChallengeModal && (
				<UpdateChallenegeModal
					toggleChallengeModal={toggleChallengeModal}
					challengeID={currentChallengeID}
				/>
			)}
			<div className="border-b shadow-3xl w-full h-[1px] mb-8 mt-2"></div>
			<div className="relative w-full max-w-6xl border-2 border-dashed rounded-3xl overflow-hidden border-cyan-500">
				<div className="flex flex-col items-center md:flex-row md:justify-between gap-3 py-4 shadow px-4 md:px-8">
					<div
						style={{ fontFamily: 'Gochi Hand' }}
						className="text-cyan-500 font-semibold text-3xl text-center md:text-start"
					>
						Climate Challenge
					</div>
					<form className="relative flex w-full max-w-md md:max-w-xs">
						<div className="w-full flex justify-center">
							<label className="sr-only">Search Climate</label>
							<input
								id="search_challenge"
								placeholder="Search Challenges..."
								className="border rounded-xl w-full py-2.5 px-2"
							/>
						</div>
						<button className="absolute right-0 flex justify-center items-center h-full px-3">
							<i className="fa fa-search"></i>
						</button>
					</form>
				</div>
				<div className="flex px-6 py-4 h-full overflow-auto justify-center items-start lg:justify-start gap-4 flex-col lg:flex-row">
					<div className="flex w-full py-2 gap-2 items-baseline">
						<Link
							to="/climate/challenge"
							className="text-2xl hover:text-cyan-500"
						>
							<i className="fa fa-arrow-left"></i>
						</Link>
						<p
							style={{ fontFamily: 'Gochi Hand' }}
							className="justify-center w-full flex text-xl md:text-2xl lg:text-4xl uppercase text-cyan-500 font-bold"
						>
							{currentChallenge.name}
						</p>
					</div>
				</div>
				<div className="w-full flex flex-col border">
					<div className="text-xl w-full flex flex-col p-8">
						<p
							style={{ fontFamily: 'Gochi Hand' }}
							className="text-3xl font-bold py-2 text-cyan-500"
						>
							Category : {currentChallenge.challenge_type}
						</p>
						<p className="font-normal text-justify font-sans">
							<span
								style={{ fontFamily: 'Gochi Hand' }}
								className="font-bold text-2xl text-red-400"
							>
								Description
							</span>{' '}
							: {currentChallenge.description}
						</p>
					</div>
					<div className="text-xl w-full flex flex-col p-8">
						<p
							style={{ fontFamily: 'Gochi Hand' }}
							className="text-2xl font-bold py-4 text-cyan-500"
						>
							Creator's Progress
						</p>
						<div className="overflow-auto w-full flex">
							<div className="flex w-40 h-40 gap-4">
								<img className="h-full w-full" src={img} />
							</div>
						</div>
					</div>
					<div className="text-xl w-full flex flex-col p-8">
						<p
							style={{ fontFamily: 'Gochi Hand' }}
							className="text-2xl font-bold py-2 text-cyan-500"
						>
							Participant's Progress
						</p>
						<div className="overflow-auto w-full flex">
							<div className="flex w-40 h-40 gap-4">
								<img className="h-full w-full" src={img} />
							</div>
						</div>
					</div>
					<div className="text-xl w-full flex flex-col px-8">
						<p className="font-bold py-4">Participants</p>
						<div className="overflow-auto w-full flex">
							<div class="flex -space-x-4">
								<img
									className="w-10 h-10 rounded-full border-2 border-white"
									src={img}
								/>
								<img
									className="w-10 h-10 rounded-full border-2 border-white"
									src={img}
								/>
								<img
									className="w-10 h-10 rounded-full border-2 border-white"
									src={img}
								/>
								<a
									className="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
									href="#"
								>
									+99
								</a>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center mb-4">
						{!isChallengeMember ? (
							<button
								style={{ fontFamily: 'Gochi Hand' }}
								className="uppercase bg-white text-cyan-500 border-2 border-dashed border-cyan-400 hover:bg-cyan-500 hover:text-white px-10 py-3 rounded-full font-semibold text-xl"
							>
								join the challenge
							</button>
						) : (
							<button
								style={{ fontFamily: 'Gochi Hand' }}
								onClick={toggleChallengeModal}
								className="uppercase bg-white text-cyan-500 border-2 border-dashed border-cyan-400 hover:bg-cyan-500 hover:text-white px-10 py-3 rounded-full font-semibold text-xl"
							>
								Upload progress
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleChallenge;
