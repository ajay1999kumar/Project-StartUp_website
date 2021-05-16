import React from 'react'
import{
    ServicesContainer,
    ServicesWrapper,
    ServicesH1,
    ServicesH2,
    ServicesCard,
    ServicesIcon,
    ServicesfluidContainer,
    ServicesTopHeading
} from './ServiceElements';



const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesfluidContainer>
            <ServicesTopHeading>Why learn on Eduventure</ServicesTopHeading>
            <ServicesH1>We help you to achieve the best results...</ServicesH1>
            <ServicesWrapper >
                <ServicesCard>
                    <ServicesIcon src={'images/svg-5.svg'}/>
                    <ServicesH2>The best teacher in the industry from IIT, NIT, having rich experience</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'images/svg-6.svg'}/>
                    <ServicesH2>Personalised content and adaptive teaching</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'images/svg-7.svg'}/>
                    <ServicesH2>Live and Interactive</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'images/svg-8.svg'}/>
                    <ServicesH2>Concept Building through interactive quizes and regular assessments</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'images/svg-3.svg'}/>
                    <ServicesH2>Most affordable int the market</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'images/svg-4.svg'}/>
                    <ServicesH2>Personal monitoring and career guidance</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
           </ServicesfluidContainer> 
        </ServicesContainer>
    )
}

export default Services
