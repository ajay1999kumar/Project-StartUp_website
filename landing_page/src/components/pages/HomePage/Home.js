import React from 'react'
import HeroSection from '../../HeroSection'
import Services from '../../Services'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
            <Services/>
            {/* <HeroSection {...homeObjTwo}/>
            
            
            <HeroSection {...homeObjFour}/>
            <HeroSection {...homeObjThree}/> */}
            
        </div>
    )
}

export default Home
