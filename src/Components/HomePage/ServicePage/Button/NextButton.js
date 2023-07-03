import React from 'react'
import NextButtonSvg from '../Image/NextButton.svg'

const NextButton = ({ left, top, scrollFunction }) => {
  return (
    <div 
      className='servicePageNextButton'
      style={{
        marginLeft: left,
        marginTop: top
      }}
    onClick={scrollFunction}>
      <img src={NextButtonSvg} alt="NextButtonSvg" />
    </div >
  )
}

export default NextButton
