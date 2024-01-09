import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import './overview.css'

const Overview = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Добро пожаловать в наш магазин!</Card.Title>
          <Card.Text>
            Мы рады приветствовать вас. Начните свой шоппинг, исследуя наши акционные товары
            и уникальные предложения. У нас есть все, что вам нужно для комфортной и приятной
            покупки.
          </Card.Text>
          <Button onClick={() => navigate('/catalog')} label=' Перейти в каталог'/>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Overview;
