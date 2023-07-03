import ServicePage from '../Functions/HomePage/ServicePage'
import AimPage from '../Functions/HomePage/AimPage'
import TutorialPage from '../Functions/HomePage/TutorialPage'
import '../Styles/HomePage.css'
import { useRef } from 'react'




const HomePage = () => {

    const aimRef = useRef(null);
    const tutRef = useRef(null);

    return (

        <div>
            <ServicePage aimRef={aimRef}/>
            <AimPage aimRef={aimRef} tutRef={tutRef}/>
            <TutorialPage tutRef={tutRef}/>
        </div>
    )
}

export default HomePage
