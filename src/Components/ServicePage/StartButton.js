import React from 'react'
import StartArrow from './StartArrow.svg'

const StartButton = () => {
  return (
    <div>
      <button className='stratButton'>
        <div className='stratButtonContent'>Get Started</div>
        <img src={StartArrow} alt="StartArrow" className='stratButtonArrow' />
      </button>
    </div>
  )
}

export default StartButton
