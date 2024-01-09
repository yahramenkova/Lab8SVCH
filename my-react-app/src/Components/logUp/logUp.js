import React, { useState } from 'react';
import Button from '../button';
import { registration } from '../../http/userAPI';
import './logUp.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const signIn = async () => {
    try {
      const response = await registration(
        formData.name,
        formData.email,
        formData.password
      );
      console.log(response);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', formData);
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name:"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Enter email:"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter password:"
            className="input_field"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <Button label="register" customClass="button-logUp" onClick={signIn} />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;