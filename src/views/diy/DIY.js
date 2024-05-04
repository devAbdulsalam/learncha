import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthUser from '../climate/AuthUser';
import DIYHeader from './components/DIYHeader';
import Loader from './components/Loader';

const DIY = () => {
	const [notifications, setNotifications] = useState([]);
	const [isLoadingNotif, setIsLoadingNotif] = useState(false);
	const [isLoadingDIY, setIsLoadingDIY] = useState(false);
	const api = process.env.REACT_APP_API_URL;
	const getNotifications = (query) => {
		setIsLoadingNotif(true);
		fetch(`${api}/do_it_yourself/youtube`, {
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem('accessToken')
				)}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
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

	const [showChallengeModal, setShowChallengeModal] = useState(false);

	const toggleChallengeModal = () => {
		setShowChallengeModal((prevValue) => !prevValue);
	};

	const [showNotif, setShowNotif] = useState(false);

	const toggleShowNotif = () => {
		setShowNotif((prevValue) => !prevValue);
	};

	const queries = [
		'DIY weather for kids',
		'DIY climate change for kids',
		'science for kids',
		'maths for kids weather forecast',
		'abc for kids and climate challenge',
		'numbers for kids and weather',
		'alphabets for kids and climate',
	];
	const [diyVideos, setDiyVideos] = useState([]);

	const getDIY = () => {
		const randomQuery = queries[Math.floor(Math.random() * queries.length)];
		setIsLoadingDIY(true);
		fetch(`${api}/do_it_yourself/youtube`, {
			method: 'post',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `form=${randomQuery}`,
		})
			.then((response) => response.json())
			.then((data) => {
				setDiyVideos(data.data);
				setIsLoadingDIY(false);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getDIY();
	}, []);

	return (
		<section className="promo w-full flex flex-col items-center py-4x">
			<DIYHeader title="DIY" />
			<div
				style={{ fontFamily: 'Gochi Hand' }}
				className="flex flex-col shadow-3xl w-full text-center text-2xl mb-8 mt-2"
			>
				<p>
					Watch your most favorite STEM videos and learn about climate while you
					build your own things.
				</p>
				<p className="text-red-400 font-bold text-4xl mt-2">
					WELCOME ONBOARD!{' '}
				</p>
			</div>
			<div className="relative w-full max-w-7xl border-2 border-dashed rounded-3xl overflow-hidden border-cyan-500">
				<div className=" w-full items-center justify-center flex flex-col gap-3 py-4 shadow px-4 md:px-8">
					<form className="w-full flex gap-4">
						<div className="relative flex w-full">
							<div className="w-full flex justify-center">
								<label className="sr-only">Search DIY</label>
								<input
									id="search_challenge"
									placeholder="Search DIY"
									className="border rounded-xl w-full py-2.5 px-2"
								/>
							</div>
							<button className="absolute right-0 flex justify-center items-center h-full px-3">
								<i className="fa fa-search"></i>
							</button>
						</div>
						{/* <div className="relative inline-block">
                        <div>
                            <button onClick={() => toggleShowNotif()} type="button" className="relative inline-flex w-12 h-12 justify-center items-center rounded-full overflow-hidden border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button">
                                <span className='text-xl'><i className='fa fa-bell'></i></span>
                                <span className={`absolute flex justify-center items-center rounded-full top-1 right-2 text-xs text-white bg-red-500 w-5 h-5`}>{notifications.length}</span>
                            </button>
                        </div>
                        <div className={`${showNotif? '': 'hidden'} flex items-center absolute right-0 z-10 mt-2 w-56 md:w-72 lg:w-80 h-56 lg: overflow-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            {
                                isLoadingNotif?
                                <Loader />
                                :
                                <div className='p-3'>
                                    {
                                        notifications.map(notification => {
                                            return (
                                            <div className='flex flex-wrap border-b py-1 px-[1px]'>
                                                <span className=''>{notification.split(':')[0]}</span>
                                                <span className='text-cyan-500 capitalize font-medium italic'>{notification.split(':')[1]}</span>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div> */}
					</form>
				</div>
				<div className="flex justify-center pt-4 pb-2 px-6">
					<form className="w-full flex justify-between">
						<Link to="/" className="text-2xl hover:text-cyan-500">
							<i className="fa fa-arrow-left"></i>
						</Link>
						{/* <div className='flex items-center gap-1'>
                        <label>Filter</label>
                        <select className='w-32 py-1 rounded-lg pl-2'>
                            <option className='py-1'>Climate</option>
                            <option className='py-1'>Weather</option>
                            <option className='py-1'>Mathematics</option>
                            <option className='py-1'>Science</option>
                        </select>
                    </div> */}
					</form>
				</div>
				<div className="flex px-6 h-full overflow-auto justify-center items-start lg:justify-start gap-6 flex-col">
					<div className="flex h-full overflow-y-auto flex-col w-full overflow-auto py-4">
						<div className="flex flex-col gap-4 w-full overflow-auto">
							<div className="font-sans border rounded-xl shadow p-4 md:px-6 lg:px-8 lg:py-6">
								{isLoadingDIY ? (
									<Loader />
								) : (
									<div className="grid lg:grid-cols-3 gap-8">
										{diyVideos.map((video) => {
											return (
												<div className="">
													<iframe
														height="315"
														src={`https://www.youtube.com/embed/${video.id}`}
														className="w-full rounded-lg"
														title="YouTube video player"
														frameborder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowfullscreen
													></iframe>
												</div>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</div>
					{/*<div className='flex flex-col items-start justify-center w-full h-auto lg:h-[768px] lg:max-w-xs self-start py-4'>
                    <div className='w-full lg:max-w-3xl h-full py-2 overflow-auto p-3 rounded-xl shadow'>
                        <h3 style={{fontFamily: 'Gochi Hand'}} className='font-semibold text-xl pb-4 pt-2'>Trending Videos</h3>
                        <div className='border border-gray-400'>
                            <div className="" data-aos="zoom-in">
                                <iframe height="315" src="https://www.youtube.com/embed/JgvDuLcL4yQ" className="w-full rounded-lg"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    </div>*/}
				</div>
			</div>
		</section>
	);
};

export default DIY;
