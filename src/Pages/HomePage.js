import React from 'react'
import Navbar from '../Functions/Navbar'
import ServicePage from '../Functions/ServicePage'
import AimPage from '../Functions/AimPage'
import TutorialPage from '../Functions/TutorialPage'
import '../App.css'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ServicePage />
      <AimPage />
      <TutorialPage />
    </div>
  )
}

export default HomePage
