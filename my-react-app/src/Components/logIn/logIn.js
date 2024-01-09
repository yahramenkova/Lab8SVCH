import React, { useState } from 'react';
import { login } from '../../http/userAPI';
import { observer } from 'mobx-react-lite';
import Button from '../button';
import './logIn.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getDecryptedPassword } from '../../http/userAPI';

const AuthorizationForm = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login(email, password);
      console.log('Пользователь вошел:', userData);
      localStorage.setItem('auth', true);
      localStorage.setItem('userId', userData.id);
      localStorage.setItem('role', userData.role);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/catalog');
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
      setError('Invalid email or password');
    }
  };

  const handleForgotPassword = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleGetDecryptedPassword = async () => {
    try {
      const decryptedPassword = await getDecryptedPassword(email);
      console.log('Расшифрованный пароль:', decryptedPassword);
      // Делайте что-то с расшифрованным паролем
    } catch (error) {
      console.error('Ошибка получения расшифрованного пароля:', error);
    }
  };

  return (
    <section className="autorize">
      <div className="registration-form-container">
        <div className="autorize_text">
          <h2 className="enter__data">Enter your data</h2>
        </div>
        <div className="form__container">
          <form onSubmit={handleSubmit} className="form">
            {error && <div className="alert alert-danger">{error}</div>}
            <input type="text" className="input_field" placeholder="Login/Email" onChange={handleEmailChange} />
            <input type="password" className="input_field" placeholder="Password" onChange={handlePasswordChange} />
            <Button type="submit" customClass="button-logIn" label="Submit" />
          </form>
          <div className="registration-link">
            <p>Not registered yet? </p>  <Link to="/reg">Register here</Link>
            <p className="forgot-password" onClick={handleForgotPassword}>
              Forgot password?
            </p>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Forgot Password</h3>
            <p>Please enter your email:</p>
            <input type="text" className="input_field" placeholder="Email" value={email} onChange={handleEmailChange} />
            <Button label="Get Decrypted Password" onClick={handleGetDecryptedPassword} />
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
          </div>
        </div>
      )}
    </section>
  );
});

export default AuthorizationForm;