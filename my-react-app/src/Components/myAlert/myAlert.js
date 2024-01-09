import React from 'react';
import { Alert } from 'react-bootstrap';

const MyAlert = ({ variant, heading, message }) => {
  return (
    <Alert variant={variant}>
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      <p>{message}</p>
    </Alert>
  );
};

export default MyAlert;
