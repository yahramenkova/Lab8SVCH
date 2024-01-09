import { $authHost } from "./index";

const addItemToCart = async (userId, productId, quantity) => {
    try {
      const response = await $authHost.post('/api/cart/item', { user_id: userId, product_id: productId, quantity });
      const cartItem = response.data;
  
      return cartItem;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw error;
    }
  };
  
  // Функция для получения всех элементов корзины
  const getAllCartItems = async (userId) => {
    try {
      const response = await $authHost.get(`/api/cart?userId=${userId}`);
      const cartItems = response.data;
  
      return cartItems;
    } catch (error) {
      console.error('Error getting cart items:', error);
      throw error;
    }
  };
  
  const deleteCartItem = async (itemId) => {
    try {
      const response = await $authHost.delete(`/api/cart/del/${itemId}`);
      const message = response.data.message;
  
      return message;
    } catch (error) {
      console.error('Error deleting cart item:', error);
      throw error;
    }
  };

  async function deleteAllItems(userId) {
    try {
      const response = await $authHost.delete(`/api/cart/${userId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function updateQuantity(itemId) {
    try {
      const response = await $authHost.put(`/api/cart/${itemId}/updateQuantity`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const { message } = response.data;
      console.log(message);
  
    } catch (error) {
      console.error(error);
    }
  }
  export { addItemToCart, getAllCartItems, deleteCartItem, updateQuantity, deleteAllItems};