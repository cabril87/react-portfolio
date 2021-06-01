import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import styled from "styled-components"
import "./Form.css"




const Container = styled.div`
display: flex; 
flex-direction: row;
justify-content: center;
align-items: center;
height: 100vh;
margin: 60px
`

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
 



  function submitForm() {
    setIsSubmitted(true);
  }
  return (


    <Container>
     
      <div className='form-container  form-content-left container mx-auto display: grid   h-auto  lg:w-48 sm:w-10 ' style={{
        background: "#eee"
      }} >


      
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        

        



      </div>
    </Container>

  );
};

export default Form;
