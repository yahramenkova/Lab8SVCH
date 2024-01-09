import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Form from '../Components/form/form';
import ReviewsList from '../Components/reviewsList/reviewsList';

export default function Reviews() {
  // Load reviews from local storage on component mount
  const initialReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const [reviews, setReviews] = useState(initialReviews);

  // Update local storage whenever reviews change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleReviewSubmit = (review) => {
    // Use a callback function to ensure you are working with the latest state
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <div>
      <Header />
      <ReviewsList reviews={reviews} />
      <Form onReviewSubmit={handleReviewSubmit} />
      <Footer />
    </div>
  );
}
