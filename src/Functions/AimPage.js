import React from 'react'
import DiseaseBook from '../Components/AimPage/DiseaseBook.svg'
import Text from '../data/Text.json'
import NextButton from '../Components/ServicePage/NextButton'


const AimPage = () => {
  return (
    <div style={{margin:'200px auto 0 auto',padding:'0 60px'}} >
      <div>
        <div style={{fontFamily:'Angkor',fontWeight: '300', fontSize:'45px',textAlign:'center',color:'#4DB193'}}>{Text.Aim}</div>
        <div style={{fontFamily:'Alef',fontWeight: '200',fontSize:'30px',textAlign:'center',color:'black',marginTop:'15px'}}>{Text.ProvideSimpleToUse}</div>
      </div>
      <div style={{textAlign:'center',marginTop:'250px'}}>
        <img src={DiseaseBook} alt="DiseaseBook" className='diseaseBook' />
      </div>
      <NextButton left='2px' top='-200px'/>
      <div style={{padding:'70px'}}></div>
    </div>
  )
}

export default AimPage
