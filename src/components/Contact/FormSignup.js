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
    <div className='form-content-middle'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Contact me by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Enter your email'
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
            placeholder='Enter your subject'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Message</label>
          <input
            className='form-input'
            type='text'
            name='message'
            placeholder='Enter your message'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
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
