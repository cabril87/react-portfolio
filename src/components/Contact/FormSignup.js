import React from 'react';
import validate from '../../validateinfo';
import useForm from '../../useForm';

import './Form.css';



const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
 

    <div className='form-content-right flex items-center justify-center flex-col'>
      <form onSubmit={handleSubmit} className='form text-sm' noValidate>
        <h1 className="sm:text-center">
          <span className="text-5xl" style={{color: "palevioletred",
        fontWeight: "900"
        }}>
          Contact Me
            </span> by filling out the
          information below.
        </h1>
        <div className='form-inputs text-sm '>
          <label className='form-label text-sm '>Name</label>
          <input
            className='form-input text-sm '
            type='text'
            name='name'
            placeholder=''
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs text-sm'>
          <label className='form-label text-sm'>Email</label>
          <input
            className='form-input text-sm'
            type='text'
            name='email'
            placeholder=''
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Subject</label>
          <input
            className='form-input'
            type='text'
            name='subject'
            placeholder=''
            value={values.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Message</label>
          <input
            className='form-input'
            type='text'
            name='message'
            placeholder=''
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Contact Me
        </button>
       
        <span className='form-input-login'>
          See some cool animation <a href='/'>Click here</a>
        </span>
      </form>
    </div>
 
  );
};

export default FormSignup;
