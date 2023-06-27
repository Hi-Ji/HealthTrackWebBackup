import React from 'react'
import DiseaseBook from '../Components/AimPage/DiseaseBook.svg'

const AimPage = () => {
  return (
    <div style={{margin:'200px auto 0 auto',maxWidth:'1075px',padding:'0 60px'}} >
      <div>
        <div style={{fontFamily:'monospace',fontWeight:'bolder',fontSize:'50px',textAlign:'center',color:'#4DB193'}}>We Aim To</div>
        <div style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'40px',textAlign:'center',color:'black',marginTop:'15px'}}>provide a simple-to-use, aesthetic, and interactive website with vast useful knowledge and information for useusers, as well as raise their awarenesses of health isuues</div>
      </div>
      <div style={{textAlign:'center',marginTop:'250px'}}>
        <img src={DiseaseBook} alt="DiseaseBook" className='diseaseBook' />
      </div>
    </div>
  )
}

export default AimPage
