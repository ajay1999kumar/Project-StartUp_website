import React from 'react'

import HeroSection from '../../HeroSection'
import HeroSection2 from '../../HeroSection2'
import Services from '../../Services'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
           
            <HeroSection {...homeObjThree}/>
            
            <Services/>
            <HeroSection2 {...homeObjOne}/>
            
            {/* <HeroSection {...homeObjTwo}/>
            
            
            <HeroSection {...homeObjFour}/>
            <HeroSection {...homeObjThree}/> */}
            
        </div>
    )
}

export default Home
