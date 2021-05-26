import React from "react";
import Readmore from "../components/Readmore/index"
import withTransition from "../withTransition"
import img from "../Images/me.JPG"
import styled from "styled-components"


const IntroBig = styled.h1`
font-size: 3.5em;
`

const TitleIntro = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  font-weight: 900;
  margin-top: 2rem;
  @media (min-device-width: 375px) and (max-device-width: 812px) {
    margin: 6rem 3rem 1rem 3rem;
   
  }
  @media (min-device-width: 1024px) and (max-device-width: 1366px) {
    
    margin-top: 5rem;
    margin-left: 4rem;
  }
  
`
const SubTitleIntro = styled.span`
font-size: 1.5em;
text-align: center;
text-transform: uppercase;
margin-bottom: .6em;
@media (min-device-width: 375px) and (max-device-width: 812px) {
  margin: 0
   
 }
@media (min-device-width: 1024px) and (max-device-width: 1366px) {
    
  
  margin-left: 4rem;
}
`
const Paragraph = styled.p`
font-size: 1.0em;
color: gray;
margin: 0 8em;
@media (min-device-width: 375px) and (max-device-width: 812px) {
  margin: 2em 3em 2em 4em;
   
 }
 @media (min-device-width: 768px) and (max-device-width: 1024px) {
  margin: 2em 7em 4em 9em;
   
 }
 @media (min-device-width: 1024px) and (max-device-width: 1366px) {
    
  
  margin: 0 4em 0 8em;
}
`
const Pic = styled.div`
  
  text-align: center;
  background-image: url(${img});
  width: 100%;
  height: 100vh;
  background-size: cover;
  @media (min-device-width: 375px) and (max-device-width: 812px) {
    height: 600px;
   background-size: cover;
   
  }
  @media (min-device-width: 481px) and (max-device-width: 1024px) {
   height: 600px;
    background-size: cover;
    
   }
   @media (min-device-width: 1024px) and (max-device-width: 1366px) {
    background-size: cover;
    height: 100vh;
  }
 
  `
  const AboutContainer = styled.div`
  width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding:0;

`
const SpacedHorizontalContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
  flex-direction: column;
  background-size: cover;
}
@media  (max-height: 375px) {
  margin-left: 2.5rem;
   
  }
`
;


const About = () => {
 
  


  return (

    <>
    <SpacedHorizontalContainer>
  <AboutContainer>
    <TitleIntro>
    <IntroBig>
    Hi,
    </IntroBig>
     Im Carlos.
    
     
    </TitleIntro>
    <SubTitleIntro>
    Nice to meet you!
    </SubTitleIntro>
    <Paragraph >
      <Readmore >

    My journey and passion in web developement started early 2021, in the mist of a global pandemic. Theres something great about 
      </Readmore>

     
    </Paragraph>
  
  </AboutContainer>
  <AboutContainer>

    <Pic>
    
    </Pic>
      
  </AboutContainer>
    </SpacedHorizontalContainer>
    </>
  );
}

export default withTransition(About);
