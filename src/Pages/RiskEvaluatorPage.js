import React, { Fragment, useState,useEffect, useRef } from 'react';
import '../Styles/RiskEvaluatorPage.css'
import RiskCards from '../Functions/RiskEvaluatorPage/RiskCards'
import SearchAppBar from '../Functions/RiskEvaluatorPage/RiskSearchBar'
import Heart from '../Components/RiskEvaluatorPage/Img/Heart.svg'
import List from '../Components/RiskEvaluatorPage/Img/List.svg'
import SymptomsList from '../Functions/RiskEvaluatorPage/SymptomsList';

const RiskEvaluator = () => {
  const [Symptoms_List, setSymptoms_List] = useState([]);
  const [User_Symptoms_List, setUser_Symptoms_List] = useState([]);

  useEffect(() => {
    console.log(Symptoms_List);
  }, [Symptoms_List]);

  useEffect(() => {
    // console.log(User_Symptoms_List);
  }, [User_Symptoms_List]);
  
  return (
    <div className='test_padding'>
      <div className='riskList'>
        {/* <img src={List} alt="List" /> */}
        <SymptomsList User_Symptoms_List={User_Symptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} />
      </div>
      <div className='riskHeart'>
        <div style={{fontSize:'30px', fontFamily: 'Nanum Pen Script'}}>OUR BEST INSURANCE SERVICES</div>
        <img style={{paddingTop: '10px'}} src={Heart} alt="Heart" />
      </div>
      <div className='riskSearchBar'>
        <SearchAppBar setUserSymptomsList={setUser_Symptoms_List} userSymptomsList={User_Symptoms_List}/>
      </div>
      <div className='symptomsTitle'>
        SYMPTOMS
      </div>
      <div className='riskCards'>
        <RiskCards setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
      </div>
      
    </div>
  )
}

export default RiskEvaluator
