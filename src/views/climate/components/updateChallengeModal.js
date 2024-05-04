import React from 'react';
import { useState } from 'react';
import Loader from './Loader';

const UpdateChallenegeModal = ({ toggleChallengeModal, challengeID }) => {
	const [category, setCategory] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null);
	const [challengeLink, setChallengeLink] = useState(
		`https://learncha.vercel.app/climate/challenge/climate_ID=${challengeID}`
	);

	const [isLoading, setIsLoading] = useState(false);
	const [isNext, setIsNext] = useState(false);
	const [isLink, setIsLink] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');
	let [validReq, setValidReq] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const appendImage = (e) => {
		setImage(e.target.files[0]);
		console.log(e.target.files[0]);
	};
	const api = process.env.REACT_APP_API_URL;
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
					setChallengeLink(`${window.location.href}`);
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

	const joinChallenge = () => {};

	return (
		<div
			style={{ fontFamily: 'Gochi Hand' }}
			className="fixed top-0 flex items-start justify-center items-center py-6 pt-10 px-5 z-50 h-screen w-screen bg-gray-500 bg-opacity-50"
		>
			{
				<div className="relative w-full bg-white p-5 md:py-6 md:px-8 max-w-2xl rounded-xl">
					{isLink && (
						<button className="text-xl hover:text-red-500 absolute top-5 right-8 py-2 px-3">
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
								{!isLink ? (
									<div>
										<label
											class="block mb-2 font-medium text-cyan-500 text-xl "
											for="user_avatar"
										>
											Upload Challenge Progress
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
									<div class="p-6 text-center w-full">
										<div class="py-3 font-orbitron text-blue-500 text-left">
											<span>
												You have successfully uploaded your progress...
											</span>
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
												Copy the link above and share with your friends to join
												the challenge...
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
								)}
							</form>
						)}
						<div className="flex justify-between">
							<div className="flex justify-between px-2 font-sans font-semibold">
								<button
									onClick={() => {
										toggleChallengeModal();
									}}
									className={`text-white w-20 md:w-24 py-2 rounded-lg bg-red-400 hover:bg-red-500'}`}
								>
									Cancel
								</button>
							</div>
							<div className="flex justify-between px-2 font-sans font-semibold">
								<button
									onClick={() => {
										uploadImage(challengeID);
									}}
									className={`text-white w-20 md:w-24 py-2 bg-green-500 rounded-lg'}`}
								>
									Upload
								</button>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default UpdateChallenegeModal;
