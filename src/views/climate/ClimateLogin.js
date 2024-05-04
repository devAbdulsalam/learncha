import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClimateHeader from './components/ClimateHeader';
// import Intro from './components/Intro';

const ClimateLogin = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginMessage, setLoginMessage] = useState('');
	const [loginStatus, setLoginStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const api = process.env.REACT_APP_API_URL;

	const login = () => {
		let reqStatus;
		let statusCode;
		console.log('Signing in...', username, password);
		setIsLoading(true);
		fetch(`${api}/login`, {
			method: 'post',
			headers: {
				accept: 'application/json',
				// 'Content-Type': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			// body: JSON.stringify({
			// 	username,
			// 	password,
			// }),
			body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
		})
			.then((response) => {
				if (response.status === 200) {
					reqStatus = 'success';
					statusCode = 200;
					setLoginStatus(reqStatus);
				} else {
					reqStatus = 'failed';
					setLoginStatus(reqStatus);
					if (response.status === 403) {
						statusCode = 403;
					} else {
						statusCode = 404;
					}
				}
				return response.json();
			})
			.then((data) => {
				if (statusCode === 200) {
					setLoginMessage('User successfully signed in');
					localStorage.setItem(
						'accessToken',
						JSON.stringify(data.access_token)
					);
					setTimeout(() => {
						navigate('/climate/challenge');
					}, 2000);
				} else if (statusCode === 403) {
					setLoginMessage('Invalid Credentials!');
				} else {
					setLoginMessage('Server error!');
				}
				setTimeout(() => {
					setLoginMessage('');
				}, 1500);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoginStatus('failed');
				setTimeout(() => {
					setLoginStatus('');
				}, 1500);
				setLoginMessage('No internet connection!');
				setIsLoading(false);
			});
	};
	return (
		<div
			data-scroll
			class="promo relative w-full flex flex-col items-center py-4 px-6"
		>
			<ClimateHeader title="Climate" />
			<div class="w-full max-w-2xl h-full flex flex-col items-center justify-start gap-6 px-6 py-4 mt-4 border-2 border-dashed border-red-400 rounded-xl">
				<h2
					style={{ fontFamily: 'Gochi Hand' }}
					class="text-red-400 w-full max-w-2xl px-3 font-orbitron text-3xl font-bold text-center"
				>
					Login
				</h2>
				<form
					id="login-form"
					class="font-orbitron w-full max-w-2xl p-6 md:py-8 md:px-10 md:p-6 bg-white bg-opacity-25 rounded-2xl"
				>
					<div class="relative z-0 mb-6 w-full group">
						<input
							onChange={(e) => setUsername(e.target.value)}
							type="text"
							name="username"
							id="username"
							class="block py-3 pt-5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer"
							placeholder=" "
							required
						/>
						<label
							for="username"
							class="peer-focus:font-medium absolute text-xl  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Email Address
						</label>
					</div>
					<div class="relative z-0 mb-4 w-full group">
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							name="password"
							id="password"
							class="block py-3 pt-5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer"
							placeholder=" "
							required
						/>
						<label
							for="password"
							class="peer-focus:font-medium absolute text-xl  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Password
						</label>
					</div>
					{loginMessage !== '' && (
						<div class="login-message">
							<span
								class={`login-message-content block pb-3 font-normal italic text-${
									loginStatus === 'success' ? 'green-500' : 'red-500'
								}`}
							>
								{loginMessage}
							</span>
						</div>
					)}
					<div class="pb-4">
						<span>
							Not a user?{' '}
							<Link
								class="text-red-400 font-semibold px-2"
								to="/climate/register"
							>
								{' '}
								Register
							</Link>
						</span>
					</div>
					<button
						onClick={() => login()}
						type="button"
						id="login-btn"
						class="flex items-center justify-center gap-2 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
					>
						Login
						{isLoading && (
							<span className="flex w-5 h-5 rounded-full border-2 border-gray-300 border-r-white animate-spin"></span>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default ClimateLogin;
