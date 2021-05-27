import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import "./Form.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left flex items-center justify-center flex-col'>
        <h1 className="text-5xl font-dosis font-bold ">Resume</h1>
          <LazyLoadImage />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
         <div className='form-content-right flex items-center justify-center flex-col'>
         <h1 className="text-5xl font-dosis font-bold">Email</h1>
          <LazyLoadImage />
        </div>
      </div>
    </>
  );
};

export default Form;
