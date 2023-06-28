import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ServiceDoctor from '../Components/ServicePage/ServiceDoctor.svg'
import StartButton from '../Components/ServicePage/StartButton';
import NextButton from '../Components/ServicePage/NextButton';
import Text from '../data/Text.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ServicePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}  style={{paddingTop:'130px',margin:'0 auto'}}>
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
          <NextButton left='80px' top='60px'/>
        </div>
        

      </Grid>
    </Box>
  );
}
export default ServicePage