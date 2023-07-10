import RiskCard from '../../Components/RiskEvaluatorPage/Card/RiskCard'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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


export default function RiskCards() {

  return (
    <div className='totolCards'>
      <Grid container spacing={3}>
        <Grid item md={1} className='displayNone' >
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} >
          <RiskCard title={RiskEvalu.Symptoms1.title} lineStart={RiskEvalu.Symptoms1.lineStart} lineEnd={RiskEvalu.Symptoms1.lineEnd} img={Img1} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms2.title} lineStart={RiskEvalu.Symptoms2.lineStart} lineEnd={RiskEvalu.Symptoms2.lineEnd} img={Img2} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms3.title} lineStart={RiskEvalu.Symptoms3.lineStart} lineEnd={RiskEvalu.Symptoms3.lineEnd} img={Img3} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms4.title} lineStart={RiskEvalu.Symptoms4.lineStart} lineEnd={RiskEvalu.Symptoms4.lineEnd} img={Img4} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms5.title} lineStart={RiskEvalu.Symptoms5.lineStart} lineEnd={RiskEvalu.Symptoms5.lineEnd} img={Img5} />
        </Grid>
        <Grid item md={1} className='displayNone' >
        </Grid>
        <Grid item md={1} className='displayNone' >
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} >
          <RiskCard title={RiskEvalu.Symptoms6.title} lineStart={RiskEvalu.Symptoms6.lineStart} lineEnd={RiskEvalu.Symptoms6.lineEnd} img={Img6} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms7.title} lineStart={RiskEvalu.Symptoms7.lineStart} lineEnd={RiskEvalu.Symptoms7.lineEnd} img={Img7} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms8.title} lineStart={RiskEvalu.Symptoms8.lineStart} lineEnd={RiskEvalu.Symptoms8.lineEnd} img={Img8} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms9.title} lineStart={RiskEvalu.Symptoms9.lineStart} lineEnd={RiskEvalu.Symptoms9.lineEnd} img={Img9} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RiskCard title={RiskEvalu.Symptoms10.title} lineStart={RiskEvalu.Symptoms10.lineStart} lineEnd={RiskEvalu.Symptoms10.lineEnd} img={Img10} />
        </Grid>
        <Grid item md={1} className='displayNone' >
        </Grid>
      </Grid>
    </div>
  );
}



