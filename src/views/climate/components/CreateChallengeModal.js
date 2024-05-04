import React from 'react';
import { useState } from 'react';
import Loader from './Loader';

/*
    {
        challenge: '',
        query = {
            challenge_type: "Protect the oceans",
            description: 'To make the water bodies surrounding the lagos Island clean...',
            id: 43,
            name: 'operation clean lagos atlantic i'
        }
    }
 */

const CreateChallengeModal = ({ toggleChallengeModal }) => {
	const [category, setCategory] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null);
	const [challengeID, setChallengeID] = useState(null);
	const [challengeLink, setChallengeLink] = useState('');

	const [isLoading, setIsLoading] = useState(false);
	const [isNext, setIsNext] = useState(false);
	const [isLink, setIsLink] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');
	let [validReq, setValidReq] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const api = process.env.REACT_APP_API_URL;
	const createChallenge = () => {
		if (
			category.split(' ')[0] === '' ||
			title.split(' ')[0] === '' ||
			description.split(' ')[0] === ''
		) {
			console.log('Empty Values');
		} else {
			setIsLoading(true);
			const createChallengeFormData = {
				challenge_type: category,
				name: title,
				description,
			};
			console.log('Creating challenge');
			fetch(`${api}/challenge`, {
				method: 'post',
				headers: {
					accept: 'application',
					Authorization: `Bearer ${JSON.parse(
						localStorage.getItem('accessToken')
					)}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(createChallengeFormData),
			})
				.then((response) => {
					if (response.status === 200) {
						setValidReq(true);
						setResponseMessage('Challenge created!');
						setTimeout(() => {
							setResponseMessage('');
						}, 2000);
					} else {
						setValidReq(false);
						setResponseMessage('Invalid values!');
						setTimeout(() => {
							setResponseMessage('');
						}, 2000);
						setIsLoading(false);
					}
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setIsNext(true);
					setIsLoading(false);
					console.log(data.challenge_link);
					setChallengeID(data.challenge_link.slice(41));
				})
				.catch((err) => {
					console.log(err);
					setResponseMessage('No internet connection!');
					setTimeout(() => {
						setResponseMessage('');
					}, 2000);
					setIsLoading(false);
				});
		}
	};

	const appendImage = (e) => {
		setImage(e.target.files[0]);
		console.log(e.target.files[0]);
	};
	const uploadImage = (ID) => {
		const accessToken = JSON.parse(localStorage.getItem('accessToken'));
		if (image === null) {
			console.log('No file');
		} else {
			console.log('uploading');
			setIsLoading(true);
			const formData = new FormData();
			formData.append('image', image, image.name);
			fetch(`${api}/challenge/${challengeID}/progress`, {
				method: 'post',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				body: formData,
			})
				.then((response) => {
					if (response.status === 200) {
						setValidReq(true);
						setResponseMessage('Picture uploaded successfully!');
						setTimeout(() => {
							setResponseMessage('');
						}, 2000);
					} else {
						setValidReq(false);
						setResponseMessage('Picture upload failed!');
						setTimeout(() => {
							setResponseMessage('');
						}, 2000);
						setIsLoading(false);
					}
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setIsLink(true);
					setIsLoading(false);
					setChallengeLink(
						`${window.location.href}/challenge_ID=${challengeID}`
					);
					console.log(data);
				})
				.catch((err) => console.log(err));
		}
	};

	const copyLink = () => {
		console.log('Link copied!');
		setIsCopied((prevValue) => !prevValue);
		setTimeout(() => {
			setIsCopied((prevValue) => !prevValue);
		}, 2000);
		navigator.clipboard.writeText(challengeLink);
		console.log(window.location.href);
	};
	return (
		<div
			style={{ fontFamily: 'Gochi Hand' }}
			className="fixed top-0 flex items-start justify-center items-center py-6 pt-10 px-5 z-50 h-screen w-screen bg-gray-500 bg-opacity-50"
		>
			{isLink ? (
				<div className="relative w-full bg-white p-5 md:py-6 md:px-8 max-w-2xl rounded-xl">
					{isLink && (
						<button
							onClick={() => {
								isLink ? toggleChallengeModal() : createChallenge();
							}}
							className="text-xl hover:text-red-500 absolute top-5 right-8 py-2 px-3"
						>
							<i className="fa fa-times"></i>
						</button>
					)}
					<div class="p-6 text-center w-full">
						<div class="py-3 font-orbitron text-blue-500 text-left">
							<span>You have successfully created the challenge...</span>
						</div>
						<div class="flex border rounded-lg overflow-hidden">
							<span class="modal-challenge-link flex items-center w-full px-2 md:px-4 text-gray-500 font-semibold truncate">
								{challengeLink}
							</span>
							<button
								onClick={() => copyLink()}
								type="button"
								class="h-12 px-4 md:px-5 bg-gray-100"
							>
								<span class="sr-only">Clipboard button</span>
								{isCopied ? (
									<span class="copy-confirm text-xs font-semibold text-green-500">
										Copied!
									</span>
								) : (
									<span class="copy-icon text-blue-600 text-lg">
										<i class="fa fa-clipboard"></i>
									</span>
								)}
							</button>
						</div>
						<div class="py-3 text-gray-500 text-left">
							<span>
								Copy the link above and share with your friends to join the
								challenge...
							</span>
						</div>
						<p class="text-left text-gray-600 py-1 italic">
							Or share on social media:
						</p>
						<div class="rounded-lg shadow py-4 px-3 flex gap-2 md:gap-3">
							<button type="button" onclick="shareLink('facebook')">
								<span class="sr-only">Share to facebook button</span>
								<span class="text-cyan-700 text-3xl md:text-4xl">
									<i class="fa-brands fa-facebook"></i>
								</span>
							</button>
							<button type="button" onclick="shareLink('twitter')">
								<span class="sr-only">Share to twitter button</span>
								<span class="text-blue-500 text-3xl md:text-4xl">
									<i class="fa-brands fa-twitter"></i>
								</span>
							</button>
							<button type="button" onclick="shareLink('whatsapp')">
								<span class="sr-only">Share to whatsapp button</span>
								<span class="text-green-600 text-3xl md:text-4xl">
									<i class="fa-brands fa-whatsapp"></i>
								</span>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="relative w-full bg-white p-5 md:py-6 md:px-8 max-w-2xl rounded-xl">
					{isLink && (
						<button
							onClick={() => {
								isLink ? toggleChallengeModal() : createChallenge();
							}}
							className="text-xl hover:text-red-500 absolute top-5 right-8 py-2 px-3"
						>
							<i className="fa fa-times"></i>
						</button>
					)}
					<div>
						{isLoading ? (
							<div className="h-80 flex flex-col items-center justify-center">
								<Loader />
								<span className="font-sans font-semibold text-base animate-pulse">
									Creating Challenge
								</span>
							</div>
						) : (
							<form>
								{isNext ? (
									<div>
										<label
											class="block mb-2 font-medium text-cyan-500 text-xl "
											for="user_avatar"
										>
											Upload Challenge Image
										</label>
										<input
											accept=".jpeg, .png, .jpg"
											name="image"
											onChange={(e) => appendImage(e)}
											class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
											aria-describedby="user_avatar_help"
											id="user_avatar"
											type="file"
										/>
										<div
											class="py-3 text-sm text-gray-500"
											id="user_avatar_help"
										>
											The first picture sowing you doing performing your aim for
											the challenge will encourage others to partake...
										</div>
									</div>
								) : (
									<div>
										<div className="uppercase text-2xl text-center pb-4 text-cyan-500">
											Create Challenge
										</div>
										<div class="grid gap-6 mb-6 md:grid-cols-2">
											<div>
												<div className="flex gap-1 font-bold">
													<label
														for="challenge_type"
														class="block mb-2 text-xl font-medium text-red-400"
													>
														Category
													</label>
													<span className="text-red-500 font-sans">*</span>
												</div>
												<select
													onChange={(e) => setCategory(e.target.value)}
													type="text"
													id="challenge_type"
													name="challenge_type"
													class="create-challenge-name bg-gray-50 border border-gray-300 text-gray-500 text-sm focus:ring-red-300 focus:border-red-300 block w-full p-2.5"
													placeholder="Type of Challenge"
													required
												>
													<option disabled selected></option>
													<option>Protect the oceans</option>
													<option>Severe Fire</option>
													<option>Carbon Emission</option>
													<option>Water Scarcity</option>
													<option>Flooding</option>
													<option>Declining Biodiversity</option>
													<option>Intenze Drought</option>
													<option>Severe Fire</option>
												</select>
												<div className="hidden">
													<span className="text-red-500">
														Category is required!
													</span>
												</div>
											</div>
											<div>
												<div className="flex gap-1 font-bold">
													<label
														for="title"
														class="block mb-2 text-xl font-medium text-red-400"
													>
														Title
													</label>
													<span className="text-red-500 font-sans">*</span>
												</div>
												<input
													onChange={(e) => setTitle(e.target.value)}
													type="text"
													id="title"
													name="title"
													class="create-challenge-title bg-gray-50 border border-gray-300 text-gray-500 text-sm focus:ring-red-300 focus:border-red-300 block w-full p-2.5"
													placeholder="Title of Challenge"
													required
												/>
												<div className="hidden">
													<span className="text-red-500">
														Title is required!
													</span>
												</div>
											</div>
										</div>
										<div class="grid mb-4 md:grid-cols-1">
											<div className="flex gap-1 pb-2 font-bold">
												<label
													for="description"
													class="block text-xl font-medium text-red-400"
												>
													Description
												</label>
												<span className="text-red-500 font-sans">*</span>
											</div>
											<textarea
												onChange={(e) => setDescription(e.target.value)}
												id="description"
												name="description"
												rows="8"
												class="create-challenge-value mb-1 block px-2 py-3 border-2 focus:border-2 border-gray-300 focus:border-red-400 rounded-lg w-full text-sm text-gray-800 outline-none focus:ring-0"
												placeholder="Write a description about the challenge..."
												required
											></textarea>
											<div className="hidden">
												<span className="text-red-500">
													Description is required!
												</span>
											</div>
										</div>
									</div>
								)}
							</form>
						)}
					</div>
					{responseMessage && (
						<div className="pb-3 pl-2 font-semibold text-base italic">
							<span
								className={`${validReq ? 'text-green-500' : 'text-red-400'}`}
							>
								{responseMessage}
							</span>
						</div>
					)}
					<div className="flex justify-between px-2 font-sans font-semibold">
						{!isNext && (
							<button
								disabled={`${isLoading ? 'disabled' : ''}`}
								onClick={() => {
									!isLoading ? toggleChallengeModal() : console.log('Hello');
								}}
								className={`text-white w-20 md:w-24 py-2 rounded-lg ${
									isLoading ? 'bg-gray-400' : 'bg-red-400 hover:bg-red-500'
								}`}
							>
								Cancel
							</button>
						)}
						<button
							disabled={`${isLoading ? 'disabled' : ''}`}
							onClick={isNext ? uploadImage : createChallenge}
							className="bg-green-500 text-white w-20 md:w-24 py-2 rounded-lg hover:bg-green-600"
						>
							{isNext ? 'Upload' : 'Next'}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateChallengeModal;
