import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
// import AllChallenges from './components/AllChallenges';
import ClimateHeader from './components/ClimateHeader';
import CreateChallengeModal from './components/CreateChallengeModal';
import TrendingChallenge from './components/TrendingChallenge';

// import images
// import underground from './images/underground.png';

// import helper functions
// import viewChallenge from './functions/viewChallenge';
import Loader from './components/Loader';

const ClimateChallenge = () => {
	const [notifications, setNotifications] = useState([]);
	const [isLoadingNotif, setIsLoadingNotif] = useState(false);
	const api = process.env.REACT_APP_API_URL;

	const getNotifications = (query) => {
		setIsLoadingNotif(true);
		console.log('Fetching Notification');
		fetch(`${api}/users/notification`, {
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem('accessToken')
				)}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const createNotifier = data.notifier;
				const joinNotifier = data.notifier_join;
				const allNotifications = [];
				createNotifier.forEach((notifier) =>
					allNotifications.push(notifier.message)
				);
				joinNotifier.forEach((notifier) =>
					allNotifications.push(notifier.message)
				);
				setNotifications(allNotifications);
				setIsLoadingNotif(false);
			});
	};

	useEffect(() => {
		getNotifications();
	}, []);

	const isActiveUser = AuthUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (!isActiveUser) {
			console.log('returning: ', isActiveUser);
			navigate('/climate/login');
		}
	});

	const [showChallengeModal, setShowChallengeModal] = useState(false);
	const toggleChallengeModal = () => {
		console.log('Modal toggled');
		setShowChallengeModal((prevValue) => !prevValue);
	};

	const [showNotif, setShowNotif] = useState(false);

	const toggleShowNotif = () => {
		console.log('Navugation toggled...');
		setShowNotif((prevValue) => !prevValue);
	};

	return (
		<section className="promo w-full flex flex-col items-center py-4x">
			<ClimateHeader title="Climate" />
			{showChallengeModal && (
				<CreateChallengeModal toggleChallengeModal={toggleChallengeModal} />
			)}
			<div className="border-b shadow-3xl w-full h-[1px] mb-8 mt-2"></div>
			<div className="relative w-full max-w-7xl border-2 border-dashed rounded-3xl overflow-hidden border-cyan-500">
				<div className="flex flex-col items-center md:flex-row md:justify-between gap-3 py-4 shadow px-4 md:px-8">
					<div
						style={{ fontFamily: 'Gochi Hand' }}
						className="text-cyan-500 font-semibold text-3xl text-center md:text-start"
					>
						Climate Challenge
					</div>
					<form className="w-full flex gap-4 max-w-md md:max-w-sm">
						<div className="relative flex w-full">
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
						</div>
						<div className="relative inline-block">
							<div>
								<button
									onClick={() => toggleShowNotif()}
									type="button"
									className="relative inline-flex w-12 h-12 justify-center items-center rounded-full overflow-hidden border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
									id="menu-button"
								>
									<span className="text-xl">
										<i className="fa fa-bell"></i>
									</span>
									<span className="absolute flex justify-center items-center rounded-full top-1 right-2 text-xs text-white bg-red-500 w-5 h-5">
										{notifications.length}
									</span>
								</button>
							</div>
							<div
								className={`${
									showNotif ? '' : 'hidden'
								} absolute right-0 z-10 mt-2 w-56 md:w-72 lg:w-80 h-56 lg: overflow-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabindex="-1"
							>
								{isLoadingNotif ? (
									<div className="flex items-center h-full">
										<Loader />
									</div>
								) : (
									<div className="p-3">
										{notifications.map((notification) => {
											return (
												<div className="flex flex-wrap border-b py-1 px-[1px]">
													<span className="">{notification.split(':')[0]}</span>
													<span className="text-cyan-500 capitalize font-medium italic">
														{notification.split(':')[1]}
													</span>
												</div>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</form>
				</div>
				<div className="flex px-6 h-full overflow-auto justify-center items-start lg:justify-start gap-6 md:gap-10 lg:gap-16 flex-col lg:flex-row">
					<div className="flex h-full overflow-y-auto flex-col w-full overflow-auto py-4">
						<div className="py-2">
							<Link to="/climate" className="text-2xl hover:text-cyan-500">
								<i className="fa fa-arrow-left"></i>
							</Link>
						</div>
						<div className="flex flex-col gap-4 w-full overflow-auto">
							<div className="font-sans border rounded-xl shadow p-4 md:px-6 lg:px-8 lg:py-6">
								<h2 className="font-semibold text-2xl pb-4">
									About The Challenge
								</h2>
								<p className="text-justify pb-2">
									Cities and local communities around the world have been
									focusing on solving their own climate problems. They are
									working to build flood defenses, plan for heat waves and
									higher temperatures, install better-draining pavements to deal
									with floods and stormwater, and improve water storage and use.
								</p>
								<p className="text-justify">
									And the best way to achieve this is by joining forces together
									because 'Together we can make the world a better place'. This
									platform aims at bringing people together, to tackle the
									various issues faced by our climate today, in order to
									mitigate obvious threats that these issues pose to us.
								</p>
							</div>
							<div className="font-sans border rounded-xl shadow p-4 md:px-6 lg:px-8 lg:py-6">
								<h2 className="font-semibold text-2xl pb-4">
									Challenge Categories
								</h2>
								<p className="pb-3 text-base">
									There are many categories of the challenges that you can join,
									create and/or invite family, friends, colleauges to partake of
									in order to '
									<span className="font-semibold text-cyan-500 italic">
										make the world a better place for us to live in
									</span>
									':
								</p>
								<div className="grid md:grid-cols-2 xl:grid-cols-3 p-4 gap-5 xl:gap-8">
									<div className="shadow rounded-xl overflow-auto cursor-pointer">
										<div>
											<img
												alt="protect the oceans"
												src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=600"
											/>
										</div>
										<div className="text-center py-2  text-red-600 font-semibold">
											<span>Protect the oceans</span>
										</div>
									</div>
									<div className="shadow rounded-xl overflow-auto cursor-pointer">
										<div>
											<img
												alt="protect the oceans"
												src="https://images.pexels.com/photos/5486961/pexels-photo-5486961.jpeg?auto=compress&cs=tinysrgb&w=600"
											/>
										</div>
										<div className="text-center py-2  text-red-600 font-semibold">
											<span>Severe Fire</span>
										</div>
									</div>
									<div className="shadow rounded-xl overflow-auto cursor-pointer">
										<div>
											<img
												alt="protect the oceans"
												src="https://images.pexels.com/photos/257775/pexels-photo-257775.jpeg?auto=compress&cs=tinysrgb&w=600"
											/>
										</div>
										<div className="text-center py-2  text-red-600 font-semibold">
											<span>Carbon Emission</span>
										</div>
									</div>
									<div className="shadow rounded-xl overflow-auto cursor-pointer">
										<div>
											<img
												alt="protect the oceans"
												src="https://images.pexels.com/photos/709563/pexels-photo-709563.jpeg?auto=compress&cs=tinysrgb&w=600"
											/>
										</div>
										<div className="text-center py-2  text-red-600 font-semibold">
											<span>Water Scarcity</span>
										</div>
									</div>
									<div className="shadow rounded-xl overflow-auto cursor-pointer">
										<div>
											<img
												alt="protect the oceans"
												src="https://images.pexels.com/photos/1739855/pexels-photo-1739855.jpeg?auto=compress&cs=tinysrgb&w=600"
											/>
										</div>
										<div className="text-center py-2  text-red-600 font-semibold">
											<span>Flooding</span>
										</div>
									</div>
									<div className="shadow rounded-xl overflow-auto cursor-pointer">
										<div>
											<img
												alt="protect the oceans"
												src="https://images.pexels.com/photos/3482724/pexels-photo-3482724.jpeg?auto=compress&cs=tinysrgb&w=600"
											/>
										</div>
										<div className="text-center py-2  text-red-600 font-semibold">
											<span>Declining Biodiversity</span>
										</div>
									</div>
									<div className="shadow rounded-xl overflow-auto cursor-pointer">
										<div>
											<img
												alt="protect the oceans"
												src="https://images.pexels.com/photos/3345891/pexels-photo-3345891.jpeg?auto=compress&cs=tinysrgb&w=600"
											/>
										</div>
										<div className="text-center py-2  text-red-600 font-semibold">
											<span>Intense Drought</span>
										</div>
									</div>
								</div>
								<p className="text-base font-semibold">
									Create a challenge today by clicking the button below
								</p>
								<button
									onClick={toggleChallengeModal}
									className="inline-block text-base font-semibold px-3 py-2 my-3 border border-dashed border-cyan-400 rounded-lg text-cyan-500 hover:text-white hover:bg-cyan-500"
								>
									Create Challenge
								</button>
							</div>
							{/* <div className='font-sans border rounded-xl shadow p-4'>
                            <h2 style={{fontFamily: 'Gochi Hand'}} className='font-semibold text-2xl pb-4 pt-2'>All Challenges</h2>
                            <AllChallenges />
                            <div className='flex justify-center pt-4 pb-2'>
                                <button className='border-2 border-dashed border-cyan-400 rounded-xl py-1 md:py-2 w-28 lg:w-32 text-cyan-500 hover:text-white hover:bg-cyan-500'>View All <span className='inline-flex animate-bounce'><i className='fa fa-chevron-down'></i></span></button>
                            </div>
                        </div> */}
						</div>
					</div>
					<div className="flex items-start justify-center w-full h-auto lg:h-[768px] lg:max-w-xs self-start py-4">
						<div className="w-full lg:max-w-3xl h-full py-2 overflow-auto p-3 rounded-xl shadow">
							<h3
								style={{ fontFamily: 'Gochi Hand' }}
								className="font-semibold text-xl pb-4 pt-2"
							>
								All Challenges
							</h3>
							<TrendingChallenge />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClimateChallenge;
