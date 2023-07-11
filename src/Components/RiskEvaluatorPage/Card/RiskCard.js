import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const RiskCard = ( {Symptoms, img} ) => {
  const test2=()=>{
    console.log(Symptoms.id)
  }
  return (
    <Card className='card' onClick={test2}>
      <CardActionArea>
        <CardContent className='cardTitle'>
          <Typography gutterBottom variant="h7" component="div">
            {Symptoms.title}
          </Typography>

        </CardContent>
        <img src={img} alt="Img1" className='cardImg1' />
        
        <div className='bottomLine' style={{ background: `linear-gradient(90deg, ${Symptoms.lineStart} 0%, ${Symptoms.lineEnd} 127.46%)` }}></div>

      </CardActionArea>
    </Card>
  );
}

export default RiskCard