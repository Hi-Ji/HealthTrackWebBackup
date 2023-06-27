import React from 'react'
import Caret from '../Components/TutorialPage/Caret.svg'
import TutorialHand from '../Components/TutorialPage/TutorialHand.svg'

const TutorialPage = () => {
  return (
    <div style={{margin:'0px auto 0 auto',maxWidth:'1075px',padding:'0 60px'}}>
      <div className='tutorialInfor'>
        <div style={{fontSize:'30px',fontWeight:'bold'}}>Before Using HealthTrack</div>
        <div style={{fontSize:'20px',marginTop:'30px',lineHeight:'30px',color:'#5f5f5f'}}>We expect you to have a health assessment, otherwise you might not able to use the complete servuces privided by our product &#40;the report will only be used as a reference for your immediate health status&#41;</div>

        <div style={{width:'fit-content',marginTop:'40px'}}>
          <div style={{backgroundColor:'#4db193', width:'250px',height:'50px',textAlign:'center',borderRadius:'13px',display:'inline-block',marginRight:'20px'}}>
            <div style={{display:'inline-block',color:'white',marginTop:'15px'}}>
              Start of Health Assessment
            </div>
            <div style={{width:'30px',display:'inline-block',position:'relative',top:'5px',left:'4px'}}><img src={Caret} alt="Caret"  /></div>
          </div>

          <div style={{border:'1px solid #4db193',width:'150px',display:'inline-block',paddingTop:'14px',paddingBottom:'16px',textAlign:'center',borderRadius:'13px',color:'#4db193',marginTop:'20px'}}>Start It Later</div>
        </div>

        <div style={{flex:'left'}}>
          <div style={{fontSize:'30px',display:'inline-block',marginRight:'10px',color:'#4db193',fontWeight:"bolder",marginTop:'30px',marginBottom:'60px'}}>
          10 mins
          </div>
          <div style={{fontSize:'10px',display:'inline-block',color:'#4db193',position:'relative',top:'-3px'}}>takes about</div>
        </div>
        
      </div>

      <div className='tutorialHand'>
        <img src={TutorialHand} alt="TutorialHand" style={{width:'100%'}} />
      </div>
    </div>
  )
}

export default TutorialPage
