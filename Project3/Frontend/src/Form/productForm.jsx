import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import {productCreateApi} from "../index";

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      price: parseFloat(price),
      image,
      url,
    };
    productCreateApi(newProduct);
    setName('');
    setPrice('');
    setImage('');
    setUrl('');
  };

  return (
    <Container className="mt-5">
      <Card className="p-3" style={{ maxWidth: '500px', margin: '0 auto', border: '2px solid black' }}>
        <h2 style={{ fontWeight: 'bold',textAlign: 'center' }}>Add New Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProductName" className="mb-3">
            <Form.Label style={{ fontWeight: 'bold' }}>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ border: '2px solid black' }}
            />
          </Form.Group>
          <Form.Group controlId="formProductPrice" className="mb-3">
            <Form.Label style={{ fontWeight: 'bold' }}>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{ border: '2px solid black' }}
            />
          </Form.Group>
          <Form.Group controlId="formProductImage" className="mb-3">
            <Form.Label style={{ fontWeight: 'bold' }}>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              style={{ border: '2px solid black' }}
            />
          </Form.Group>
          <Form.Group controlId="formProductUrl" className="mb-3">
            <Form.Label style={{ fontWeight: 'bold' }}>Product URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              style={{ border: '2px solid black' }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ProductForm;
