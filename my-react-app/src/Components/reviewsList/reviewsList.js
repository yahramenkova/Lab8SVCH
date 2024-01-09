import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import './reviewsList.css'; // Create a ReviewsList.css file and import it here

const ReviewsList = ({ reviews }) => {
  return (
    <Container>
      <h2 className="reviews-header">Отзывы</h2>
      <ListGroup className="reviews-list">
        {reviews.map((review, index) => (
          <ListGroup.Item key={index} className="review-item">
            <p className="review-text">
              <strong className="author">{review.author}</strong>: {review.content}
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ReviewsList;
