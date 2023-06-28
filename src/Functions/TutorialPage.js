import React from 'react'
import TutorialHand from '../Components/TutorialPage/Image/TutorialHandVersionTwo.svg'
import Text from '../data/Text.json'
import Assessment from '../Components/TutorialPage/Button/Assessment';
import StartItLaterButton from '../Components/TutorialPage/Button/StartItLaterButton';


const TutorialPage = () => {
  return (
    <div style={{ margin: '0px auto 0 auto', padding: '0 60px' }}>
      <div className='tutorialInfor'>
        <div style={{ fontSize: '35px', fontWeight: 'bold', lineHeight: "100px", fontFamily: 'Alef' }}>{Text.Before}</div>
        <div style={{ fontSize: '16px', marginTop: '30px', lineHeight: '30px', color: '#5f5f5f', fontFamily: 'Alef' }}>{Text.WeExpect}</div>

        <div style={{ width: 'fit-content', marginTop: '40px' }}>
          <Assessment />
          <StartItLaterButton/>
        </div>

        <div style={{ flex: 'left' }}>
          <div style={{ fontSize: '25px', display: 'inline-block', marginRight: '10px', color: '#4db193', marginTop: '30px', marginBottom: '60px', fontFamily: 'Angkor' }}>
            {Text[10]}
          </div>
          <div style={{ fontSize: '16px', display: 'inline-block', color: '#4db193', position: 'relative', top: '-3px', fontFamily: 'Alef' }}>{Text.Takes}</div>
        </div>

      </div>

      <div className='tutorialHand'>
        <img src={TutorialHand} alt="TutorialHand" style={{ width: '100%' }} />
      </div>
    </div>
  )
}

export default TutorialPage
