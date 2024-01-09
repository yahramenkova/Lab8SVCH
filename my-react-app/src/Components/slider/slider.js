import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'; // Import your custom styles
import { getPromotions } from '../../http/promotionAPI';
import Button from '../button';
import * as XLSX from 'xlsx';

export default function Slider() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const promotions = await getPromotions();
        setProducts(promotions);
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const generateExcelReport = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(products);
    XLSX.utils.book_append_sheet(wb, ws, "Access Data");
    XLSX.writeFile(wb, "access_report.xlsx");
  };

  return (
    <div>
      <h2>Акции и специальные предложения</h2>
      {userRole === 'ADMIN' && <Button onClick={generateExcelReport} label='Скачать Excel отчет' customClass='add-button'></Button>}
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {products.map((product) => (
          <Carousel.Item key={product.product_id}>
            <img className="img-slider" src={product.image} alt={product.name} />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>{product.description}</p>т
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}