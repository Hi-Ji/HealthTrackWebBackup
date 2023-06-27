import React from 'react'
import NextButtonSvg from './NextButton.svg'

const NextButton = () => {
  return (
    <div style={{backgroundColor:'#FDE383',width:'40px',padding:'25px',borderRadius:'100%',marginLeft:'80px',marginTop:'60px', boxShadow:'0 20px 30px -6px rgba(240, 255, 79, 0.5)'}}>
      
      <img src={NextButtonSvg} alt="NextButtonSvg" />
    </div>
  )
}

export default NextButton
