import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from 'react';
import GameData from './GameData';
import Header from './components/Header';
import WinConfetti from './components/WinConfetti';
import GamesHeader from '../components/GamesHeader';
import Instruction from './components/Intruction';

const ImagoQuadIndex = () => {
	AOS.init(); // Initializing 'Animate on scroll
	const [gameValues, setGameValues] = React.useState(() => fromLocalStorage());

	const [open, setOpen] = useState(true);
	const restartGame = () => {
		localStorage.removeItem('gameValues');
		setGameValues(fromLocalStorage());
	};

	function fromLocalStorage() {
		const fromLocal = localStorage.getItem('gameValues');
		if (fromLocal) {
			return JSON.parse(fromLocal);
		} else if (fromLocal === null) {
			const gameIDs = [];
			GameData.forEach((item) => {
				gameIDs.push(item.id);
			});
			const gameItemID = gameIDs[Math.floor(Math.random() * gameIDs.length)];
			const generatedIDs = [];
			generatedIDs.push(gameItemID);

			let gameItemClass;
			let imgSrcs;
			GameData.forEach((data) => {
				if (data.id === gameItemID) {
					gameItemClass = data.class;
					imgSrcs = data.src;
				}
			});

			let additionalValuesPool = 'abcdefghijklmnopqrstuvwxyz';
			let additionalValues = '';

			while (additionalValues.length < 12 - gameItemClass.length) {
				let randIndex = Math.floor(Math.random() * additionalValuesPool.length);
				let value = additionalValuesPool.charAt(randIndex);
				if (additionalValues.indexOf(value) === -1) {
					additionalValues += value;
				} else {
					// console.log('Getat, na wrong option!')
				}
			}

			let inputDisplayValue = gameItemClass + additionalValues;
			let randomInputDisplayArray = [];
			let inputDisplayArray = [];

			while (randomInputDisplayArray.length < inputDisplayValue.length) {
				let randIndex = Math.floor(Math.random() * inputDisplayValue.length);
				if (randomInputDisplayArray.includes(randIndex)) {
					// console.log('Comot Body')
				} else {
					randomInputDisplayArray.push(randIndex);
				}
			}

			randomInputDisplayArray.forEach((item) => {
				inputDisplayArray.push(inputDisplayValue.charAt(item));
			});

			let levelReward = 0;
			if (gameItemClass.length <= 4) {
				levelReward = 4;
			} else if (gameItemClass.length > 4 && gameItemClass.length <= 6) {
				levelReward = 6;
			} else if (gameItemClass.length > 6) {
				levelReward = 12;
			}

			let outputDisplayValuesArray = Array(gameItemClass.length).fill('');
			const outputDisplayArray = Array(gameItemClass.length).fill('');

			return {
				coinQuantity: 50,
				playState: false,
				imgSrcs: imgSrcs,
				nextLevel: false,
				gameLevel: 1,
				gameIDs: gameIDs,
				gameEndsState: false,
				gameItemID: gameItemID,
				levelReward: levelReward,
				generatedIDs: generatedIDs,
				gameItemClass: gameItemClass,
				inputDisplayArray: inputDisplayArray,
				outputDisplayArray: outputDisplayArray,
				outputDisplayValuesArray: outputDisplayValuesArray,
			};
		}
	}

	function togglePlay() {
		setGameValues((prevValues) => {
			return {
				...prevValues,
				playState: !prevValues.playState,
			};
		});
	}
	const toggleInstruction = () => {
		setOpen(!open);
	};
	React.useEffect(() => {
		console.log('useEffect started');
		function updateGame() {
			localStorage.setItem('gameValues', JSON.stringify(gameValues));
		}
		updateGame();
		// localStorage.clear()
		console.log('useEffect ended');
	}, [gameValues]);

	const modifyGame = (e) => {
		let target = e.currentTarget;
		const currentGameItemClass = gameValues.gameItemClass;
		let currentInputDisplayArray = gameValues.inputDisplayArray;
		let currentOutputDisplayArray = gameValues.outputDisplayArray;
		let currentOutputDisplayValuesArray = gameValues.outputDisplayValuesArray;
		let targetID = Number(target.getAttribute('data-id'));
		let currentCoinQuantity = gameValues.coinQuantity;

		if (target.classList.contains('input-btn')) {
			if (target.classList.contains('hint')) {
				if (currentCoinQuantity >= 5) {
					let counter = 0;
					while (
						currentOutputDisplayArray.length <= currentGameItemClass.length
					) {
						let holder;
						const selectedOutputItem = currentOutputDisplayArray[counter];
						const expectedInput = currentGameItemClass.charAt(counter);
						if (
							selectedOutputItem.value === expectedInput ||
							selectedOutputItem === expectedInput
						) {
							counter++;
						} else {
							// holder = expectedInput;
							let inputBtns = [];
							let outputBtns = [];
							document.querySelectorAll('.input-btn').forEach((btn) => {
								inputBtns.push(btn);
							});
							document.querySelectorAll('.output-btn').forEach((btn) => {
								outputBtns.push(btn);
							});
							let selectedInputBtn;
							let selectedOutputBtn = outputBtns[counter];
							let inputBtnCounter = 0;
							let misplacedOutput;
							let misplacedOutputCounter = 0;
							while (inputBtns) {
								if (inputBtnCounter === inputBtns.length - 1) {
									// console.log('E don finish');
									break;
								}
								if (inputBtns[inputBtnCounter].textContent === expectedInput) {
									selectedInputBtn = inputBtns[inputBtnCounter];
									selectedOutputBtn.click();
									selectedInputBtn.click();
									break;
								} else {
									inputBtnCounter++;
									// console.log('Counter don increase!')
								}
								while (outputBtns) {
									if (misplacedOutputCounter === outputBtns.length - 1) {
										// console.log('E don finish');
										break;
									}
									misplacedOutput = outputBtns[misplacedOutputCounter];
									if (
										outputBtns[misplacedOutputCounter].textContent ===
											expectedInput &&
										!currentInputDisplayArray.includes(expectedInput)
									) {
										misplacedOutput.click();
										break;
									} else {
										misplacedOutputCounter++;
										console.log('Counter don increase!');
									}
								}
							}
							break;
						}
					}
					currentCoinQuantity -= 5;
				} else {
					alert('Insufficient coins!');
				}
			} else {
				let targetContent = target.textContent;

				if (target.textContent !== '') {
					let holder = -1;
					while (holder < currentInputDisplayArray.length) {
						if (currentOutputDisplayArray[holder + 1] !== '') {
							holder++;
						} else {
							currentOutputDisplayArray[holder + 1] = {
								id: targetID,
								value: targetContent,
							};
							break;
						}
					}
					currentInputDisplayArray.forEach((item, index, arr) => {
						if (index === targetID) {
							arr[index] = '';
						}
					});
				}
			}
		} else if (target.classList.contains('output-btn')) {
			if (target.textContent !== '') {
				currentOutputDisplayArray.forEach((outputItem, index, arr) => {
					if (outputItem.id === targetID) {
						arr[index] = '';

						currentInputDisplayArray.forEach((item, index, arr) => {
							if (index === outputItem.id) {
								arr[index] = outputItem.value;
							}
						});
					}
				});
			} else {
				console.log('Nothing is happening');
			}
		}

		currentOutputDisplayArray.forEach((item, index) => {
			if (item === '') {
				currentOutputDisplayValuesArray[index] = item;
			} else {
				currentOutputDisplayValuesArray[index] = item;
			}
		});
		setGameValues((prevValues) => {
			return {
				...prevValues,
				coinQuantity: currentCoinQuantity,
				inputDisplayArray: currentInputDisplayArray,
				outputDisplayArray: currentOutputDisplayArray,
				outputDisplayValuesArray: currentOutputDisplayValuesArray,
			};
		});
		validateGame();
	};

	function nextLevel() {
		const currentCoinQuantity = gameValues.coinQuantity;
		const currentLevelReward = gameValues.levelReward;
		let newCoinQuantity = currentCoinQuantity + currentLevelReward;
		setGameValues((prevValues) => {
			return {
				...prevValues,
				nextLevel: !prevValues.nextLevel,
			};
		});
		setTimeout(() => {
			newLevel();
		}, 500);
	}

	function newLevel() {
		const gameIDs = gameValues.gameIDs;
		let currentGameEndsState = gameValues.gameEndsState;
		const currentGeneratedIDs = gameValues.generatedIDs;
		if (currentGeneratedIDs.length <= gameIDs.length) {
			console.log('New Level Activated');
			if (currentGeneratedIDs.length === gameIDs.length) {
				currentGameEndsState = !currentGameEndsState;
				setGameValues((prevValues) => {
					return {
						...prevValues,
						gameEndsState: currentGameEndsState,
					};
				});

				console.log('Game done finish');
			} else {
				let gameItemID;
				(function getRandomID() {
					let randomID;
					while (currentGeneratedIDs.length <= gameIDs.length) {
						if (currentGeneratedIDs.length === gameIDs.length) {
							// console.log('Oh boy, comot body');
							break;
						} else {
							randomID = gameIDs[Math.floor(Math.random() * gameIDs.length)];
							if (currentGeneratedIDs.includes(randomID)) {
								// console.log(randomID)
							} else {
								gameItemID = randomID;
								break;
							}
						}
					}
				})();
				currentGeneratedIDs.push(gameItemID);

				let currentGameItemClass;
				let currentImgSrcs;
				GameData.forEach((data) => {
					if (data.id === gameItemID) {
						currentGameItemClass = data.class;
						currentImgSrcs = data.src;
					}
				});

				let additionalValuesPool = 'abcdefghijklmnopqrstuvwxyz';
				let additionalValues = '';

				while (additionalValues.length < 12 - currentGameItemClass.length) {
					let randIndex = Math.floor(
						Math.random() * additionalValuesPool.length
					);
					let value = additionalValuesPool.charAt(randIndex);
					if (additionalValues.indexOf(value) === -1) {
						additionalValues += value;
					} else {
						// console.log('Getat, na wrong option!')
					}
				}

				let inputDisplayValue = currentGameItemClass + additionalValues;
				let randomInputDisplayArray = [];
				let inputDisplayArray = [];

				while (randomInputDisplayArray.length < inputDisplayValue.length) {
					let randIndex = Math.floor(Math.random() * inputDisplayValue.length);
					if (randomInputDisplayArray.includes(randIndex)) {
						console.log('Comot Body');
					} else {
						randomInputDisplayArray.push(randIndex);
					}
				}

				let currentCoinQuantity = gameValues.coinQuantity;
				let currentLevelReward = gameValues.levelReward;
				const newCoinQuantity = currentCoinQuantity + currentLevelReward;

				randomInputDisplayArray.forEach((item) => {
					inputDisplayArray.push(inputDisplayValue.charAt(item));
				});

				let levelReward = 0;
				if (currentGameItemClass.length <= 4) {
					levelReward = 4;
				} else if (
					currentGameItemClass.length > 4 &&
					currentGameItemClass.length <= 6
				) {
					levelReward = 6;
				} else if (currentGameItemClass.length > 6) {
					levelReward = 12;
				}

				let outputDisplayValuesArray = Array(currentGameItemClass.length).fill(
					''
				);
				const outputDisplayArray = Array(currentGameItemClass.length).fill('');
				console.log();
				setGameValues((prevValues) => {
					return {
						...prevValues,
						playState: !gameValues.gameState,
						gameItemID: gameItemID,
						gameItemClass: currentGameItemClass,
						imgSrcs: currentImgSrcs,
						levelReward: levelReward,
						coinQuantity: newCoinQuantity,
						gameLevel: prevValues.gameLevel + 1,
						generatedIDs: currentGeneratedIDs,
						inputDisplayArray: inputDisplayArray,
						outputDisplayArray: outputDisplayArray,
						outputDisplayValuesArray: outputDisplayValuesArray,
					};
				});
			}
		}
	}

	function validateGame() {
		let outputDisplayValue = '';
		gameValues.outputDisplayArray.forEach((item) => {
			if (typeof item === 'object') outputDisplayValue += item.value;
		});
		if (outputDisplayValue === gameValues.gameItemClass) {
			setTimeout(() => {
				setGameValues((prevValues) => {
					return {
						...prevValues,
						nextLevel: !prevValues.nextLevel,
						playState: !prevValues.playState,
					};
				});
			}, 700);
		}
		// console.log('Game Validated!')
	}

	return (
		<div
			style={{ fontFamily: 'Gochi Hand' }}
			className="App flex flex-col h-screen overflow-y-auto relative"
		>
			<GamesHeader title="Games" />
			<Header
				togglePlay={togglePlay}
				gameLevel={gameValues.gameLevel}
				playState={gameValues.playState}
				coinQuantity={gameValues.coinQuantity}
				toggleInstruction={toggleInstruction}
			/>
			<Instruction open={open} setOpen={setOpen} />
			{!gameValues.playState && gameValues.nextLevel && <WinConfetti />}
			{/* MainPage SECTION STARTS HERE*/}
			{!gameValues.playState &&
				!gameValues.nextLevel &&
				!gameValues.gameEndsState && (
					<div
						data-aos="zoom-in"
						data-aos-anchor="#example-anchor"
						data-aos-offset="500"
						data-aos-duration="800"
						data-aos-delay="200"
						className={`MainPage flex flex-col h-3/5 justify-center items-center pt-20`}
					>
						<div className="relative">
							<div className="PictureGrid max-w-xl grid gap-2 px-8 grid-cols-2">
								{gameValues.imgSrcs.map((imgSrc, index) => {
									return (
										<div
											key={index}
											className="rounded-md overflow-hidden h-32 md:h-44"
										>
											<img
												alt="img"
												className="w-full h-full object-cover"
												src={imgSrc}
											/>
										</div>
									);
								})}
							</div>
							<div className="absolute top-0 left-0 flex justify-center items-center h-full w-full">
								<span className="animate-pulse flex justify-center items-center h-12 w-12 text-green-500 bg-white rounded-full border-2 border-green-400">
									{gameValues.gameLevel}
								</span>
							</div>
						</div>
						<div className="w-full px-8 py-4">
							<button
								onClick={togglePlay}
								className="text-lg font-semibold rounded border-2 border-green-500 text-green-500 w-full max-w-sm py-2"
							>
								Play
							</button>
						</div>
					</div>
				)}
			{/* MainPage SECTION ENDS HERE*/}

			{/* GamePanel SECTION STARTS HERE*/}
			{gameValues.playState && (
				<div
					data-aos="zoom-out"
					data-aos-anchor="#example-anchor"
					data-aos-offset="500"
					data-aos-duration="800"
					data-aos-delay="200"
					className="GamePanel"
				>
					<div className="flex flex-col lg:flex-row h-full justify-center items-center gap-y-4 md:gap-8 px-4">
						{/* PictureGrid SECTION STARTS HERE*/}
						<div className="PictureGrid max-w-xl grid gap-4 px-4 grid-cols-2">
							{gameValues.imgSrcs.map((imgSrc, index) => {
								return (
									<div
										key={index}
										className="rounded-md overflow-hidden h-32 md:h-44"
									>
										<img
											alt="img"
											key={index}
											className="w-full h-full object-cover"
											src={imgSrc}
										/>
									</div>
								);
							})}
						</div>
						{/* PictureGrid SECTION ENDS HERE*/}

						{/* GameInteraction SECTION STARTS HERE*/}
						<div className="GameInteraction flex flex-col h-full justify-center items-center gap-10 md:gap-16 p-4">
							{/* OutputDisplayPanel SECTION STARTS HERE*/}
							<div className="flex gap-2">
								{gameValues.outputDisplayValuesArray.map((item, index) => {
									return (
										<button
											key={index}
											data-id={item.id}
											onClick={modifyGame}
											className="output-btn uppercase font-bold block w-7 h-7 text-green-500 hover:text-green-50 hover:bg-green-500 border border-green-500 rounded"
										>
											{item.value}
										</button>
									);
								})}
							</div>
							{/* OutputDisplayPanel SECTION ENDS HERE*/}

							{/* InputDisplayPanel SECTION STARTS HERE*/}
							<div className="flex items-start gap-4">
								<div className="grid grid-cols-6 gap-2">
									{gameValues.inputDisplayArray.map((item, index) => {
										return (
											<button
												key={index}
												data-id={index}
												onClick={modifyGame}
												className="input-btn block uppercase w-7 h-7 text-green-50 bg-green-500 hover:text-green-500 hover:bg-transparent border border-green-500 rounded"
											>
												{item}
											</button>
										);
									})}
								</div>
								<div>
									<button
										disabled={gameValues.coinQuantity < 20 ? true : false}
										onClick={modifyGame}
										className="input-btn hint flex flex-col justify-center items-center w-8 h-16 text-red-500 bg-white border border-red-500 rounded"
									>
										<span className="text-xs font-semibold italic">Hint</span>
										<div className="flex flex-col">
											<span className="block text-xs">-20</span>
											<span className="block text-sm text-yellow-400">
												<i className="fa fa-coins"></i>
											</span>
										</div>
									</button>
								</div>
							</div>
							{/* InputDisplayPanel SECTION ENDS HERE*/}
						</div>
						{/* GameInteraction SECTION ENDS HERE*/}
					</div>
				</div>
			)}
			{/* GamePanel SECTION ENDS HERE*/}

			{/* NextLevel SECTION STARTS HERE*/}
			{gameValues.nextLevel && (
				<div className="NextLevel flex flex-col h-full w-full items-center justify-center">
					<div className="flex flex-col justify-between w-full h-4/5 max-w-3xl">
						<div className="text-green-500 text-xl font-semibold">
							<span>Level Passed</span>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-delay=" "
							data-aos-anchor="#example-anchor"
							data-aos-offset={`${500}`}
							data-aos-duration="500"
							className="flex flex-col text-green-500 text-xl font-semibold"
						>
							<span>{gameValues.levelReward}</span>
							<span className="text-yellow-500">
								<i className="fa fa-coins"></i>
								<i className="fa fa-coins"></i>
							</span>
						</div>
						<div className="flex justify-center gap-x-1.5 text-green-500 text-xl font-semibold">
							{gameValues.outputDisplayValuesArray.map((item, index) => {
								return (
									<button
										key={index}
										data-aos="fade-up-right"
										data-aos-delay={`${index * 50}`}
										data-aos-anchor="game-answer"
										data-aos-offset={`${50}`}
										data-aos-duration="500"
										className="uppercase font-bold block w-7 h-7 text-sm font-semibold text-green-500 hover:text-green-50 hover:bg-green-500 border border-green-500 rounded"
									>
										{item.value}
									</button>
								);
							})}
						</div>
						<div className="flex justify-center text-green-500 text-xl font-semibold">
							<button
								onClick={() => nextLevel()}
								className="w-32 py-1 font-semibold rounded border border-green-500"
							>
								Next Level
							</button>
						</div>
					</div>
				</div>
			)}
			{/* NextLevel SECTION ENDS HERE*/}
			{/* NextLevel SECTION STARTS HERE*/}
			{gameValues.gameEndsState && (
				<div className="NextLevel flex flex-col h-full justify-center">
					<div className="flex flex-col justify-between w-full h-4/5 max-w-3xl">
						<div className="text-green-500 text-xl font-semibold">
							<span>Level Passed</span>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-delay=" "
							data-aos-anchor="#example-anchor"
							data-aos-offset={`${500}`}
							data-aos-duration="500"
							className="flex flex-col items-center text-green-500 text-xl font-semibold"
						>
							<span className="flex justify-center px-2 py-1 border-2 border-green-500 rounded-md">
								Game Ends
							</span>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-delay=" "
							data-aos-anchor="#example-anchor"
							data-aos-offset={`${500}`}
							data-aos-duration="500"
							onClick={restartGame}
							className="flex flex-col items-center text-green-500 text-xl font-semibold"
						>
							<button className="flex justify-center px-2 py-1 border-2 border-green-500 rounded-md">
								Start Afresh
							</button>
						</div>
					</div>
				</div>
			)}
			{/* NextLevel SECTION ENDS HERE*/}
		</div>
	);
};

export default ImagoQuadIndex;
