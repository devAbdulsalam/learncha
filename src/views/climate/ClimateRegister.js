import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClimateHeader from './components/ClimateHeader';

const ClimateRegister = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const [registerMessage, setRegisterMessage] = useState('');
	const [registerStatus, setRegisterStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const api = process.env.REACT_APP_API_URL;

	const register = () => {
		console.log('Registering...');
		let reqStatus;
		let statusCode;
		setIsLoading(true);
		setRegisterMessage('');
		setRegisterStatus('');
		fetch(`${api}/users`, {
			method: 'post',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				address,
				phone_number: phone,
				hashed_password: password,
				is_active: true,
			}),
		})
			.then((response) => {
				if (response.status === 200) {
					reqStatus = 'success';
					statusCode = 200;
					setRegisterStatus(reqStatus);
				} else {
					reqStatus = 'failed';
					setRegisterStatus(reqStatus);
					statusCode = response.status;
				}
				return response.json();
			})
			.then((data) => {
				if (statusCode === 200) {
					setRegisterMessage(
						`User account for ${data.name} successfully Registered`
					);
					setTimeout(() => {
						navigate('/climate/login');
					}, 2000);
				} else if (statusCode === 403 || statusCode === 422) {
					setRegisterMessage('Invalid Credentials!');
				} else {
					setRegisterMessage('Server error!');
				}
				setTimeout(() => {
					setRegisterMessage('');
				}, 1500);
				setIsLoading(false);
			})
			.catch((err) => {
				setRegisterStatus('failed');
				setRegisterMessage('No internet connection!');
				setTimeout(() => {
					setRegisterStatus('');
				}, 1500);
				setIsLoading(false);
			});
	};
	return (
		<div
			data-scroll
			class="promo relative w-full flex flex-col items-center py-4 px-6"
		>
			<ClimateHeader title="Climate" />
			<div class="w-full max-w-3xl h-full flex flex-col items-center justify-start gap-6 px-6 py-4 mt-4 border-2 border-dashed border-red-400 rounded-xl">
				<h2
					style={{ fontFamily: 'Gochi Hand' }}
					class="text-red-400 w-full max-w-2xl px-3 font-orbitron text-3xl font-bold text-center"
				>
					Register
				</h2>
				<form
					id="register-form"
					class="font-orbitron w-full max-w-2xl p-6 md:py-8 md:px-10 md:p-6 bg-white bg-opacity-25 rounded-2xl"
				>
					<div className="grid lg:grid-cols-2 lg:gap-6">
						<div class="relative z-0 mb-6 w-full group">
							<input
								onChange={(e) => setName(e.target.value)}
								type="text"
								name="name"
								id="name"
								class="block py-3 pt-5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer"
								autoComplete="off"
								placeholder=" "
								required
							/>
							<label
								for="name"
								class="peer-focus:font-medium absolute text-xl  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Name
							</label>
						</div>
						<div class="relative z-0 mb-4 w-full group">
							<input
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name="email"
								id="email"
								class="block py-3 pt-5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer"
								autoComplete="off"
								placeholder=" "
								required
							/>
							<label
								for="email"
								class="peer-focus:font-medium absolute text-xl  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Email Address
							</label>
						</div>
					</div>
					<div className="grid lg:grid-cols-2 lg:gap-6">
						<div class="relative z-0 mb-6 w-full group">
							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name="hashed_password"
								id="hashed_password"
								class="block py-3 pt-5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer"
								autoComplete="off"
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
						<div class="relative z-0 mb-4 w-full group">
							<input
								onChange={(e) => setPhone(e.target.value)}
								type="text"
								name="phone"
								id="phone"
								class="block py-3 pt-5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer"
								autoComplete="off"
								placeholder=" "
								required
							/>
							<label
								for="phone"
								class="peer-focus:font-medium absolute text-xl  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Phone Number
							</label>
						</div>
					</div>
					<div class="relative z-0 mb-6 w-full group">
						<input
							onChange={(e) => setAddress(e.target.value)}
							type="text"
							name="address"
							id="address"
							class="block py-3 pt-5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-400 peer"
							autoComplete="off"
							placeholder=" "
							required
						/>
						<label
							for="address"
							class="peer-focus:font-medium absolute text-xl  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Address
						</label>
					</div>
					{registerMessage !== '' && (
						<div class="register-message">
							<span
								class={`register-message-content block pb-3 font-normal italic text-${
									registerStatus === 'success' ? 'green-500' : 'red-500'
								}`}
							>
								{registerMessage}
							</span>
						</div>
					)}
					<div class="pb-4">
						<span>
							Already a user?{' '}
							<Link class="text-red-400 font-semibold px-2" to="/climate/login">
								{' '}
								Login
							</Link>
						</span>
					</div>
					<button
						onClick={() => register()}
						type="button"
						id="register-btn"
						disabled={`${isLoading ? 'disabled' : ''}`}
						class="flex items-center justify-center gap-2 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
					>
						Register
						{isLoading && (
							<span className="flex w-5 h-5 rounded-full border-2 border-gray-300 border-r-white animate-spin"></span>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default ClimateRegister;
