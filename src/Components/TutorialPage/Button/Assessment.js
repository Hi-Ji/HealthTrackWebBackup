import Text from '../../../data/Text.json';
import Caret from '../Image/Caret.svg';
import React from 'react';

const Assessment = () => (
  <div className='buttonHolder'>
    <div className='buttonText'>
      {Text.StartofHealth}
    </div>
    <div className='buttonImg'>
      <img src={Caret} alt="Caret" />
    </div>
  </div>
);

export default Assessment;