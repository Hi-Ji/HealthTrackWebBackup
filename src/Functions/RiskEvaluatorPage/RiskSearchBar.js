import React from 'react'
import SearchButton from '../../Components/RiskEvaluatorPage/Img/SearchButton.svg'

const RiskSearchBar = () => {
  return (
    <div >
      <input type="text" className='riskSearchInput' />
      <div className='riskSearchButton'>
        <img src={SearchButton} alt="SearchButton" className='riskSearchButtonSvg' />
      </div>
    </div>
  )
}

export default RiskSearchBar
