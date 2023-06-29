import Text from '../../../../Data/Text.json';
import Caret from '../Image/Caret.svg';

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