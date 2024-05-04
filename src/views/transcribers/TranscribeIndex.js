import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Intro from './components/Intro';
import MainHead from './components/MainHead';
import TranscribeNumber from './TranscribeNumbers';
import word from '../../images/word.jpg';
import nums from '../../images/nums.jpg';
import alpha from '../../images/alpha.jpg';
import L4Games from '../../images/L4Games.jpg';
import sentence from '../../images/sentence.jpg';

const TranscribeIndex = () => {
  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <MainHead title='Transcribers' />
        <Intro />
        <div className='w-full flex max-w-5xl'>
            <div class="dvdr"></div>
            <div className='w-full py-5 grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 p-4 sm:p-6 md:p-8'>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Numbers</h3>
                    </div>
                    <Link to='/transcribers/transcribe-numbers'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl' alt='' src={nums} />
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-red-400 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-red-400 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Alphabets</h3>
                    </div>
                    <Link to='/transcribers/transcribe-alphabets'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src={L4Games} />
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-yellow-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-yellow-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Words</h3>
                    </div>
                    <Link to='/transcribers/transcribe-words'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src={word} />
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-green-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-green-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Sentence</h3>
                    </div>
                    <Link to='/transcribers/transcribe-sentences'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src={sentence} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TranscribeIndex