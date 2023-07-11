import React, { Fragment, useState,useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import Modal from '@mui/base/Modal';
import Button from '@mui/base/Button';
import { useSpring, animated } from '@react-spring/web';
import Add from '../../Components/RiskEvaluatorPage/Img/Add.svg'
import Delete from '../../Components/RiskEvaluatorPage/Img/Delete.svg'
import Cross from '../../Components/RiskEvaluatorPage/Img/Cross.svg'

export default function Popper( { open, setOpen, top, left, width, height, windowHeight, windowWidth, Symptoms, setSymptoms_List, User_Symptoms_List, setUser_Symptoms_List } ) {
  const handleClose = () => setOpen(false);

  // const [Symptoms_List, setSymptoms_List] = useState([]);

  const userAdd = (detailItem) => {
    if (User_Symptoms_List.includes(detailItem)==false) {
      setUser_Symptoms_List([...User_Symptoms_List,detailItem])
    }
  };

  const userDelete = (detailItem) => {
    if (User_Symptoms_List.includes(detailItem)) {
      setUser_Symptoms_List(User_Symptoms_List.filter(item => item !== detailItem))
    }
  };

  // const updatedList = Symptoms.detail.map((detailItem) => [...detailItem].join(''));
  //   setSymptoms_List((prevList) => [...prevList, ...updatedList]);

  const test = () => {
    // console.log('m')
  }
  
 
  return (
    <div>
      <StyledModal
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        
          <Box style={{position:'absolute' ,top:`${top-25<10?10:`${top+height>windowHeight?windowHeight-height-60:top-25}`}px`,left:`${left-50<10?10:`${left+width>windowWidth?windowWidth-10:left-50}`}px`, width:`${width+100}px`, 
          height:`${height+50}px`,backgroundColor:'white'}} onClick={test} className='hh' >
            <div>
            <img src={Cross} alt="Cross" className='cardDetailCross' onClick={handleClose} />
              <div className='cardDetailItemTitle'>
                {Symptoms.title}
              </div>
              <div className='bottomLineCard' style={{ background: `linear-gradient(90deg, ${Symptoms.lineStart} 0%, ${Symptoms.lineEnd} 127.46%)` }}></div>
              <div className='cardDetailItem_overflow' style={{height:`${height-10}px`}}>
                {Symptoms.detail.map((detailItem, index) => 
                (
                  <div>
                    <div key={index} className='cardDetailItem'>● {detailItem}</div>
                    {/* <div className='cardDetailItemAdd' onClick={()=>{userAdd(detailItem)}} ><img src={Add} alt="Add" /></div> */}

                    <div className='cardDetailItemAdd' >
                      {User_Symptoms_List.includes(detailItem)?<img src={Delete} alt="Delete" onClick={()=>{userDelete(detailItem)}} />:<img src={Add} alt="Add" onClick={()=>{userAdd(detailItem)}} />}
                    </div>
                  </div>
                ))}
                
              </div>

            </div>
          </Box>
        
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});


const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});