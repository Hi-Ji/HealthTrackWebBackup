import React, { Fragment, useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Popper from '../../../Functions/RiskEvaluatorPage/Popper';

const RiskCard = ( {Symptoms, img} ) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [windowHeight, setWindowHeight] = useState();
  const [windowWidth, setWindowWidth] = useState();
  
  const buttonRef = useRef(null);

  const handleClick = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    setTop(buttonRect.top);
    setLeft(buttonRect.left);
    setWidth(buttonRect.width);
    setHeight(buttonRect.height);
    console.log(buttonRect);

    const window_Height = window.innerHeight;
    const window_Width = window.innerWidth;
    setWindowHeight(window_Height);
    setWindowWidth(window_Width);
  };

  useEffect(() => {
    const handleResize = () => {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setTop(buttonRect.top);
      setLeft(buttonRect.left);
      setWidth(buttonRect.width);
      setHeight(buttonRect.height);
      const window_Height = window.innerHeight;
      const window_Width = window.innerWidth;
      setWindowHeight(window_Height);
      setWindowWidth(window_Width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const test2=()=>{
    console.log(Symptoms.id)
    console.log(open)
    
  }
  
  return (
    <Fragment>
      
    <Card className='card' onClick={()=>{test2();handleOpen();handleClick()}} ref={buttonRef}>
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

    {open && <Popper open={open} setOpen={setOpen} top={top} left={left} width={width} height={height} windowHeight={windowHeight} windowWidth={windowWidth} Symptoms={Symptoms} />}
    
    </Fragment>
  );
}

export default RiskCard