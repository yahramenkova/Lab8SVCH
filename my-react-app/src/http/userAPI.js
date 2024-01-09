import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (name, email, password) => {
    try {
      const response = await $host.post('/api/user/reg', { name, email, password });
      const { token } = response.data;
  
      // Сохранить токен в локальном хранилище
      localStorage.setItem('token', token);
  
      return token;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  };

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const getUserById= async(userId) => {
  try {
    const response = await $authHost.get(`api/user/${userId}`);
    const user = response.data;
    return user;
  } catch (error) {
    console.error(error);
  }
}


export const changePassword = async (userId, oldPassword, newPassword) => {
  try {
    console.log(userId)
    const response = await $authHost.put(`/api/user/${userId}/changePassword`, {
      oldPassword,
      newPassword,
    });

    // Проверяем успешность изменения пароля
    if (response.status === 200) {
      console.log('Пароль успешно изменен');
    } else {
      console.log('Не удалось изменить пароль');
    }
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error);
  }
}

export const getDecryptedPassword = async(email) => {
  console.log(email)
  const response = await $authHost.get(`/api/user/dec/${encodeURIComponent(email)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
 
  const data = await response.json();
 
  if (response.ok) {
    return data.password;
  } else {
    throw new Error(data.message);
  }
 }
 
 