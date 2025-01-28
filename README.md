# **Booken**

## **Live URL**
[Visit the Website](https://final-booken.vercel.app/)

---

## **Project Overview**
Booken is an e-commerce platform designed to provide a seamless shopping experience for users while offering role-based dashboards for administrators and customers. The application includes public and private routes, features advanced search and filtering functionalities, and integrates a secure payment gateway.

---

## **Features**

### **Public Routes**
- **Home Page**:
  - Navbar with logo, navigation items, and login/signup buttons.
  - Hero banner to highlight platform features or special offers.
  - Featured Products section displaying up to 6 products with a "View All" button linking to the All Products Page.
  - Relevant sections like testimonials or blogs.
  - Footer with essential links, social media icons, and contact details.

- **All Products Page**:
  - **Search Functionality**: Search by title, author, or category.
  - **Filters**: Filter products by price range, category, and availability.
  - **Dynamic Results**: Instant updates based on search terms and filters.
  - **Product Cards**: Display product name, price, category, and a "View Details" button.

  
- **Product Details Page**:
  - Detailed product information with image.
  - "Add to Cart" button for seamless shopping.

- **About Page**:
  - Informative content about the shop and its mission.

### **Private Routes**
- **Cart Page**:
  - Place orders with product details, user details, and total price calculations.
  - Validate ordered quantity against product stock.
  - "Order Now" button for purchase confirmation.

- **Payment Integration**:
  - Integrated with SSL Commerz payment gateway.

- **Dashboard (Role-Based Access)**:
  - **Admin Dashboard**:
    - Manage users (e.g., deactivate accounts).
    - CRUD operations for products and orders.
    - Approve orders by changing status from "Pending" to "Shipping."
  - **User Dashboard**:
    - View order history.
    - Manage profile settings, such as default shipping address.

---

## **Technologies Used**
- **Frontend**:
  - HTML, CSS, TypeScript
  - React.js with Redux Toolkit
  - AOS for animations
- **Backend**:
  - Node.js, Express.js
  - MongoDB with Mongoose
- **Authentication**:
  - JWT (JSON Web Tokens)
  - Firebase (for optional auth handling)
- **Payment Gateway**:
  - SSL Commerz

---

## **Setup Instructions**

### **Prerequisites**
- Node.js installed on your system.
- MongoDB installed and running.

### **Steps to Run Locally**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-folder>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     SSL_COMMERZ_STORE_ID=<your-ssl-commerz-store-id>
     SSL_COMMERZ_STORE_PASSWORD=<your-ssl-commerz-store-password>
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the application at `http://localhost:5173/`.

---

## **Folder Structure**
```
├── src
│   ├── components
│   ├── pages
│   ├── redux
│   ├── utils
│   ├── App.tsx
│   └── types
├── public
├── server
│   ├── models
│   ├── controllers
│   ├── routes
│   └── server.ts
└── package.json
```

---

## **Future Enhancements**
- Implement product reviews and ratings.
- Add a wishlist feature.
- Enable real-time order tracking.

---

## **Contributors**
- [Kazi Fahim](#)  

---

## **License**
This project is licensed under the [MIT License](LICENSE).
