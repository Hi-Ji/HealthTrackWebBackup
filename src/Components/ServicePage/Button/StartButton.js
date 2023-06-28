import React from 'react'
import StartArrow from '../Image/StartArrow.svg'
import Text from '../../../data/Text.json'

const StartButton = () => {
  return (
    <div>
      <button className='stratButton'>
        <div className='stratButtonContent'>{Text.Start}</div>
        <img src={StartArrow} alt="StartArrow" className='stratButtonArrow' />
      </button>
    </div>
  )
}

export default StartButton
