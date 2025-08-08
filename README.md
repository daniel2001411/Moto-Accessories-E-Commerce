# MotoGear Store - React E-Commerce Application

## Project Overview
MotoGear Store is a modern, responsive React-based e-commerce application focused on motorcycle riding gear and accessories. It offers a complete shopping experience with product browsing, real-time search and filtering, cart management with quantity controls, payment simulation, and order tracking via local storage.

The app is designed to provide motorcycle enthusiasts with an intuitive platform to find, purchase, and track their favorite riding gear all in one place.

---

## Features

### User Experience
- **Product Browsing**: Responsive grid layout displaying 11 categories of motorcycle gear including jackets, helmets, boots, gloves, and accessories.
- **Real-Time Search & Filtering**: Instantly filter products by name and category.
- **Shopping Cart Management**: Add/remove items with quantity increments/decrements.
- **Simulated Payment**: Pay for items in the cart and save order history.
- **Order History Tracking**: View past orders with date and detailed product information.
- **Dynamic Cart Counter**: Shows number of items in the cart in header navigation.
- **Error Handling**: Graceful fallback for invalid product pages and empty states.
- **Responsive Design**: Mobile-first approach with CSS media queries ensuring compatibility across devices.

---

## Technologies Used
- **React 18** - Frontend UI Framework with hooks
- **Vite** - Modern build tool and development server
- **React Router DOM** - Client-side routing for single page application (SPA)
- **CSS3** - Scoped styling with modular CSS files
- **Local Storage** - Persistent data storage for cart and order history
- **JSON** - Static product data storage

---

## Project Structure


motorcycle-ecommerce/
├── src/
│ ├── Components/
│ ├── App.jsx
│ ├── Header.jsx
│ ├── Home.jsx
│ ├── Product.jsx
│ ├── ProductDetails.jsx
│ ├── Cart.jsx
│ └── OrderHistory.jsx
│ ├── Styles/
│ ├── App.css
│ ├── Header.css
│ ├── Home.css
│ ├── Product.css
│ ├── ProductDetails.css
│ ├── Cart.css
│ ├── OrderHistory.css
│ └── index.css
│ ├── Assets/
│ └── products.json
│ └── main.jsx
├── public/
│ └── index.html
└── package.json

---

## Component Overview

- **App.jsx**  
  Main application wrapper managing the global cart state and routing.

- **Header.jsx**  
  Navigation bar with links to Home, Orders, and Cart with dynamic cart item count.

- **Home.jsx**  
  Product listing page with search and category filter capabilities.

- **Product.jsx**  
  Individual product card showing image, details, and add/remove cart functionality.

- **ProductDetails.jsx**  
  Detailed view for a single product accessible via URL parameter.

- **Cart.jsx**  
  Shopping cart manages item quantities, displays total cost, and processes payment.

- **OrderHistory.jsx**  
  Displays user's previous orders retrieved from localStorage.

---

## Installation and Setup

1. **Clone the repository:**

git clone <repository-url>
cd motorcycle-ecommerce

2. **Install dependencies:**

npm install

3. **Run development server:**

npm run dev

4. **Build for production:**

npm run build

---

## Usage

- Navigate through the products on the Home page.
- Use the search bar or category dropdown to filter products.
- Click "Add to Cart" to add items.
- Access the Cart page to adjust quantities or remove items.
- Press "Pay Now" to simulate payment and save order history.
- Visit Orders page to view past purchases.

---

## Data Persistence

- **Cart and Orders** are saved in browser's localStorage, enabling persistence across page reloads without a backend.

---

## Future Enhancements
- Integration with a backend service and user authentication.
- Enhanced payment gateway integration.
- User reviews and ratings for products.
- Wishlist feature and advanced filtering.
- Improved accessibility and internationalization.

---

## License

This project is open-sourced and available under the MIT License.

---

## Contact

For any questions or feedback, feel free to open issues or reach out!

---

*Built with ❤️ using React and Vite*

 
