import React from 'react'
import NextButtonSvg from '../Image/NextButton.svg'

const NextButton = ({ left, top }) => {
  return (
    <div 
      className='servicePageNextButton'
      style={{
        marginLeft: left,
        marginTop: top
      }}
    >
      <img src={NextButtonSvg} alt="NextButtonSvg" />
    </div >
  )
}

export default NextButton
