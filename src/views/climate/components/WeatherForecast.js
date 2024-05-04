import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import Loader2 from './Loader2';
import rainy from '../images/rainy.png';
import clearWeather from '../images/clearWeather.png';
import sunnyWeather from '../images/sunnyWeather.png';
// import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

const WeatherForecast = () => {
	const [location, setLocation] = useState({ long: '', latt: '' });
	const [locationInWords, setLocationInWords] = useState('');
	const [todayWeatherCondition, setTodayWeatherCondition] = useState([]);
	const [generalFeeling, setGeneralFeel] = useState('');
	const [todayAvgTemperature, setTodayAvgTemperature] = useState('');
	const [todayMinTemperature, setTodayMinTemperature] = useState('');
	const [todayMaxTemperature, setTodayMaxTemperature] = useState('');
	const [sunrise, setSunrise] = useState('');
	const [sunset, setSunset] = useState('');
	const [dayOfWeek, setDayOfWeek] = useState('');
	const [nextThreeDays, setNextThreedays] = useState([]);
	const [month, setMonth] = useState('');
	const [todayDate, setTodayDate] = useState('');
	const [narrative, setNarrative] = useState('');
	const [search, setSearch] = useState('');

	// const currentlocation = window.navigator.geolocation.getCurrentPosition(console.log, console.error);
	const api = process.env.REACT_APP_API_URL;

	const getGeoLocation = async (data) => {
		let currentLocation = {};

		// extracting the latitude and longitude from the data
		let latitude = data.coords.latitude;
		let longitude = data.coords.longitude;

		// getCurrentLocation(latitude, longitude);
		setLocation((prevLoc) => {
			return { ...prevLoc, latt: latitude, long: longitude };
		});

		// const getCurrentLocation = (latt, long) => {
		//     currentLocation.latt = latt;
		//     currentLocation.long = long;
		// }

		console.log('Getting geolocation');

		fetch(`${api}/forecast_weather/geo_code`, {
			method: 'post',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `long=${longitude}&latt=${latitude}`,
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				const todayWeather = [data.day1_day, data.day1_night];
				setTodayWeatherCondition(todayWeather);
				const otherDayWeather = [
					[data.day2_day, data.day2_night],
					[data.day3_day, data.day3_night],
					[data.day4_day, data.day4_night],
				];
				setNextThreedays(otherDayWeather);
				setTodayAvgTemperature(
					(todayWeather[0].calendarDayTemperatureMax +
						todayWeather[1].calendarDayTemperatureMin) /
						2
				);
				setSunrise(todayWeather[0].sunriseTimeLocal.split('T')[1].slice(0, 5));
				setSunset(todayWeather[0].sunsetTimeLocal.split('T')[1].slice(0, 5));
				setTodayMinTemperature(todayWeather[0].calendarDayTemperatureMin);
				setTodayMaxTemperature(todayWeather[0].calendarDayTemperatureMax);
				setDayOfWeek(todayWeather[0].dayOfWeek);
				const date = new Date();
				setTodayDate(date.getDate());
				date.setMonth(new Date().getMonth());
				setMonth(date.toLocaleString('en-US', { month: 'long' }));
				setNarrative(todayWeather[0].narrative);
				fetch(
					`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=3fc01ec0efd54fec9f12d22b658a4752`,
					{
						method: 'get',
						headers: {
							accept: 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded',
						},
					}
				)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						const fetchedLocation = data.results[0].formatted
							.split(',')
							.slice(-2);
						setLocationInWords(`${fetchedLocation[0]}, ${fetchedLocation[1]}`);
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => {
				console.log(currentLocation);
			});
	};

	// 3fc01ec0efd54fec9f12d22b658a4752
	const getWeather = (query) => {
		console.log(query);
		if (query === '') {
			if (navigator.geolocation) {
				window.navigator.geolocation.getCurrentPosition(
					getGeoLocation,
					console.error
				);
			} else {
				// alert('Location is required! Reload Page to activate');
				// return false;
			}
		} else {
			// console.log(`'Getting today's weather`);
			fetch(`${api}/forecast_weather`, {
				method: 'post',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `location=${query}`,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setLocationInWords(search);
					const todayWeather = [data.day1_day, data.day1_night];
					setTodayWeatherCondition(todayWeather);
					console.log(todayWeather[0].morning);
					const otherDayWeather = [
						[data.day2_day, data.day2_night],
						[data.day3_day, data.day3_night],
						[data.day4_day, data.day4_night],
					];
					console.log(otherDayWeather);
					setNextThreedays(otherDayWeather);
					setTodayAvgTemperature(
						(todayWeather[0].calendarDayTemperatureMax +
							todayWeather[1].calendarDayTemperatureMin) /
							2
					);
					setSunrise(
						todayWeather[0].sunriseTimeLocal.split('T')[1].slice(0, 5)
					);
					setSunset(todayWeather[0].sunsetTimeLocal.split('T')[1].slice(0, 5));
					setTodayMinTemperature(todayWeather[0].calendarDayTemperatureMin);
					setTodayMaxTemperature(todayWeather[0].calendarDayTemperatureMax);
					setDayOfWeek(todayWeather[0].dayOfWeek);
					const date = new Date();
					setTodayDate(date.getDate());
					date.setMonth(new Date().getMonth());
					setMonth(date.toLocaleString('en-US', { month: 'long' }));
					setNarrative(todayWeather[0].narrative);
				});
		}
	};

	useEffect(() => {
		getWeather('');
	}, []);

	return (
		<div className="main-container px-4 md:px-8 lg:px-10 pt-32 w-full">
			<div
				style={{ fontFamily: `'Open Sans', sans-serif` }}
				className="bg-gray-400 text-white bg-no-repeat rounded-xl overflow-hidden bg-gradient-to-b from-cyan-500 to-blue-500"
			>
				<div className="flex flex-col w-full items-center px-3 md:px-6 py-5">
					<div className="w-full max-w-5xl flex flex-col md:flex-row md:items-baseline items-center md:justify-between px-1 py-3">
						<div className="flex flex-col items-center w-full md:items-start pb-4 md:pb-0">
							<h2
								style={{ fontFamily: 'Gochi Hand' }}
								className="text-white text-3xl capitalize"
							>
								{locationInWords}
							</h2>
							<p>
								{dayOfWeek} {todayDate} {month}
							</p>
						</div>
						<div className="w-full">
							<p className="text-gray-100 w-full text-center text-xs md:text-base hidden md:block">
								Based on your location
							</p>
							<form className="flex justify-center w-full">
								<div className="relative w-full max-w-md flex justify-end rounded-2xl overflow-hidden">
									<label className="sr-only">Search Location</label>
									<button
										type="button"
										onClick={() => getWeather(search)}
										className="absolute top-0 right-0 h-full text-blue-500 flex items-center justify-center px-3"
									>
										<i className="fa fa-search"></i>
									</button>
									<input
										onChange={(e) => setSearch(e.target.value)}
										className="rounded w-full text-gray-400 ring-0 outline-none border-0"
										type="text"
										placeholder="Abuja, NG"
									/>
								</div>
							</form>
						</div>
					</div>
					<div className="w-full max-w-5xl flex flex-col md:flex-row gap-3 p-2 divide-y-2 md:divide-y-0 md:divide-x-2">
						<div className="flex justify-around items-center gap-8 md:gap-10 lg:gap-12 py-3 w-full">
							<div className="w-20 h-20 overflow-hidden border-2 rounded-full">
								{narrative.toLowerCase().includes('sunny') ||
								narrative.toLowerCase().includes('sun') |
									narrative.toLowerCase().includes('sun') ? (
									<img alt="" src={sunnyWeather} />
								) : narrative.includes('Rain') ||
								  narrative.includes('Rainy') ||
								  narrative.includes('rain') ||
								  narrative.includes('rainy') ? (
									<img alt="" src={rainy} />
								) : (
									<img alt="" src={clearWeather} />
								)}
							</div>
							<div className="flex flex-col">
								<div className="flex">
									<span className="text-5xl md:text-6xl font-extralight font-sans">
										{todayAvgTemperature} <sup>o</sup>F
									</span>
								</div>
								<span>{generalFeeling}</span>
							</div>
						</div>
						<div className="w-full">
							<div className="w-full grid grid-cols-3 place-items-center p-2 gap-2">
								<div className="py-3 px-2 w-full flex flex-col items-center justify-center ">
									<span className="font-semibold text-2xl">
										{todayMaxTemperature} F
									</span>
									<span>High</span>
								</div>
								<div className="py-3 px-2 w-full flex flex-col items-center justify-center ">
									<span className="font-semibold text-2xl">
										{todayWeatherCondition.length > 0
											? todayWeatherCondition[0].morning.windSpeed +
											  todayWeatherCondition[1].evening.windSpeed
											: 0}{' '}
										mph
									</span>
									<span>Wind</span>
								</div>
								<div className="py-3 px-2 w-full flex flex-col items-center justify-center ">
									<span className="font-semibold text-2xl">{sunrise}</span>
									<span>Sunrise</span>
								</div>
								<div className="py-3 px-2 w-full flex flex-col items-center justify-center ">
									<span className="font-semibold text-2xl">
										{todayMinTemperature} F
									</span>
									<span>Low</span>
								</div>
								<div className="py-3 px-2 w-full flex flex-col items-center justify-center ">
									<span className="font-semibold text-2xl">0%</span>
									<span>Rain</span>
								</div>
								<div className="py-3 px-2 w-full flex flex-col items-center justify-center ">
									<span className="font-semibold text-2xl">{sunset}</span>
									<span>Sunset</span>
								</div>
							</div>
						</div>
					</div>

					{/* Today's weather Large screen
                <div className='hidden md:flex flex-col gap-3 w-full max-w-5xl p-4'>
                    <h3 className='text-xl'>Today's Weather</h3>
                    <div className='grid grid-cols-7 place-items-center gap-6 md:gap-8'>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>3am</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>6 am</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>9 am</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>12 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>3 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>6 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>8 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                    </div>
                </div>
                Today's weather Large screen */}

					<div className="w-full p-3">
						{/* Today's weather Small screen
                    <div className='w-full md:hidden md:flex flex-col gap-4 overflow-x-auto'>
                        <h3 className='pb-2'>Today's Weather</h3>
                        <div className='grid grid-cols-5 place-items-center gap-2 md:gap-8'>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>3am</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>6 am</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>9 am</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span className='text-sm'>12 pm</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>3 pm</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                        </div>
                    </div> Today's weather Small screen */}
						<div className="w-full flex flex-col gap-3">
							<h3>Next 3 days</h3>
							<div className="flex flex-col divide-y border-y">
								{nextThreeDays.map((thisDay) => {
									return (
										<div className="grid grid-cols-6 py-3 place-items-center">
											<div className="flex flex-col items-center">
												<span className="font-semibold text-xs md:text-base">
													{thisDay[0].dayOfWeek.slice(0, 3)}
												</span>
												<span className="text-xs md:text-base">30/10</span>
											</div>
											<div className="flex flex-col items-center">
												<span className="block border-2 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full">
													{thisDay[0].narrative
														.toLowerCase()
														.includes('sunny') ||
													narrative.toLowerCase().includes('sun') |
														narrative.toLowerCase().includes('sun') ? (
														<img alt="" src={sunnyWeather} />
													) : thisDay[0].narrative.includes('Rain') ||
													  narrative.includes('Rainy') ||
													  narrative.includes('rain') ||
													  narrative.includes('rainy') ? (
														<img alt="" src={rainy} />
													) : (
														<img alt="" src={clearWeather} />
													)}
												</span>
											</div>
											<div className="flex flex-col items-center">
												<span className="font-semibold text-xs md:text-base">
													{(thisDay[0].calendarDayTemperatureMin +
														thisDay[1].calendarDayTemperatureMin) /
														2}
													<sup>o</sup>F
												</span>
												<span className="text-xs md:text-base">Low</span>
											</div>
											<div className="flex flex-col items-center">
												<span className="font-semibold text-xs md:text-base">
													{thisDay[0].calendarDayTemperatureMax}
													<sup>o</sup>
												</span>
												<span className="text-xs md:text-base">High</span>
											</div>
											<div className="flex flex-col items-center justify-between">
												<span className="font-semibold text-[10px] md:text-base">
													{(thisDay[0].morning.windSpeed +
														thisDay[1].evening.windSpeed) /
														2}{' '}
													mph
												</span>
												<span className="text-xs md:text-base">Wind</span>
											</div>
											<div className="flex flex-col items-center">
												<span className="font-semibold text-xs md:text-base">
													0%
												</span>
												<span className="text-xs md:text-base">Rain</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherForecast;
