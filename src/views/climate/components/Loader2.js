import React from 'react';
import clearWeather from '../images/clearWeather.png';

const Loader2 = () => {
  return (
    <div className='w-full flex justify-center items-center py-6'>
        <div className='w-10 h-10 md:w-14 md:h-14 border-2 md:border-4 border-gray-300 border-b-blue-500 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loader2