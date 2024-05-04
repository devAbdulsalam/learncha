import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
        <div className='w-20 h-20 border-4 border-white border-b-red-500 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loader