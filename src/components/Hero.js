import React from 'react';
import { Link } from 'react-router-dom';
import child_1 from '../images/child_1.png';
import girl from '../images/girl.jpg';
import child_3 from '../images/child_3.png';
import child_4 from '../images/homeclimate.jpg';
import games from '../images/games.jpg';
import cartoonWeather from '../images/cartoon-weather.jpg';
import welcomeVideo from '../videos/welcomeVideo.mp4';
import welcomeVideoBg from '../images/welcomeVideoBg.png';
import lego from '../images/lego.jpeg';
import stem from '../images/stem.jpg';
import last from '../images/last.jpg';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import children from '../images/children.jpg';
import second1 from '../images/second1.jpg';
import second2 from '../images/second2.jpg';
import second3 from '../images/second3.jpg';

const Hero = () => {
  return (
    <div className='border-t-2 md:border-none border-red-400 rounded-t-xl pt-5 px-2 sm:px-3'>
        <section className="w-full pb-8">
            <div className='w-full relative my-4 md:my-8'>
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-label="Slide 2" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active" aria-label="Slide 3" ></button>
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="h-full mdmax-h-[400px] carousel-item active relative float-left w-full">
                            <img src={slide1} className="block w-full object-cover hidden lg:block" alt="..." />
                            <img src={second1} className="block w-full h-full object-cover lg:hidden" alt="..." />
                            <div className="hidden flex flex-col lg:flex-row lg:px-8 carousel-caption absolute text-green-700 left-0 top-0 bg-gray-100 bg-opacity-25 w-full">
                                <div className="w-full lg:w-2/3 h-full flex flex-col lg:flex-row">
                                    <div className="flex flex-col items-center gap-y-4 md:gap-y-6 p-2">
                                        <h5 className="text-xl md:2xl lg:text-6xl">Have fun and learn at the same time</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full max-h-[400px] carousel-item relative float-left w-full">
                            <img src={slide2} className="block w-full object-cover hidden lg:block" alt="..." />
                            <img src={second2} className="block w-full h-full object-cover lg:hidden" alt="..." />
                            <div className="hidden flex flex-col lg:flex-row lg:px-8 carousel-caption absolute text-green-500 left-0 top-0 bg-gray-100 bg-opacity-25 w-full">
                                <div className="w-full lg:w-2/3 h-full flex flex-col lg:flex-row">
                                    <div className="flex flex-col items-center gap-y-4 md:gap-y-6 p-2">
                                        <h5 className="text-xl md:2xl lg:text-6xl">Register for climate challenge</h5>
                                        <p className="text-base md:text-xl lg:text-3xl text-slate-50 bg-green-500 bg-opacity-50 px-4 py-2 rounded-lg">
                                            Learn more about climate
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full max-h-[400px] carousel-item relative float-left w-full">
                            <img src={slide3} className="block w-full object-cover hidden lg:block" alt="..." />
                            <img src={second3} className="block w-full h-full object-cover lg:hidden" alt="..." />
                            <div className="hidden flex flex-col lg:flex-row lg:px-8 carousel-caption absolute text-green-500 left-0 top-0 bg-gray-100 bg-opacity-25 w-full">
                                <div className="w-full lg:w-2/3 h-full flex flex-col lg:flex-row">
                                    <div className="flex flex-col items-center gap-y-4 md:gap-y-6 p-2">
                                        <h5 className="text-xl md:2xl lg:text-6xl">Learncha</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="slider-wrap flex flex-col justify-center items-center gap-4">
                <ul className="slider grid gap-4 md:gap-8 lg:gap-10 max-w-6xl">
                    <li className='flex flex-col md:flex-row px-2 rounded-2xl overflow-hidden'>
                        <div className="h-full w-full justify-center">
                            <div className='flex text-center h-full w-full'>
                                <div className="text-red-400 text-3xl mb-6"><i class="fa-solid fa-quote-left"></i></div>
                                    <p style={{fontFamily: 'Gochi Hand'}} data-aos="zoom-in" data-aos-duration="3000" className='animate animate-pulse w-full text-white text-xs md:text-2xl font-bold text-gray-500 text-center mb-6 px-2'>
                                        Learning can be creative and fun, With learncha learning can become more than creative and fun
                                    </p>
                                <div className="text-red-400 text-3xl mb-6"><i class="fa-solid fa-quote-right"></i></div>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col md:flex-row border-2 border-red-400 px-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className='w-full h-96 overflow-hidden'>
                            <img className='w-full h-full rounded-xl' alt='' src={games}/>
                        </div>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full px-8 gap-4'>
                                <h1><Link href="/games" className='animate animate-pulse text-center w-full flex md:text-3xl text-lg font-bold text-red-500'>Games for kids</Link></h1>
                                <p className='text-justify text-white text-gray-600 text-center mb-6 md:text-xl'>
                                Discover the best educational games for kids and accelerate in subject areas like math, science, art and more.
                                </p>
                                <a className="btn red" ><Link to='/games'>Learn more</Link></a>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col md:flex-row border-2 border-red-400 px-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className="h-96 w-full">
                            <div className='flex flex-col items-center justify-center h-96 w-full px-8 gap-4'>
                                <h1><a href="#" className='animate animate-pulse text-center w-full flex text-red-500 md:text-3xl text-lg font-bold'>Education for kids</a></h1>
                                <p className='text-justify text-white text-gray-600 text-center mb-6 md:text-xl'>
                                Gain access to our numerous resources, read books online and set on with assignment with our dictionary and transcriber
                                </p>
                                <a className="btn red"><Link to='/resources'>Learn more</Link></a>
                            </div>
                        </div>
                        <div className='w-full md:h-96 overflow-hidden'>
                            <img className='w-full h-full rounded-xl' src={girl}/>
                        </div>
                    </li>
                    <li className='flex flex-col md:flex-row border-2 border-red-400 px-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full px-8 gap-4'>
                                <h1><a href="#" className='animate animate-pulse text-center w-full flex text-red-500 md:text-3xl text-lg p-4 font-bold'>Weather Updates</a></h1>
                                <p className='text-justify text-white text-gray-600 text-center mb-6 md:text-xl'>
                                You want to know the latest weather conditions and forecasts in your locality and the world?
                                </p>
                                <a className="btn red"><Link to='/climate'>Learn more</Link></a>
                            </div>
                        </div>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full rounded-xl' src={cartoonWeather}/>
                        </div>
                    </li>
                    <li className='flex flex-col md:flex-row border-2 border-red-400 px-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className='w-full h-96 overflow-hidden'>
                            <img className='w-full h-full rounded-xl' alt='' src={children}/>
                        </div>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full px-8 gap-4'>
                                <h1><Link href="/games" className='animate animate-pulse text-center w-full flex text-red-500 md:text-3xl text-lg font-bold'>Climate Challenge</Link></h1>
                                <p className='text-justify text-white text-gray-600 text-center mb-6 md:text-xl'>
                                Learn about climate and join the climate challenge today and help fight climatic degredation and become a learncha ambassador
                                </p>
                                <a className="btn red"><Link to='/climate'>Learn more</Link></a>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
        <div class="dvdr"></div>
        <section id="main">
            <div class="widget-boxes w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
                <div class="box">
                    <a href="#">
                        <div class="box-info experience">
                            <h2>Our experience</h2>
                            <p className='text-justify'>Help your child discover their passion for <span className='font-semibold'>STEM</span>
                                (<span className='font-semibold italic'>Science, Technology, Engineering and Mathematics</span>)
                                with our engaging offline and online gamifying platform.
                            </p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="#">
                        <div class="box-info about">
                            <h2>About Learncha</h2>
                            <p className='text-justify'>Learncha is a educational Gamifying Paltform designed for kids that helps to instill the love of learning in a child.
                                This applies whether they've learning through homeschooling, online learning, offline traditional classroom setting...
                            </p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="#">
                        <div class="box-info fun">
                            <h2>Big fun for kids!</h2>
                            <p className='text-justify'>Designed by leading learning experts, your child can practice Math, reading, speaking, phonics, Transcribing, Dictionary and more...</p>
                        </div>
                    </a>
                </div>
            </div>
                <div class="widget-boxes news">
                    <h2>Updates</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4'>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src={lego} alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">This is interesting!!!</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-17">17.04.14</time>
                                    <span>Prince Achoja</span>
                                </div>
                                <p className='text-justify'>Introducing our STEM Learning center in Kano Nigeria. Designed by learning experts, your 
                                child can now practice math, reading phones and more. Step-by-step learning path designed to
                                help kids learn math, reading, Science and more(...)</p>
                            </div>
                        </div>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src={stem} alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">We have Lego</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-16">16.04.14</time>
                                    <span>Salma Gambo</span>
                                </div>
                                <p className='text-justify'>Join our lego Robotics Hub Hub Classes every Saturday. Find the right instructor for you,
                                    choose from many topics, skill levels and languages(...)</p>
                            </div>
                        </div>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src={last} alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">Our impact so far</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-13">13.04.14</time>
                                    <span>Muhammad Abubakar</span>
                                </div>
                                <p className='text-justify'>We have partnered with Kano state library board to introduce a platform where you can create
                                a new picture, storybook, translate a story, adapt a story for a different level and build your
                                own story collection(...)</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Hero