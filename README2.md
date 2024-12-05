# Fromagerie Alioui Backend Documentation

## Overview
This is the backend for the Fromagerie Alioui application, built with Node.js and Express. It handles various functionalities related to user management, product handling, order processing, and more.

## Setup and Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   DB_CONNECTION_STRING=mongodb://localhost:27017/fromagerie
   JWT_SECRET=your_jwt_secret_key
   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. **Run the application:**
   ```bash
   npm start
   ```

## Environment Configuration
- The application uses a `.env` file for environment variables. Ensure this file is configured correctly with necessary variables like database connection strings, JWT secret, and social media API keys.

## Database Configuration
- The application uses MongoDB. Ensure MongoDB is installed and running on your system.
- Update the `DB_CONNECTION_STRING` in the `.env` file with your MongoDB connection string.

## JWT Configuration
- Set the `JWT_SECRET` in the `.env` file. This is used to sign and verify JWT tokens.

## Social Media Authentication
- For Facebook authentication:
  - Create a Facebook Developer account and set up a new app.
  - Add the `FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET` to the `.env` file.
- For Google authentication:
  - Set up a project in the Google Developers Console.
  - Enable the Google+ API.
  - Create OAuth 2.0 credentials and add the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to the `.env` file.

## Project Structure
- **`controllers/`**: Contains the logic for handling requests and responses.
- **`models/`**: Defines the data structure and schemas using Mongoose.
- **`routes/`**: Manages the endpoints and maps them to controller functions.
- **`middleware/`**: Custom middleware functions for request processing.
- **`utils/`**: Utility functions and helpers.
- **`config/`**: Configuration files for database, JWT, and social media authentication.

## API Endpoints

### User Endpoints
- **POST /register**: Register a new user.
  - **Body Parameters**: `username`, `email`, `password`, `phoneNumber`
- **POST /login**: Login an existing user.
  - **Body Parameters**: `email`, `password`
- **POST /forgot-password**: Initiate password reset process.
- **POST /reset-password**: Reset user password.
- **GET /users**: Get all users (Admin only).
- **PUT /users/:id/role**: Update user role (Admin only).
- **DELETE /users/:id**: Delete a user (Admin only).

### Admin Endpoints
- **GET /users**: Get all users (Admin only).
- **PUT /users/:id/role**: Update user role (Admin only).
- **DELETE /users/:id**: Delete a user (Admin only).
- **GET /sales/total**: Get total sales (Admin only).
- **GET /sales/revenue-trends**: Get revenue trends (Admin only).
- **GET /sales/top-products**: Get top-selling products (Admin only).

### Blog Endpoints
- **POST /create**: Create a new blog post.
- **PUT /edit/:id**: Edit a blog post.
- **GET /:id**: Get a blog post by ID.
- **DELETE /:id**: Delete a blog post.

### Cart Endpoints
- **GET /**: Get cart details.
- **POST /add**: Add item to cart.
- **POST /remove**: Remove item from cart.
- **PUT /:id**: Update cart item quantity.
- **DELETE /:id**: Delete cart item.

### Authentication Endpoints
- **GET /auth/facebook**: Facebook authentication.
- **GET /auth/google**: Google authentication.
- **POST /logout**: Logout user.

### Product Endpoints
- **POST /create**: Create a new product.
- **PUT /edit/:id**: Edit a product.
- **GET /:id**: Get a product by ID.
- **DELETE /:id**: Delete a product.
- **GET /all**: Get all products.

### Order Endpoints
- **POST /create**: Create a new order.
- **PUT /edit/:id**: Edit an order.
- **GET /:id**: Get an order by ID.
- **DELETE /:id**: Delete an order.
- **GET /all**: Get all orders.

## Models
- **User**: Schema for user data.
  - Fields: `username`, `email`, `password`, `role`, `socialId`, `provider`, `resetPasswordToken`, `resetPasswordExpires`
- **Product**: Schema for product data.
  - Fields: `name`, `description`, `price`, `quantity`
- **Order**: Schema for order data.
  - Fields: `userId`, `products`, `total`, `status`

## Additional Information
- **Analytics**: Provides insights on sales, revenue trends, and top-selling products.
- **Order Management**: Includes functionalities for creating, retrieving, and updating orders.
- **Security Considerations**: Passwords are hashed using bcryptjs to ensure security.

## Scripts
- **Start**: `npm start` - Runs the application.
- **Test**: `npm test` - Runs the test suite.

## Contact
For further information or queries, contact the development team at [contact@example.com](mailto:contact@example.com).
