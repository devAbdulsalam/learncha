import React from 'react';

const Footer = ({ id }) => {
	const year = new Date().getFullYear();
	return (
		<footer className="w-full bg-[#85d8e5]">
			<div className="">
				<div className="footer-frame">
					<div className="flex justify-center w-full">
						<div className="text-center text-white font-bold p-6">
							<p>Copyright {year} Learncha. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
