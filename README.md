# Fromagerie Alioui Backend Documentation

## Overview
This document outlines the backend architecture for Fromagerie Alioui, a Node.js and Express-based application. It covers user management, product handling, order processing, and various other functionalities.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/fromagerie-alioui/backend.git
   ```
2. Install dependencies:
   ```bash
   cd backend && npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/fromagerie_alioui
   JWT_SECRET=your_jwt_secret_here
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Project Structure
- `controllers/`: Request handlers
- `models/`: Database schemas
- `routes/`: API route definitions
- `middleware/`: Custom Express middleware
- `utils/`: Helper functions and utilities
- `config/`: Configuration files

## API Endpoints

### Authentication
- **POST** `/register`: Register a new user
- **POST** `/login`: User login
- **POST** `/forgot-password`: Initiate password reset
- **POST** `/api/auth/reset-password`: Complete password reset

### Users
- **GET** `/api/users`: List all users (Admin only)
- **PUT** `/api/users/:id/role`: Update user role (Admin only)
- **DELETE** `/api/users/:id`: Delete a user (Admin only)

### Products
- **GET** `/api/products`: Retrieve all products
- **GET** `/api/products/:id`: Get a specific product
- **POST** `/api/products`: Create a new product
- **PUT** `/api/products/:id`: Update a product
- **DELETE** `/api/products/:id`: Delete a product

### Orders
- **POST** `/api/orders`: Create a new order
- **GET** `/api/orders/:id`: Get a specific order
- **PUT** `/api/orders/:id/status`: Update order status

### Profile
- **GET** `/api/profile`: Retrieve user profile
- **PUT** `/api/profile`: Update user profile

### Cart
- **GET** `/api/cart`: Retrieve user's cart
- **POST** `/api/cart/add`: Add item to cart
- **DELETE** `/api/cart/remove`: Remove item from cart

### Reviews
- **POST** `/api/reviews`: Submit a review
- **PUT** `/api/reviews/:id/approve`: Approve a review
- **GET** `/api/reviews/product/:productId`: Get reviews for a product

### Recipes
- **POST** `/api/recipes`: Create a new recipe
- **PUT** `/api/recipes/:id`: Edit a recipe

### Blogs
- **POST** `/api/blogs`: Create a new blog post
- **PUT** `/api/blogs/:id`: Edit a blog post

### Admin
- **GET** `/api/admin/users`: Get all users (Admin only)
- **PUT** `/api/admin/users/:id/role`: Update user role (Admin only)
- **DELETE** `/api/admin/users/:id`: Delete a user (Admin only)

### Analytics
- **GET** `/api/analytics/sales/total`: Get total sales
- **GET** `/api/analytics/sales/revenue-trends`: Get revenue trends
- **GET** `/api/analytics/products/top-selling`: Get top-selling products

### Coupons
- **POST** `/api/coupons`: Create a new coupon
- **PUT** `/api/coupons/:id`: Edit a coupon
- **DELETE** `/api/coupons/:id`: Delete a coupon

## Data Models

### User
- `username`: String
- `email`: String (unique)
- `password`: String (hashed)
- `role`: String (enum: ['customer', 'admin'])

### Product
- `name`: String
- `description`: String
- `price`: Number
- `stock`: Number
- `category`: String

### Order
- `user`: Reference to User
- `items`: Array of { product: Reference to Product, quantity: Number }
- `totalAmount`: Number
- `status`: String (enum: ['pending', 'processing', 'shipped', 'delivered'])

## Security
- Password hashing using bcrypt
- JWT for authentication
- CORS enabled
- Rate limiting on sensitive routes

## Testing
Run the test suite:
```bash
npm test
```

## Testing with Postman

### Example Requests

#### Register a User
- **Method**: POST
- **URL**: `http://localhost:3000/api/auth/register`
- **Body**:
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123",
    "phoneNumber": "1234567890"
  }
  ```

#### Login a User
- **Method**: POST
- **URL**: `http://localhost:3000/api/auth/login`
- **Body**:
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```

#### Get All Users (Admin)
- **Method**: GET
- **URL**: `http://localhost:3000/api/admin/users`

#### Add Item to Cart
- **Method**: POST
- **URL**: `http://localhost:3000/api/cart/add`
- **Body**:
  ```json
  {
    "productId": "12345",
    "quantity": 2
  }
  ```

#### Create a New Product
- **Method**: POST
- **URL**: `http://localhost:3000/api/products`
- **Body**:
  ```json
  {
    "name": "Test Product",
    "description": "This is a test product",
    "price": 10.99,
    "stock": 100
  }
  ```

#### Create a New Order
- **Method**: POST
- **URL**: `http://localhost:3000/api/orders`
- **Body**:
  ```json
  {
    "userId": "12345",
    "items": [
      {
        "productId": "12345",
        "quantity": 2
      }
    ],
    "totalAmount": 21.98,
    "status": "pending"
  }
  ```

## Deployment
Instructions for deploying to a production environment:
1. Set up a MongoDB Atlas cluster
2. Configure environment variables for production
3. Deploy to a Node.js hosting service (e.g., Heroku, DigitalOcean)

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
