import React, { useState } from 'react';
import { Container, Toast } from 'react-bootstrap';
import './toast.css';

const Promotions = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <Container>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className="promo-toast"
      >
        <Toast.Header>
          <strong className="me-auto">Акция!</strong>
        </Toast.Header>
        <Toast.Body>
          Это акционный товар со скидкой! Не упустите шанс сэкономить.
        </Toast.Body>
      </Toast>

      {/* Add more Toast components for other promotions as needed */}
    </Container>
  );
};

export default Promotions;
