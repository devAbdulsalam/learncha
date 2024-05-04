import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClimateHeader from './components/ClimateHeader';
import { useNavigate } from "react-router-dom";
import Intro from './components/Intro';

// import climateImage_1 from  './images/climate1.svg';

// import { ReactComponent as climateImage_1 } from  './images/climate1.svg';

import solar from  './images/solar.png';
import electric_car from  './images/electric-car.png';
import room_heater from './images/room-heater.png';
import underground from './images/underground.png';
import harvest_farming from './images/harvest-farming.png';
import plant_pot from './images/plant-pot.png';
import rainforest from './images/rainforest.png';
import ocean from './images/ocean.png';
import plastic from './images/plastic.png';
import rangoli from './images/rangoli.png';
import AuthUser from './AuthUser';
import WeatherForecast from './components/WeatherForecast';

const ClimateIndex = () => {
    const [profileView, setProfileView] = useState(false)
    const toggleProfileView = () => {
        setProfileView(prevValue => !prevValue)
    }
    
    const isActiveUser = AuthUser();
    const navigate = useNavigate();

    const redirect = () => {
        console.log('returning: ', isActiveUser);
        navigate("/climate/login");
    };
  return (
    <section className="promo relative w-full flex flex-col items-center py-4x">
        <ClimateHeader title='Climate'/>
        {/*<Intro />*/}
        <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-start gap-6 mb-4 mt-6 md:mb-6 border-2 border-red-400 border-dashed rounded-b-3xl overflow-hidden">
            <nav className="flex justify-between bg-white px-4 sm:px-6 md:px-8 py-4 md:py-5 absolute w-full z-20 top-0 left-0 border-b border-gray-200">
                <div style={{fontFamily: 'Gochi Hand'}} className="hidden md:flex " id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 text-lg md:text-xl md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link data-smooth to="/climate" className="block py-2 pr-4 pl-3 text-red-400 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <a data-smooth href="#causes" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-red-400 rounded md:p-0">Causes</a>
                        </li>
                        <li>
                            <a data-smooth href="#faq" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-red-400 rounded md:p-0">FAQs</a>
                        </li>
                        <li>
                            <a data-smooth href="#solutions" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-red-400 rounded md:p-0">Solutions</a>
                        </li>
                        <li>
                            <Link data-smooth to="/climate/challenge" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-red-400 rounded md:p-0">Challenge</Link>
                        </li>
                    </ul>
                </div>  
                <div className="relative inline-block w-full">
                    <div className='flex w-full justify-end items-center'>
                        <button onClick={() => toggleProfileView()} type="button" className="inline-flex w-12 h-12 justify-center rounded-full overflow-hidden border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button">
                            <div className='h-full w-full flex justify-center items-center text-xl'><span><i className='fa fa-bars'></i></span></div>
                        </button>
                    </div>
                    
                    <div className={`${profileView? '': 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                            <a href="#causes" className="text-gray-700 block px-4 py-2 text-sm flex md:hidden" role="menuitem" tabindex="-1" id="menu-item-0">Causes</a>
                            <a href="#faqs" className="text-gray-700 block px-4 py-2 text-sm flex md:hidden" role="menuitem" tabindex="-1" id="menu-item-1">FAQS</a>
                            <a href="#solutions" className="text-gray-700 block px-4 py-2 text-sm flex md:hidden" role="menuitem" tabindex="-1" id="menu-item-2">Solutions</a>
                        </div>
                        {
                            isActiveUser !== null?
                            <div className="py-1" role="none">
                                <Link to="/climate/challenge" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Challenge</Link>
                                <Link to="/climate/logout" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Logout</Link>
                            </div>
                            :
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Sign in/Register</a>
                            </div>
                        }
                    </div>
                </div>
            </nav>

            { /*Weather Forecast*/ }
            <WeatherForecast />
            
            <div style={{fontFamily: 'Gochi Hand'}} className="bg-secondary py-20 text-center space-y-2 md:space-y-10 mx-10 rounded-3xl relative bg-blue-100">
                <p className=" md:text-4xl text-2xl md:px-64 px-5 text-blue-400 uppercase text-primary">Help save the planet by
                challenging
                yourself to be a solution to climate change</p>
                <div className="flex items-center justify-center">
                <Link to="/climate/challenge"
                    className="uppercase bg-white text-blue-400 border-2 border-dashed border-blue-400 hover:bg-blue-500 hover:text-white px-6 py-1 rounded-full font-semibold text-xl">join the
                    challenge</Link>
                </div>
                <img src={rangoli} className="absolute top-0 left-0 w-32 md:block hidden" alt=""
                data-aos="zoom-in" />
                <img src={rangoli} className="absolute bottom-0 right-0 w-32 md:block hidden" alt=""
                data-aos="zoom-in" />
            </div>

            <div className='flex flex-col items-center w-full'>
                <div className="w-full justify-center flex bg-gray-50" id="climate">
                    <div className="w-full flex flex-col items-center py-16 md:py-12 lg:py-16 md:px-8 lg:px-12">
                        <div className="max-w-3xl p-4">
                            <h2 style={{fontFamily: 'Gochi Hand'}} className="text-center text-3xl md:text-4xl uppercase text-red-400 font-semibold pb-5">what is climate change?</h2>
                            <p className="text-center text-justify px-3">
                                Climate change involves significant changes in average conditions—such as temperature,
                                precipitation, wind patterns, and other aspects of climate—that occur over years, decades,
                                centuries, or longer. Climate change involves longer-term trends, such as shifts toward warmer,
                                wetter, or drier conditions. These trends can be caused by natural variability in climate over
                                time, as well as human activities that add greenhouse gases to the atmosphere like burning fossil fuels for energy.
                            </p>
                            <a data-smooth href="#climate" className="block text-5xl font-bold text-red-400 text-center mt-5 animate-pulse">
                                <i className="fa-solid fa-angles-down"></i>
                            </a>
                        </div>
                        { /*
                            <div className="px-2">
                                <iframe height="315" src="https://www.youtube.com/embed/WkvPdUtYhX8?&autoplay=1" className="w-full rounded-lg"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                                </iframe>
                            </div>
                        */ }
                    </div>
                </div>
            </div>

            <div className="md:mx-10 py-8 flex flex-col items-center" id="causes">
                <div className="md:mb-0 mb-5">
                    <h2 style={{fontFamily: 'Gochi Hand'}} className="text-center text-2xl md:text-4xl xl:text-5xl uppercase text-cyan-500 font-semibold pb-5">causes of climate change?</h2>
                    <p className=" text-center text-gray-400 text-center w-full max-w-4xl pb-6 md:pb-10 px-5 text-justify">Since the Industrial Revolution, human activities have released large
                    amounts of carbon dioxide and other greenhouse
                    gases into the atmosphere, which has changed the earth’s climate. Natural processes, such as changes in the
                    sun's energy
                    and volcanic eruptions, also affect the earth's climate. However, they do not explain the warming that we have
                    observed
                    over the last century.</p>

                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4 w-full max-w-5xl">
                    <div data-aos="zoom-in" className="cause-card flex flex-col justify-start py-4 px-6 rounded-lg shadow-md hover:shadow-lg border-t">
                        <h3 className="font-semibold pb-3 text-cyan-500">Heat-trapping Greenhouse Gases And The Earth's Climate</h3>
                        <p className='text-justify'>Concentrations of the key greenhouse gases have all increased since the Industrial Revolution due to
                        human activities.
                        Carbon dioxide, methane, and nitrous oxide concentrations are now more abundant in the earth’s atmosphere
                        than any time
                        in the last 800,000 years.</p>
                    </div>
                    <div data-aos="zoom-in" className="cause-card flex flex-col justify-start py-4 px-6 rounded-lg shadow-md hover:shadow-lg border-t">
                        <h3 className="font-semibold pb-3 text-cyan-500">Reflectivity or Absorption of the Sun’s Energy</h3>
                        <p className='text-justify'>Activities such as agriculture, road construction, and deforestation can change the reflectivity of the
                        earth's surface,
                        leading to local warming or cooling. This effect is observed in heat islands, which are urban centers that
                        are warmer
                        than the surrounding, less populated areas. One reason that these areas are warmer is that buildings,
                        pavement, and
                        roofs tend to reflect less sunlight than natural surfaces.</p>
                    </div>
                    <div data-aos="zoom-in" className="cause-card flex flex-col justify-start py-4 px-6 rounded-lg shadow-md hover:shadow-lg border-t">
                        <h3 className="font-semibold pb-3 text-cyan-500">Changes in the Earth’s Orbit and Rotation</h3>
                        <p className='text-justify'>Changes in the earth’s orbit and its axis of rotation have had a big impact on climate in the past. For
                        example, the
                        amount of summer sunshine on the Northern Hemisphere, which is affected by changes in the planet’s orbit,
                        appears to be
                        the primary cause of past cycles of ice ages, in which the earth has experienced long periods of cold
                        temperatures (ice
                        ages), as well as shorter interglacial periods (periods between ice ages) of relatively warmer
                        temperatures</p>
                    </div>
                    <div data-aos="zoom-in" className="cause-card flex flex-col justify-start py-4 px-6 rounded-lg shadow-md hover:shadow-lg border-t">
                        <h3 className="font-semibold pb-3 text-cyan-500">Changes in the Earth’s Reflectivity</h3>
                        <p className='text-justify'>The amount of sunlight that is absorbed or reflected by the planet depends on the earth’s surface and
                        atmosphere. Dark
                        objects and surfaces, like the ocean, forests, and soil, tend to absorb more sunlight. Light-colored
                        objects and
                        surfaces, like snow and clouds, tend to reflect sunlight. About 70 percent of the sunlight that reaches
                        the earth is
                        absorbed.18 Natural changes in the earth’s surface, like the melting of sea ice, have contributed to
                        climate change in
                        the past, often acting as feedbacks to other processes.</p>
                    </div>
                </div>
            </div>

            <div className="md:px-10" id="faq">
                <p style={{fontFamily: 'Gochi Hand'}} className="text-center font-orbitron uppercase text-red-400 font-semibold pb-5 text-3xl md:text-5xl">frequently asked questions
                </p>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 px-6">
                    <div data-aos="flip-right" className="cause-card border-t shadow-md hover:shadow-lg rounded-xl p-6 cursor-pointer">
                        <h3 className="text-xl text-center font-semibold pb-3 text-red-400">How is climate change affecting animals?</h3>
                        <p className='text-justify'>Changing climates directly and indirectly cause stress to animals across the world. Many species are
                        approaching—or have
                        already reached—the limit of where they can go to find hospitable climates. In the polar regions, animals like
                        polar
                        bears that live on polar ice are now struggling to survive as that ice melts.</p>

                        <p className='text-justify'>
                        It’s not just how climate change affects an animal directly; it’s about how the warming climate affects the
                        ecosystem
                        and food chain that animal has adapted to. In the U.S. and Canada, moose are struggling due to an increase in
                        ticks and
                        parasites that are surviving the shorter, milder winters.</p>
                    </div>
                    <div data-aos="flip-right" className="cause-card border-t shadow-md hover:shadow-lg rounded-xl p-6 cursor-pointer">
                        <h3 className="text-xl text-center font-semibold pb-3 text-red-400">How is climate change affecting people?</h3>
                        <p className='text-justify'>From straining agricultural systems to making regions less habitable, climate change is affecting people
                        everywhere. You
                        may have noticed how weather patterns near you are shifting or how more frequent and severe storms are
                        developing in the
                        spring. Maybe your community is experiencing more severe flooding or wildfires.</p>

                        <p className='text-justify'>
                        Many areas are even experiencing “sunny day flooding” as rising sea levels cause streets to flood during high
                        tides. In
                        Alaska, some entire coastal communities are being moved because the sea level has risen to the point where
                        their
                        original location is no longer habitable.</p>
                    </div>
                    <div data-aos="flip-right" className="cause-card border-t shadow-md hover:shadow-lg rounded-xl p-6 cursor-pointer">
                        <h3 className="text-xl text-center font-semibold pb-3 text-red-400">How is climate change affecting farms and our food?</h3>
                        <p className='text-justify'>Climate change is disrupting weather patterns, leading to more extreme and frequent droughts and flooding
                        events that
                        directly threaten harvests. The warming climate is contributing to rising populations of insect pests that eat
                        a higher
                        share of crop yields.</p>
                        <p className='text-justify'>
                        In the Midwestern United States, more frequent and intense rains have caused devastating spring flooding,
                        which
                        delays—and sometimes prevents—planting activities. These impacts make it more difficult for farmers to grow
                        crops and
                        sustain their livelihoods.</p>
                    </div>
                </div>
            </div>

            <div className="md:mx-10 mb-6" id="solutions">
                <div className="items-center mx-10 mt-20 space-y-5">
                <div className="">
                    <h2 style={{fontFamily: 'Gochi Hand'}} className="text-center font-orbitron uppercase text-blue-500 font-semibold pb-5 text-3xl md:text-5xl">solutions to climate
                    change?</h2>
                    <p className="text-gray-400 text-center pb-5 md:pb-8">Changing our main energy sources to clean and renewable energy is the
                    best way to stop using fossil fuels. These include
                    technologies like solar, wind, wave, tidal and geothermal power. Switch to sustainable transport. Petrol and
                    diesel
                    vehicles, planes and ships use fossil fuels.</p>

                </div>
                <div className="">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 text-sm gap-5 md:gap-8 my-5">
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={solar} alt="solar" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Invest in renewable energy</h3>
                        <p className='text-justify'>Changing our main energy sources to clean and renewable energy is the best way to stop using fossil
                        fuels. These include
                        technologies like solar, wind, wave, tidal and geothermal power.</p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={electric_car} alt="" className="w-16 mb-5 "/>
                        <h3 className="font-semibold pb-3 text-blue-400">Switch to sustainable transport</h3>
                        <p classNameName='text-justify'>Petrol and diesel vehicles, planes and ships use fossil fuels. Reducing car use, switching to electric
                        vehicles and
                        minimising plane travel will not only help stop climate change, it will reduce air pollution too.</p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={room_heater} alt="" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Help us keep our homes cosy</h3>
                        <p className='text-justify'>Homes shouldn’t be draughty and cold – it’s a waste of money, and miserable in the winter. The government
                        can help
                        households heat our homes in a green way – such as by insulating walls and roofs and switching away from
                        oil or gas
                        boilers to heat pumps.</p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={underground} alt="" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Keep fossil fuels in the ground</h3>
                        <p className='text-justify'>Fossil fuels include coal, oil and gas – and the more that are extracted and burned, the worse climate
                        change will get.
                        All countries need to move their economies away from fossil fuels as soon as possible.</p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={harvest_farming} alt="" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Improve farming and encourage vegan diets</h3>
                        <p className='text-justify'>One of the best ways for individuals to help stop climate change is by reducing their meat and dairy
                        consumption, or by
                        going fully vegan. Businesses and food retailers can improve farming practices and provide more
                        plant-based products to
                        help people make the shift.</p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={plant_pot} alt="" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Restore nature to absorb more carbon</h3>
                        <p className='text-justify'>The natural world is very good at cleaning up our emissions, but we need to look after it. Planting trees
                        in the right
                        places or giving land back to nature through ‘rewilding’ schemes is a good place to start.</p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={rainforest} alt="" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Protect forests like the Amazon</h3>
                        <p className='text-justify'>Forests are crucial in the fight against climate change, and protecting them is an important climate
                        solution. Cutting
                        down forests on an industrial scale destroys giant trees which could be sucking up huge amounts of carbon.
                        </p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={ocean} alt="" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Protect the oceans</h3>
                        <p className='text-justify'>Oceans also absorb large amounts of carbon dioxide from the atmosphere, which helps to keep our climate
                        stable. But many are overfished, used for oil and gas drilling or threatened by deep sea mining.</p>
                    </div>
                    <div className="card shadow-md hover:shadow-lg rounded-lg p-4" data-aos="zoom-in">
                        <img src={plastic} alt="" className="w-16 mb-5" />
                        <h3 className="font-semibold pb-3 text-blue-400">Reduce plastic</h3>
                        <p className='text-justify'>Plastic is made from oil, and the process of extracting, refining and turning oil into plastic (or even
                        polyester, for
                        clothing) is surprisingly carbon-intense. It doesn’t break down quickly in nature so a lot of plastic is
                        burned, which
                        contributes to emissions.</p>
                    </div>

                    </div>
                </div>
                </div>
            </div>

            <div style={{fontFamily: 'Gochi Hand'}}  className="flex flex-col w-full max-w-6xl pb-8 md:mb-10" id="faq">
                <p className="text-center font-orbitron text-3xl md:text-4xl uppercase py-10 font-semibold text-red-400">more on climate</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 p-5 md:px-8">
                    <div className="rounded-xl shadow-md hover:shadow-2xl" data-aos="zoom-in">
                        <iframe  style={{fontFamily: 'Gochi Hand'}} height="315" src="https://www.youtube.com/embed/jAa58N4Jlos" className="w-full rounded-lg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div className="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/G4H1N_yXBiA" className="w-full rounded-lg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div className="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/Sv7OHfpIRfU" className="w-full rounded-lg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div className="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/tykLKCT7DyY" className="w-full rounded-lg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div className="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/cn9PhiDJp-A" className="w-full rounded-lg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                    <div className="" data-aos="zoom-in">
                        <iframe height="315" src="https://www.youtube.com/embed/JgvDuLcL4yQ" className="w-full rounded-lg"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ClimateIndex