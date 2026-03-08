import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

// Variable for the first name - change this to your name to see the difference!
const firstName = "John"; // Try changing this to your name or leave empty

function App() {
  return (
    <Container className="app-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {/* Main product card using react-bootstrap */}
          <Card className="product-card shadow-lg">
            <Card.Body>
              {/* Image component at the top of the card */}
              <div className="text-center">
                <Image />
              </div>
              
              {/* Product details section */}
              <div className="product-details mt-4">
                <Name />
                <Price />
                <Description />
              </div>
              
              {/* Optional badge for premium product */}
              <div className="premium-badge">
                <span className="badge">Premium Quality</span>
              </div>
            </Card.Body>
          </Card>

          {/* Greeting message section */}
          <div className="greeting-section mt-4 text-center">
            {/* Conditional greeting based on firstName */}
            <h3 className="greeting-message">
              Hello, {firstName ? firstName : "there"}!
            </h3>
            
            {/* Conditional image display */}
            {firstName && (
              <div className="greeting-image-container mt-3">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="User avatar"
                  className="greeting-image rounded-circle"
                />
                <p className="mt-2 text-muted">Welcome back, {firstName}!</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;