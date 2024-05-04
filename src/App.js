import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes, useParams } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Resources from './views/resources/Resources';
import TranscribeIndex from './views/transcribers/TranscribeIndex';
import TranscribeNumbers from './views/transcribers/TranscribeNumbers';
import TranscribeWords from './views/transcribers/TranscribeWords';
import TranscribeSentence from './views/transcribers/TranscribeSentence';
import TranscribeAlphabets from './views/transcribers/TranscribeAlphabet';
import Books from './views/resources/books/Books';
import Dictionary from './views/resources/dictionary/Dictionary';
import Eclass from './views/resources/eclass/Eclass';
import BookGrade from './views/resources/books/BookCat';
import ClimateIndex from './views/climate/ClimateIndex';
import ClimateLogin from './views/climate/ClimateLogin';
import ClimateRegister from './views/climate/ClimateRegister';
import GamesIndex from './views/games/GamesIndex';
import ImagoQuadIndex from './views/games/imago_quad/ImagoQuadIndex';
import ClimateChallenge from './views/climate/ClimateChallenge';
import SingleChallenge from './views/climate/SingleChallenge';
import DIY from './views/diy/DIY';
import ClimateLogout from './views/climate/ClimateLogout';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	const { category } = useParams();

	return (
		<div className="scroll-smooth">
			<div id="wrapper" className="homepage">
				<div className="wrapper-holder">
					<Header />
					<Routes>
						{/* Home Route */}
						<Route path="/" element={<Home />} />
						<Route path="/about-us" element={<About />} />
						{/* Resources Routes */}
						<Route path="/resources" element={<Resources />} />
						<Route path="/resources/books" element={<Books />} />
						<Route
							path="/resources/books/:grade"
							element={<BookGrade category={category} />}
						/>
						<Route path="/resources/dictionary" element={<Dictionary />} />
						<Route path="/resources/eclass" element={<Eclass />} />
						{/* Transcribers Routes*/}
						<Route path="/transcribers" element={<TranscribeIndex />} />
						<Route
							path="/transcribers/transcribe-numbers"
							element={<TranscribeNumbers />}
						/>
						<Route
							path="/transcribers/transcribe-words"
							element={<TranscribeWords />}
						/>
						<Route
							path="/transcribers/transcribe-sentences"
							element={<TranscribeSentence />}
						/>
						<Route
							path="/transcribers/transcribe-alphabets"
							element={<TranscribeAlphabets />}
						/>
						{/* Climate Routes */}
						<Route path="/climate" element={<ClimateIndex />} />
						<Route path="/climate/login" element={<ClimateLogin />} />
						<Route path="/climate/logout" element={<ClimateLogout />} />
						<Route path="/climate/register" element={<ClimateRegister />} />
						<Route path="/climate/challenge" element={<ClimateChallenge />} />
						<Route
							path="/climate/challenge/:challenge"
							element={<SingleChallenge category={category} />}
						/>
						{/* <PrivateRoute path="/climate" component={<ClimateIndex />} /> */}
						{/* Games Routes */}
						<Route path="/games" element={<GamesIndex />} />
						<Route path="/games/imago_quad" element={<ImagoQuadIndex />} />
						<Route path="/games/imago_quad" element={<ImagoQuadIndex />} />
						6k
						{/* Games Routes */}
						<Route path="/diy" element={<DIY />} />
					</Routes>
				</div>
				<div className="top-blue-border"></div>
				<Footer id="footer" />
			</div>
		</div>
	);
}

export default App;
