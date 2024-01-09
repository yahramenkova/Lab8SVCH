import React, { useState } from 'react';
import { changePassword } from '../../http/userAPI';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import './changePasswordForm.css'

function ChangePasswordForm({ userId }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await changePassword(userId, oldPassword, newPassword);
      setOldPassword('');
      setNewPassword('');
      localStorage.clear();
      navigate('/logIn');
      alert("Пороль успешно изменен! Авторизуйтесь для входа в систему!")
    } catch (error) {
      console.error('Ошибка при изменении пароля:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="oldPassword">Старый пароль:</label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">Новый пароль:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>
      <Button customClass='change-button' label='Изменить' type="submit"/>
    </form>
  );
}

export default ChangePasswordForm;