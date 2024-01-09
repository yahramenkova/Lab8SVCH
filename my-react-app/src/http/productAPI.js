import { $host, $authHost } from "./index";

export const getProducts = async () => {
  try {
    const response = await $host.get('/api/product'); 
    const data = response.data; 
    return data;
  } catch (error) {
    console.error('Error while fetching promotions:', error);
    throw error;
  }
};

export const addItemToList = async (name,  description, price, quantity, image) => {
  try {
    const response = await $authHost.post('/api/product/add', { name,  description, price, quantity, image });
    const cartList = response.data;

    return cartList;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};