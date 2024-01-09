import React, { useState } from 'react';
import { Container, Form, Alert } from 'react-bootstrap';
import Button from '../button';
import "./form.css";

const ReviewForm = ({ onReviewSubmit }) => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the name is provided; if not, use 'Anonymous'
    const author = name.trim() !== '' ? name : 'Anonymous';

    onReviewSubmit({ content: review, author });

    setReview('');
    setName('');

    // Show the alert after submission
    setShowAlert(true);
  };

  return (
    <Container>
      <h2 className="reviews-header">Оставить отзыв</h2>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Успех!</Alert.Heading>
          <p>Ваш отзыв был успешно отправлен.</p>
        </Alert>
      )}

      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nameInput">
          <Form.Label>Ваше имя:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="reviewForm">
          <Form.Label>Оставьте свой отзыв:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>

        <Button customClass="review-button" label="Отправить отзыв" onClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default ReviewForm;
