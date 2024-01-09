import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutUsPage.css';

const styles = StyleSheet.create({
  fadeInAnimation: {
    animationName: fadeIn,
    animationDuration: '1s',
  },
});

const AboutUsPage = () => {
  return (
    <Container className='about'>
      <h2>О нас</h2>
      <Row>
        <Col md={6} className={css(styles.fadeInAnimation)}>
          <Image
            src="https://i.pinimg.com/474x/78/97/9a/78979a40e2264e2260e12a7773b36a3a.jpg"
            alt="Our Team"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <p>
            Мы команда опытных специалистов, создающих удивительные веб-приложения.
            Наша цель - предоставить вам лучший опыт в использовании наших продуктов.
          </p>
          <p>
            Мы стремимся к качеству, инновациям и удовлетворению потребностей наших клиентов.
            Свяжитесь с нами, чтобы узнать больше о нашей команде и проектах, над которыми мы работаем.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;