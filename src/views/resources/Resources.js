
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import book from '../../images/book.jpg';
import dictionary from '../../images/diction.jpg';
import teach from '../../images/teach.jpg';

const Resources = () => {


    useEffect(() => {
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume = 1; // From 0 to 1
        speakData.rate = 1; // From 0.1 to 10
        speakData.pitch = 2; // From 0 to 2
        speakData.lang = 'en';
        speechSynthesis.cancel();
    }, []);

  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <div>
            <h1>Resources</h1>
        </div>
            <div className='w-full py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 sm:p-6 md:p-8'>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Books</h3>
                    </div>
                    <Link to='/resources/books'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl' alt='' src={book} />
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <p className='mb-auto font-bold md:text-xl text-center'>Go through our various collection of children books ranging from science to mathematics english etc. for children from grade 1-6.</p>
                            <a className='btn cyan border-2 border-dashed rounded-3xl border-cyan-400 text-cyan-500 hover:text-white hover:bg-cyan-500' >View Books</a>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-red-400 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-red-400 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Dictionary</h3>
                    </div>
                    <Link to='/resources/dictionary'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src={dictionary} />
                        <div className='flex flex-col gap-4 w-full items-center py-2'>
                            <p className='mb-auto font-bold md:text-xl text-center'>Find the meaning to words and also learn new word in a fun way by using our embedded text to speech API.</p>
                            <a className='btn cyan border-2 border-dashed rounded-3xl border-red-400 text-red-500 hover:text-white hover:bg-red-500'>Let's Go</a>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-yellow-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-yellow-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>e-Classroom</h3>
                    </div>
                    <Link to='/resources/eclass'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src={teach} />
                        <div className='flex flex-col gap-4 w-full items-center py-2'>
                            <p className='mb-auto font-bold md:text-xl text-center'> It is a virtual classroom for kids where they can be able to learn even without being in school, anytime and anywhere. </p>
                            <a className='btn cyan border-2 border-dashed rounded-3xl border-yellow-400 text-yellow-500 hover:text-white hover:bg-yellow-500'>Explore</a>
                        </div>
                    </Link>
                </div>
            </div>
    </section>
  )
}

export default Resources