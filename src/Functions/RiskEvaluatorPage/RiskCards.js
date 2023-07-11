import RiskCard from '../../Components/RiskEvaluatorPage/Card/RiskCard'
import React, { Fragment, useState, useRef, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import RiskEvalu from '../../data/RiskEvalu.json'
import Img1 from '../../Components/RiskEvaluatorPage/Img/Img1.svg'
import Img10 from '../../Components/RiskEvaluatorPage/Img/Img10.svg'
import Img2 from '../../Components/RiskEvaluatorPage/Img/Img2.svg'
import Img3 from '../../Components/RiskEvaluatorPage/Img/Img3.svg'
import Img4 from '../../Components/RiskEvaluatorPage/Img/Img4.svg'
import Img5 from '../../Components/RiskEvaluatorPage/Img/Img5.svg'
import Img6 from '../../Components/RiskEvaluatorPage/Img/Img6.svg'
import Img7 from '../../Components/RiskEvaluatorPage/Img/Img7.svg'
import Img8 from '../../Components/RiskEvaluatorPage/Img/Img8.svg'
import Img9 from '../../Components/RiskEvaluatorPage/Img/Img9.svg'


export default function RiskCards({setSymptoms_List,setUser_Symptoms_List, User_Symptoms_List}) {
  


  const test2 = () => {
    // console.log('1')
  }

  useEffect(() => {
    const detailList = Object.values(RiskEvalu).map((item) => item.detail).flat();
    
    setSymptoms_List(detailList)
  }, []);

  
  return (
    <div className='totolCards' onClick={test2}>
      <Grid container spacing={3}>
        <Grid item md={1} className='displayNone' >
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} >
          {/* <div> */}
            <RiskCard Symptoms={RiskEvalu.Symptoms1} img={Img1} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          {/* </div> */}
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms2}  img={Img2} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms3} img={Img3} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms4} img={Img4} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms5} img={Img5} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item md={1} className='displayNone' >
        </Grid>
        <Grid item md={1} className='displayNone' >
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} >
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms6}  img={Img6} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms7} img={Img7} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms8}  img={Img8} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms9}  img={Img9} setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <div>
            <RiskCard Symptoms={RiskEvalu.Symptoms10} img={Img10}  setSymptoms_List={setSymptoms_List} setUser_Symptoms_List={setUser_Symptoms_List} User_Symptoms_List={User_Symptoms_List} />
          </div>
        </Grid>
        <Grid item md={1} className='displayNone' >
        </Grid>
      </Grid>
    </div>
  );
}



