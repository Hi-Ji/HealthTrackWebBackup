import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ServiceDoctor from '../Components/ServicePage/ServiceDoctor.svg'
import StartButton from '../Components/ServicePage/StartButton';
import NextButton from '../Components/ServicePage/NextButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ServicePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}  style={{paddingTop:'130px',margin:'0 auto'}}  maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item md={6} >
          <div className='serviceInfo' >
            <StartButton />
            
            <div className='serviceInfoTitle'>
              HealthTrack
            </div>
            
            <div style={{color:'grey',marginTop:'0px',lineHeight:'25px',marginBottom:'20px',fontSize:'20px', fontFamily: 'Alef'}}>
              The HealthTrack Calculator utilizes user-provided information, including age, lifestyle, and medical conditions, to effectively analyze relevant databases. This analysis yields real-life disease data tailored to the user&#039;s specific information. Furthermore, the Healthtrack calculator offers personalized advice on adopting healthy lifestyles.
            </div>


          </div>
        </Grid>
        <Grid item md={6} className='ServiceDoctor' >
          <img src={ServiceDoctor} alt="svg ServiceDoctor"  />
        </Grid>

        <div className='nextButton'>
          <NextButton />
        </div>
        

      </Grid>
    </Box>
  );
}
export default ServicePage