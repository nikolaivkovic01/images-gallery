import React from "react";
import { Container, Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="p-5 mb-4 bg-light text-center">
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using Unsplash API.
        In order to start, enter any search term in the input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Container>
  );
};

export default Welcome;
