import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const toggleMenu = () => {
    document.querySelector('.menu_trigger').click();
  }
  return (
    <header id="header">
      <div className='flex justify-end items-center w-full'>
        <div className='absolute top-0 p-8 pt-10 sm:p-5 w-full flex justify-end items-center'>
          <a className='menu_trigger relative sm:p-5 cursor-pointer'></a>
        </div>
      </div>
      <div className="left-part"></div>
      <a id="logo" href="/"></a>
      <a href='./' className='absolute top-24 left-0 w-full flex justify-center text-4xl text-red-400 text-decoration-none' style={{fontFamily: 'Gochi  Hand'}}><Link to='/'>Learncha</Link></a>
      <div className='bar-holder'>
        <nav id="nav">
            <ul>
              <li onClick={toggleMenu}><a className='cursor-pointer'><Link to='/games'>Games</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/diy'>DIY</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/resources'>Resources</Link></a></li>
              <li onClick={toggleMenu}><a><Link to='/transcribers'>Transcribers</Link></a></li>
              {/* <li onClick={toggleMenu}><a><Link to='/climate'>Climate</Link></a></li> */}
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header