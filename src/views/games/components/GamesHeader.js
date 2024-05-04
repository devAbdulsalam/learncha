import React from 'react'

const GamesHeader = ({title}) => {
  return (
    <div>
        <h1 className='capitalize text-5xl py-4 text-red-400'>{title}</h1>
    </div>
  )
}

export default GamesHeader;