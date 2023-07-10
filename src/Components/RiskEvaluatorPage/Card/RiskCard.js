import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const RiskCard = ( {title, lineStart, lineEnd, img} ) => {
  const test2=()=>{
    console.log(lineStart)
  }
  return (
    <Card className='card'>
      <CardActionArea>
        <CardContent className='cardTitle'>
          <Typography gutterBottom variant="h7" component="div">
            {title}
          </Typography>

        </CardContent>
        {/* <CardMedia
          component="img"
          height="330"
          image={Img1}
          alt="Img1"
        /> */}
        <img src={img} alt="Img1" className='cardImg1' />
        
        <div className='bottomLine' style={{ background: `linear-gradient(90deg, ${lineStart} 0%, ${lineEnd} 127.46%)` }}></div>

      </CardActionArea>
    </Card>
  );
}

export default RiskCard