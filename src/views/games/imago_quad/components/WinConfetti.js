import React from 'react'
import useWindowSize from '../useWindowSize'
import Confetti from 'react-confetti'

const WinConfetti = () => {
  const { width, height } = useWindowSize();
  return (
    <div className='absolute top-0 left-0'>
      <Confetti
        width={width}
        height={height}
      />
    </div>
  )
}
export default WinConfetti;