import React, { useState, useEffect } from 'react';
import './popularProduct.css';
import Button from './button';
import { getProducts } from '../http/productAPI';
import { useNavigate } from 'react-router-dom';
import { addItemToCart, updateQuantity, getAllCartItems } from '../http/cartAPI'; 

const PopularProducts = () => {
  const [randomProduct, setRandomProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userAuth = localStorage.getItem('auth');

  useEffect(() => {
    const fetchRandomProduct = async () => {
      try {
        const products = await getProducts();
        const randomIndex = Math.floor(Math.random() * products.length);
        setRandomProduct(products[randomIndex]);
        setLoading(false);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    fetchRandomProduct();
  }, []);

  const addToCart = async (product) => {
    try {
      const userId = localStorage.getItem('userId');
      const cartItems = await getAllCartItems(userId); // Retrieve all cart items for the user
      const existingCartItem = cartItems.find((item) => item.product_id === product.product_id);

      if (existingCartItem) {
        await updateQuantity(existingCartItem.cart_id);
      } else {
        const cartItem = await addItemToCart(userId, product.product_id, 1);
        console.log(cartItem);
      }

      navigate('/cart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  if (loading) {
    return <p>Загрузка данных...</p>;
  }


  return (
    <div className="popular-products">
      <h2>Популярный товар</h2>
      {randomProduct && (
        <div className="product">
          <img className="popular_product_img" src={randomProduct.image} alt={randomProduct.name} />
          <h3>{randomProduct.name}</h3>
          <p>Цена: ${randomProduct.price}</p>
          {userAuth === 'true' &&
          <Button label="Добавить в корзину" onClick={() => addToCart(randomProduct)} />}
        </div>
      )}
    </div>
  );
};

export default PopularProducts;