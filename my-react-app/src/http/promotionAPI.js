import { $host } from "./index";

export const getPromotions = async () => {
  try {
    const response = await $host.get('/api/promotion'); 
    const data = response.data; 
    return data;
  } catch (error) {
    console.error('Error while fetching promotions:', error);
    throw error;
  }
};