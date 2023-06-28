import Text from '../../../data/Text.json';
import Caret from '../Image/Caret.svg';
import React from 'react';

const Assessment = () => (
  <div className='assessmentButtonHolder'>
    <div className='assessmentButtonText'>
      {Text.StartofHealth}
    </div>
    <div className='assessmentButtonImg'>
      <img src={Caret} alt="Caret" />
    </div>
  </div>
);

export default Assessment;