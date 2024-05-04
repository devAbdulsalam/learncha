import React from 'react';
import GamesHeader from '../../components/GamesHeader';
import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Instruction = ({ open, setOpen }) => {
	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<motion.div className="w-full bg-white mx-auto p-4">
									<GamesHeader title="Instructions" />

									<button
										title="cancle"
										onClick={() => setOpen(false)}
										ref={cancelButtonRef}
										className="text-red-500 bg-gray-100 hover:bg-red-100 p-1 px-2 rounded-full flex justify-center absolute top-6 right-5"
									>
										<i className="fa fa-times mx-auto"></i>
									</button>
									<div className="p-2">
										<motion.div
											initial={{ opacity: 0, x: 50 }}
											whileInView={{
												opacity: 1,
												x: 0,
												transition: { delay: 0.2, duration: 0.5 },
											}}
											viewport={{ once: false, amount: 0.5 }}
											className="font-sans border rounded-xl shadow p-2 md:px-3 lg:px-4 lg:py-3"
										>
											<h2 className="font-semibold text-2xl pb-2">Controls:</h2>
											<p className="pb-2 text-base">
												Use the arrow keys ← and → or the A and D keys on your
												keyboard to move between a lhabet option and click
												select.
											</p>
										</motion.div>
										<motion.div
											initial={{ opacity: 0, y: 50 }}
											whileInView={{
												opacity: 1,
												y: 0,
												transition: { delay: 0.2, duration: 0.5 },
											}}
											viewport={{ once: false, amount: 0.5 }}
											className="font-sans border rounded-xl shadow p-2 md:px-3 lg:px-4 lg:py-3"
										>
											<h2 className="font-semibold text-2xl pb-2">Objective</h2>
											<p className="pb-2 text-base">
												Your goal is to use the images provided to guess the
												general name or categories of the images,
											</p>
										</motion.div>
										<motion.div
											initial={{ opacity: 0, y: -50 }}
											whileInView={{
												opacity: 1,
												y: 0,
												transition: { delay: 0.2, duration: 0.5 },
											}}
											viewport={{ once: false, amount: 0.5 }}
											className="font-sans border rounded-xl shadow p-2 md:px-3 lg:px-4 lg:py-3"
										>
											<h2 className="font-semibold text-2xl pb-2">Scoring</h2>
											<p className="pb-2 text-base">
												Each correct word earns you some points.
												<br />
												Challenge yourself to beat your previous high score and
												climb up the leaderboard!{' '}
												<span className="font-semibold text-cyan-500 italic">
													Have fun playing
												</span>
											</p>
										</motion.div>
									</div>
									<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
										<button
											type="button"
											className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
											onClick={() => setOpen(false)}
										>
											Get Started
										</button>
									</div>
								</motion.div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Instruction;
