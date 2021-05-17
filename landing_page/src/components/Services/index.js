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



const Services = ({topHeading,heading1,card}) => {
    return (
        <ServicesContainer id="services">
            <ServicesfluidContainer>
            <ServicesTopHeading>{topHeading}</ServicesTopHeading>
            <ServicesH1>{heading1}</ServicesH1>
            <ServicesWrapper >
              { 
                card.map((data)=>{
                    return(
                        <ServicesCard>
                    <ServicesIcon src={data.img}/>
                    <ServicesH2>{data.heading2}</ServicesH2>
                </ServicesCard>
                    )

                })
              }
                
            </ServicesWrapper>
           </ServicesfluidContainer> 
        </ServicesContainer>
    
    )
}

export default Services
