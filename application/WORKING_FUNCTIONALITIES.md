# E-Commerce Application - Complete Functionality Documentation

## 📋 Overview
This is a **Full-Stack E-commerce Application** built with React.js, featuring a comprehensive product catalog, shopping cart, wishlist, and order placement system.

---

## 🏗️ Tech Stack

### Frontend
- **React.js** (v18.2.0) - UI Library
- **React Router DOM** (v6.18.0) - Client-side routing
- **Tailwind CSS** (v3.3.5) - Utility-first CSS framework
- **Axios** (v1.6.0) - HTTP client for API requests
- **React Toastify** (v9.1.3) - Toast notifications

### Backend
- **JSON Server** (v0.17.4) - Mock REST API
- **Concurrently** (v8.2.2) - Run multiple commands simultaneously

### Development
- **Create React App** (v5.0.1) - Build tooling
- **PostCSS** & **Autoprefixer** - CSS processing

---

## 📂 Project Structure

```
application/
├── public/                 # Static assets
├── src/
│   ├── api/               # API service functions
│   │   ├── auth.js
│   │   ├── cartAPI.js
│   │   ├── getAllCategories.js
│   │   └── getAllProducts.js
│   ├── components/        # Reusable components
│   │   ├── AddressForm/
│   │   ├── HorizontalProductCard/
│   │   ├── Login/
│   │   ├── Navbar/
│   │   ├── PriceDetails/
│   │   ├── ProductCard/
│   │   ├── Register/
│   │   └── reducers/      # State management reducers
│   ├── context/           # React Context providers
│   │   ├── cart-context.js
│   │   └── wishlist-context.js
│   ├── pages/             # Page components
│   │   ├── AuthLogin/
│   │   ├── AuthRegister/
│   │   ├── Cart/
│   │   ├── Home/
│   │   └── Wishlist/
│   ├── utils/             # Helper functions
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
└── db.json                # JSON Server database
```

---

## ✅ Working Features & Functionalities

### 1. **Home Page** (`/home`)
**Purpose**: Browse and filter products

**Features**:
- ✅ Display all products from the database
- ✅ Category filtering (Electronics, Fashion, Home & Living, Beauty, Sports)
- ✅ "All" category to view all products
- ✅ Product cards with:
  - Product image
  - Title
  - Price (formatted in Indian Rupees)
  - Original price (strikethrough)
  - Discount badge
  - Rating display
  - Add to Cart button
  - Wishlist (heart) button
- ✅ Dynamic button states ("Add to Cart" → "Go to Cart")
- ✅ Wishlist toggle (filled/outlined heart icon)

**Tech Used**: 
- API: `getAllProducts()`, `getAllCategories()`
- State: `useState` for products/categories
- Context: `useCart()`, `useWishlist()`

---

### 2. **Shopping Cart** (`/cart`)
**Purpose**: Manage items before checkout

**Features**:
- ✅ View all items in cart
- ✅ Display cart items with:
  - Product image, title, price
  - Quantity controls (increase/decrease)
  - Remove item button
- ✅ Address form with fields:
  - Name
  - Mobile number
  - Street address
  - City
  - ZIP code
  - State
- ✅ Price details sidebar showing:
  - Subtotal
  - Delivery charges (₹49)
  - Total amount
- ✅ "Place Order" button
- ✅ Empty cart state with link to home

**Tech Used**:
- Context: `useCart()` for cart state
- Reducer: `cartReducer` for ADD/REMOVE/INCREASE/DECREASE/CLEAR actions
- Local state: Address form data

---

### 3. **Wishlist** (`/wishlist`)
**Purpose**: Save products for later

**Features**:
- ✅ View all wishlisted items
- ✅ Display items in horizontal card format
- ✅ "Move to Cart" button for each item
- ✅ Remove from wishlist functionality
- ✅ Empty wishlist state

**Tech Used**:
- Context: `useWishlist()` for wishlist state
- Reducer: `wishlistReducer` for ADD/REMOVE actions

---

### 4. **Authentication Pages**
**Pages**: `/auth/login`, `/auth/register`

**Features**:
- ✅ Login page with username/password
- ✅ Registration page for new users
- ✅ Authentication API integration

**Tech Used**:
- API: `auth.js` service functions
- Local storage for user session (likely)

---

### 5. **Navigation Bar**
**Purpose**: Site-wide navigation

**Features**:
- ✅ "SHOP.IT" branding
- ✅ Links to Home, Cart, Wishlist
- ✅ Cart badge showing item count
- ✅ Responsive design with Tailwind

---

### 6. **Product Card Component**
**Reusable component for displaying products**

**Features**:
- ✅ Image display with fallback
- ✅ Wishlist button (top-right corner)
- ✅ Price formatting with rupee symbol
- ✅ Discount percentage badge
- ✅ Context-aware buttons (changes based on cart state)
- ✅ Click handlers for cart and wishlist actions

