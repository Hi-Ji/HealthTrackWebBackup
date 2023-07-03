import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ServiceDoctor from '../../Components/HomePage/ServicePage/Image/ServiceDoctor.svg'
import StartButton from '../../Components/HomePage/ServicePage/Button/StartButton';
import NextButton from '../../Components/HomePage/ServicePage/Button/NextButton';
import Text from '../../data/Text.json';
import { useRef, useEffect } from 'react';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ServicePage = ({aimRef,serRef}) => {

  const ScrollDownToAim = () => {
    aimRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Box sx={{ flexGrow: 1 }}  style={{paddingTop:'130px',margin:'0 auto'}} ref={serRef}>
      <Grid container spacing={2}>
        <Grid item md={6} >
          <div className='serviceInfo' >
            <StartButton />
            
            <div className='serviceInfoTitle'>
              {Text.HealthTrack}
            </div>
            
            <div style={{color:'grey',marginTop:'0px',lineHeight:'30px',marginBottom:'20px',fontSize:'20px', fontFamily: 'Alef'}}>
              {Text.TheHealthTrackCalc}
            </div>


          </div>
        </Grid>
        <Grid item md={6} className='ServiceDoctor' >
          <img src={ServiceDoctor} alt="svg ServiceDoctor"  />
        </Grid>

        <div className='nextButton'>
          <NextButton left='80px' top='60px' scrollFunction={ScrollDownToAim}/>
        </div>
        

      </Grid>
    </Box>
  );
}
export default ServicePage