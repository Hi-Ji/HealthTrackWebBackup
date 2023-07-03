import React from 'react'
import StartArrow from '../Image/StartArrow.svg'
import Text from '../../../../data/Text.json'
import { useNavigate } from 'react-router-dom'



const StartButton = () => {

  const navigate = useNavigate();
  
  const goIntro = () => {
    navigate('/intro');
  }
  
  return (
    <div>
      <button className='stratButton' onClick={goIntro}>
        <div className='stratButtonContent'>{Text.Start}</div>
        <img src={StartArrow} alt="StartArrow" className='stratButtonArrow' />
      </button>
    </div>
  )
}

export default StartButton
