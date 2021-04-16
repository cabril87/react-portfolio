import React, { useState } from 'react'
import "./style.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ContactForm = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    if (!!errors[field]) setErrors({
      ...errors,
      [field]: null
    })
  }
  const findFormErrors = () => {
    const { name, email, rating, comment } = form
    const newErrors = {}
    // name errors
    if (!name || name === '') newErrors.name = 'Cannot be blank!'
    else if (name.length > 30) newErrors.name = 'Name is too long!'
    // food errors
    if (!email || email === '') newErrors.email = 'Enter Email!'
    // rating errors
    if (!rating || rating > 5 || rating < 1) newErrors.rating = 'must assign a rating between 1 and 5!'
    // comment errors
    if (!comment || comment === '') newErrors.comment = 'cannot be blank!'
    else if (comment.length > 100) newErrors.comment = 'comment is too long!'

    return newErrors
  }
  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your feedback!')
    }
  }
  return (

    <div className='contactForm d-flex flex-column align-items-center'>
      <Form style={{ width: '300px', border: "2px solid", padding: "20px", marginBottom: "70px" }}>
      <h1 className='contactH1 d-flex flex-column align-items-center'>Contact Me</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            onChange={e => setField('name', e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' onChange={e => setField('name', e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ratings</Form.Label>
          <Form.Control as='select' type='text' onChange={e => setField('name', e.target.value)}>
            <option value=''>Select Rattings Number </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control type='text' onChange={e => setField('name', e.target.value)} />
        </Form.Group>
        <Button onClick={handleSubmit} type='submit'>Submit</Button>
      </Form>
    </div>








  )
}

export default ContactForm;
