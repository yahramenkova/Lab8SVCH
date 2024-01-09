import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import Warehouse from '../Pictures/warehouse.png';
import Button from './button';
import { getUserById } from '../http/userAPI';
import ChangePasswordForm from './changePasswordForm/changePasswordForm';

function Header() {
  const navigate = useNavigate();
  const userAuth = localStorage.getItem('auth');
  const userId = localStorage.getItem('userId');

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(userId);
        setUsername(user.name);
        setUseremail(user.email);
      } catch (error) {
        console.error('Ошибка при получении информации о пользователе:', error);
      }
    };

    if (userAuth === 'true') {
      fetchUser();
    }
  }, [userAuth, userId]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/logIn');
  };

  const handlePasswordChange = () => {
    setShowChangePasswordForm(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setShowChangePasswordForm(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={Warehouse} alt="Склад интернет-магазина" className="img-logo" />
          <h2>Склад</h2>
        </div>
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Главная</li>
          <li onClick={() => navigate('/aboutUs')}>О нас</li>
          <li onClick={() => navigate('/catalog')}>Каталог</li>
          <li onClick={() => navigate('/specialOffers')}>Акции</li>
          {!userAuth && <li onClick={() => navigate('/logIn')}>Войти</li>}
          {!userAuth && <li onClick={() => navigate('/reg')}>Зарегистрироваться</li>}
          {userAuth === 'true' && <li onClick={() => navigate('/cart')}>Корзина</li>}
          {userAuth === 'true' && <li onClick={() => navigate('/reviews')}>Отзывы</li>}
          {userAuth === 'true' && (
            <Button onClick={openPopup} className="account-link" customClass='button-acaunt' label='Аккаунт'/>
          )}
        </ul>
      </nav>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Аккаунт</h3>
            <p>Имя пользователя: {username}</p>
            <p>Почта пользователя: {useremail}</p>
            {showChangePasswordForm ? (
              <ChangePasswordForm userId={userId} />
            ) : (
              <div>
                <Button label="Изменить пароль" onClick={handlePasswordChange} />
              </div>
            )}
             <Button label="Выйти" onClick={handleLogout} />
            <span className="close" onClick={closePopup}>
              &times;
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;