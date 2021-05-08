import React from 'react'
import{
    ServicesContainer,
    ServicesWrapper,
    ServicesH1,
    ServicesH2,
    ServicesCard,
    ServicesIcon
} from './ServiceElements';


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH2>Why learn on Eduventure</ServicesH2>
            <ServicesH1>We help you to achieve the best results</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={'images/svg-1.svg'}/> */}
                    <ServicesH2>Heading 2</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Heading 2</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Heading 2</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Heading 2</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Heading 2</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Heading 2</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