---

### 7. **State Management**

#### Cart Reducer Actions:
| Action | Description |
|--------|-------------|
| `ADD_TO_CART` | Add product to cart or increase quantity if exists |
| `REMOVE_FROM_CART` | Remove product from cart completely |
| `INCREASE_QUANTITY` | Increment product quantity by 1 |
| `DECREASE_QUANTITY` | Decrement quantity (removes if quantity reaches 0) |
| `CLEAR_CART` | Empty the entire cart |

#### Wishlist Reducer Actions:
| Action | Description |
|--------|-------------|
| `ADD_TO_WISHLIST` | Add product to wishlist |
| `REMOVE_FROM_WISHLIST` | Remove product from wishlist |

---

### 8. **Order Placement System**
**Location**: `PriceDetails` component

**Features**:
- ✅ Address validation before checkout
- ✅ Integration with Razorpay payment gateway
- ✅ Order creation after successful payment:
  - Saves order to `db.json` via POST to `/orders`
  - Includes: items, amount, address, paymentId, timestamp
- ✅ Clear cart after successful order
- ✅ Success notification with payment ID
- ✅ Redirect to home page after order

**Payment Flow**:
1. User clicks "PLACE ORDER"
2. System validates address fields
3. Loads Razorpay SDK dynamically
4. Opens Razorpay payment modal
5. On successful payment:
   - POST order data to JSON Server
   - Clear cart via `CLEAR_CART` action
   - Show success alert
   - Navigate to home page

---

### 9. **Database** (`db.json`)

**Collections**:

| Collection | Count | Description |
|------------|-------|-------------|
| `products` | 60+ | Product catalog with full details |
| `categories` | 5 | Product categories |
| `users` | 1 | Demo user (expandable) |
| `carts` | 0 | User cart data |
| `wishlists` | 0 | User wishlist data |
| `resumes` | 0 | (Unused - legacy) |
| `orders` | 0 | Completed orders |

**Product Schema**:
```json
{
  "id": 101,
  "title": "MacBook Pro 16-inch",
  "price": 199900,
  "originalPrice": 229900,
  "discount": "13% OFF",
  "description": "Product description...",
  "category": "Electronics",
  "image": "https://...",
  "rating": {
    "rate": 4.9,
    "count": 120
  }
}
```

---

## 🔄 CRUD Operations Status

| Operation | Status | Implementation |
|-----------|--------|----------------|
| **Create** | ✅ | Create orders (POST to `/orders`) |
| **Read** | ✅ | Read products, categories, cart, wishlist |
| **Update** | ✅ | Update cart quantities (INCREASE/DECREASE) |
| **Delete** | ✅ | Remove from cart, Remove from wishlist |

---

## 🚀 Running the Application

### Start Development Server:
```bash
npm run dev
```

This runs:
- **React App**: http://localhost:3000
- **JSON Server API**: http://localhost:3003

### Individual Commands:
```bash
npm start       # React app only
npm run server  # JSON Server only
npm run build   # Production build
```

---

## 🎨 Styling

**Approach**: Tailwind CSS utility classes
**Custom CSS**: `ProductCard.css` for specific component styling
**Theme**: 
- Primary color: Green (#0f9d58, #10b981)
- Font: System default (Safari/Chrome fonts)
- Responsive: Mobile-first approach

---

## 🔌 API Endpoints (JSON Server)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/products` | GET | Get all products |
| `/products/:id` | GET | Get single product |
| `/products?category=` | GET | Filter by category |
| `/categories` | GET | Get all categories |
| `/carts` | GET, POST, PUT | Manage carts |
| `/wishlists` | GET, POST, PUT | Manage wishlists |
| `/orders` | POST | Create new order |
| `/users` | GET, POST | User management |

---

## 🎯 Key Features Summary

✅ **Product Browsing** - View 60+ products across 5 categories  
✅ **Category Filtering** - Filter products by category  
✅ **Shopping Cart** - Add, remove, update quantities  
✅ **Wishlist** - Save items for later  
✅ **Address Form** - Delivery information collection  
✅ **Order Placement** - Razorpay payment integration  
✅ **Order Persistence** - Save orders to database  
✅ **Responsive Design** - Works on all device sizes  
✅ **Toast Notifications** - User feedback for actions  
✅ **Dynamic UI** - Context-aware button states  
✅ **Price Formatting** - Indian Rupee formatting  

---

## 🔮 Potential Enhancements

- [ ] User authentication (login/register fully functional)
- [ ] Product search functionality
- [ ] Product detail page
- [ ] Order history page
- [ ] Product reviews and ratings
- [ ] Sorting (price, rating, popularity)
- [ ] Pagination for products
- [ ] Stock management
- [ ] Multiple payment methods
- [ ] Email order confirmation

---

**Last Updated**: December 3, 2025  
**Status**: Fully Functional ✅
