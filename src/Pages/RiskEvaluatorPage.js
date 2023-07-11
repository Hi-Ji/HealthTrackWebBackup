import React from 'react'
import '../Styles/RiskEvaluatorPage.css'
import RiskCards from '../Functions/RiskEvaluatorPage/RiskCards'
import SearchAppBar from '../Functions/RiskEvaluatorPage/RiskSearchBar'
import Heart from '../Components/RiskEvaluatorPage/Img/Heart.svg'
import List from '../Components/RiskEvaluatorPage/Img/List.svg'

const RiskEvaluator = () => {
  
  return (
    <div className='test_padding'>
      <div className='riskList'>
        <img src={List} alt="List" />
      </div>
      <div className='riskHeart'>
        <div style={{fontSize:'20px'}}>OUR BEST INSURANCE SEERVICES</div>
        <img src={Heart} alt="Heart" />
      </div>
      <div className='riskSearchBar'>
        <SearchAppBar />
      </div>
      <div className='symptomsTitle'>
        SYMPTOMS
      </div>
      <div className='riskCards'>
        <RiskCards />
      </div>
      
    </div>
  )
}

export default RiskEvaluator
