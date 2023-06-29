import ServicePage from '../Functions/HomePage/ServicePage'
import AimPage from '../Functions/HomePage/AimPage'
import TutorialPage from '../Functions/HomePage/TutorialPage'
import '../Styles/HomePage.css'

const HomePage = () => {
  return (
    <div>
      <ServicePage />
      <AimPage />
      <TutorialPage />
    </div>
  )
}

export default HomePage
