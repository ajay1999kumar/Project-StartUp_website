import styled from 'styled-components'

export const ServicesContainer= styled.div`
height:1000px;
display:flex;

flex-direction:column;
justify-content:center;
align-items:center;
background:#fff;

@media screen and (max-width:768px){
    height:1100px;
}

@media screen and (max-width:480px){
    height:1300px
}
`
export const ServicesfluidContainer= styled.div`
width:80%;
display:flex;
flex-direction:column;
align-items:center;
background:#f0f7f7;
padding: 60px 10px 60px 10px;
margin:10px;

@media screen and (max-width:768px){
    height:1100px;
}

@media screen and (max-width:480px){
    height:1300px
}
`
export const ServicesWrapper = styled.div`

max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:70px;
padding: 0 50px;

@media screen and (max-width:1000px){
    grid-template-colums: 1fr 1fr;
    padding: 0 20px;

}

@media screen and (max-width:768px){
    grid-template-colums: 1fr;
    padding: 0 20px;

}`

export const ServicesCard=styled.div`
background:#fff;
displayLflex;
flex-direction:column;
justify-content:flex-start,
align-items:center;
border-radius:10px;
max-height:450px;
height:300px;
padding:30px;
text-align:center;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;

&:hover{
    transform:scale(1.2);
    transition:all 0.2s ease-in-out;
    cursor:pointer;
}`

export const ServicesIcon=styled.img`
height:160px;
width:160px;
margin-bottom:10px
`
export const ServicesTopHeading=styled.div`
font-size:2.5rem;
color:#181f1f;
font-weight:700;
margin-bottom:64px;

@media screen and (max-width:480){
    font-size:2rem;
}
`
export const ServicesH1=styled.div`
font-size:1.5rem;
color:#687373;
margin-bottom:64px;
font-weight:600;
font-family: cursive;

@media screen and (max-width:480){
    font-size:2rem;
}
`
export const ServicesH2=styled.h2`
font-size:1rem;
margin-bottom:10px;
`