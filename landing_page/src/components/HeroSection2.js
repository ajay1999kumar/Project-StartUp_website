import React from 'react';
import './HeroSection2.css';
import {FaBars, FaTimes} from 'react-icons/fa';


function HeroSection2({
    lightBg,topline,lightText,lightTextDesc,headline,description1,description2,description3,buttonLabel,img,alt,imgStart

}) {
   

    return (
        <div className={lightBg? 'home__hero-section2':'home__hero-section2 darkBg'}>
            <div className='container'>
                <div className='header'>
                    <p className={lightText?'heading2':'heading2 dark'}>How it works?</p>
                    <div style={{borderTop: "3px solid  rgb(93, 93, 243) ", width:'30%', marginLeft:'35%', paddingBottom:'15px'}}></div>
                </div>
                <div className="row home__hero-row" 
                style={{display:'flex', flexDirection:imgStart==='start'?'row-reverse':'row'}}>
                    <div className="col2">
                        <div className="home__hero-img-wrapper2">
                            <img src="images/svg-3.svg"  alt={alt} className='home_hero2-img'/>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="home__hero-text-wrapper2">
                            <div className="row2" >
                                <div class="icon-box">
                                        <i class="fa fa-newspaper-o fa-2x middle" aria-hidden="true"></i>
                                </div>
                                <div  className="row2_text"><p className={lightTextDesc? 'home__hero2-subtitle':'home__hero2-subtitle dark'}>Find your favourite subject</p></div>
                            </div>
                            <div className="row2" >
                                <div class="icon-box">
                                    <i class="fa fa-newspaper-o fa-2x middle" aria-hidden="true"></i>
                                </div>
                                <div  className="row2_text"><p className={lightTextDesc? 'home__hero2-subtitle':'home__hero2-subtitle dark'}>Learn from video lectures</p></div>
                            </div>
                            <div className="row2" >
                                <div class="icon-box">
                                    <i class="fa fa-newspaper-o fa-2x middle" aria-hidden="true"></i>
                                </div>
                                <div  className="row2_text"><p className={lightTextDesc? 'home__hero2-subtitle':'home__hero2-subtitle dark'}>Enjoy Learning</p></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
           
    )
        {/*<div className={lightBg? 'home__hero-section':'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row"
                style={{display:'flex', flexDirection:imgStart==='start'?'row-reverse':'row'}}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topline}</div>
                            <h1 className={lightText?'heading':'heading dark'}>{headline}</h1>
                           <ul>
                               <li> <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'} >
                                {description1}
                            </p>
                            </li>
                            <li>
                            <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'} >
                                {description2}
                            </p>
                            </li>
                            <li>
                            <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'} >
                                {description3}
                            </p>
                            </li>
                            </ul>
                            <Link to='/sign-up'>
                                <Button buttonSize='btn-wide' buttonColor='blue'>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className='home__hero-img'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>*/}
    
}

export default HeroSection2