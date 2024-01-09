import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeCart, removeFromCart, clearCart, buyItems } from '../../Redux/basketReducer';
import { getAllCartItems, deleteCartItem, deleteAllItems } from '../../http/cartAPI'; // Импортируем функцию getAllCartItems
import Button from '../button';
import "./basket.css";

function Basket() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.basket.cartItems);
  const userId = localStorage.getItem('userId'); 

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartItems = await getAllCartItems(userId); // Получаем товары для текущего пользователя
        dispatch(initializeCart(cartItems));
      } catch (error) {
        console.error('Error initializing cart:', error);
      }
    };

    fetchCartItems();
  }, [dispatch, userId]);

  const handleRemoveItem = async (itemId) => {
    try {
      console.log(itemId)
      await deleteCartItem(itemId); // Вызываем функцию deleteCartItem для удаления элемента корзины на сервере
      dispatch(removeFromCart(itemId));
      const updatedCart = cartItems.filter(item => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const handleBuy = async () => {
    try {
      await deleteAllItems(userId); // Call the deleteAllItems function with the userId
      alert('Покупка успешно оформлена!');
      dispatch(buyItems());
      dispatch(clearCart());
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Error deleting all cart items:', error);
    }
  };

  return (
    <div className="basket">
      <h2>Корзина покупок</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.cart_id}>
              <img className="busket_img" src={item.product.image} alt={item.name} />
              <h3>{item.product.name}</h3>
              <p>Цена: ${item.product.price}</p>
              <p>Количество: {item.quantity}</p>
              <Button label="Удалить" onClick={() => handleRemoveItem(item.cart_id)} customClass="button-del" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="status-busket">Корзина пока пуста...</p>
      )}
      <p className="total-price">Общая стоимость: ${calculateTotalPrice()}</p>
      <Button label="Оформить заказ" onClick={handleBuy} customClass="buy-button" />
    </div>
  );
}

export default Basket;