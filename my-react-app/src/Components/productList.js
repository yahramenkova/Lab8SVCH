import React, { useState, useEffect } from 'react';
import Button from './button';
import ProductPopup from './productPopup';
import { useNavigate } from 'react-router-dom';
import './productList.css';
import { getProducts } from '../http/productAPI';
import AddProductForm from './productForm/addProductForm';
import { addItemToCart, updateQuantity, getAllCartItems } from '../http/cartAPI'; 
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');
  const userAuth = localStorage.getItem('auth');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = async (product) => {
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

  const generateReport = () => {
    // Создаем новый документ
    const doc = new jsPDF();
  
    doc.addFont('helvetica', 'normal', 'Unicode');
  doc.addFont('helvetica', 'bold', 'Unicode');

    // Создаем заголовок отчета
    doc.setFont('helvetica', 'bold', 'Unicode');
    doc.setFontSize(18);
    doc.text('Отчет о товарах', 10, 20);
  
    // Создаем таблицу с товарами
    const tableData = products.map((product, index) => [
      index + 1,
      product.name,
      product.price,
    ]);
  
    doc.autoTable({
      head: [['№', 'Название', 'Цена']],
      body: tableData,
      startY: 30,
    });
  
    // Сохраняем или отображаем документ
    doc.save('products_report.pdf');
  };

  return (
    <div>
      <h2>Каталог продуктов</h2>
      {userRole === 'ADMIN' && <AddProductForm/>}
      {userRole === 'ADMIN' && <Button customClass='add-button' onClick={generateReport} label='Создать отчет'/>}
    <ul className="product-list"></ul>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.product_id}>
              <img className="products_img" src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Цена: ${product.price}</p>
              {userAuth === 'true' &&
              <Button onClick={() => handleAddToCart(product)} label="Добавить в корзину" />}
              <ProductPopup product={product} />
            </li>
          ))
        ) : (
          <p>Данные загружаются...</p>
        )}
      </ul>
    </div>
  );
}

export default ProductList;