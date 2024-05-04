import React from 'react'

const Head = ({title, color}) => {
  return (
    <div>
        <h2 style={{fontFamily: 'Gochi Hand'}} className={`capitalize text-2xl text-center ${color}`}>{title}</h2>
    </div>
  )
}

export default Head