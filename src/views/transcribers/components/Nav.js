import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({backwardLink, forwardLink, color, hoverColor}) => {
  return (
    <div className='absolute top-0 w-full px-4 py-5 flex justify-between'>
        <Link to={`${backwardLink}`}>
            <span className={`flex items-center justify-center text-xl w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-${color} hover:border-${hoverColor}-400 rounded-full text-${color} hover:text-${hoverColor}-400`}>
                <i className='fa fa-arrow-left'></i>
            </span>
        </Link>
        <Link to={`${forwardLink}`}>
            <span className={`flex items-center justify-center text-xl w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-${color} hover:border-${hoverColor}-400 rounded-full text-${color} hover:text-${hoverColor}-400`}>
                <i className='fa fa-arrow-right'></i>
            </span>
        </Link>
    </div>
  )
}

export default Nav