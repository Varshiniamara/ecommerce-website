# E-Commerce Application with Full CRUD Operations

A modern, full-stack e-commerce application built with React.js, featuring complete CRUD operations, JSON-Server backend, and beautiful UI with Tailwind CSS.

## 🎯 Project Overview

This application demonstrates a complete e-commerce platform with:
- **Full CRUD Operations** (Create, Read, Update, Delete)
- **React Router DOM** for seamless navigation
- **JSON-Server** as a REST API backend
- **Tailwind CSS** for responsive, modern styling
- **Axios** for API communication
- **React Toastify** for user notifications
- **React Icons** for beautiful iconography

## ✨ Features

### Core Functionality
- 🛍️ **Product Management**: Browse and view products
- 🛒 **Shopping Cart**: Add, update, and remove items
- ❤️ **Wishlist**: Save favorite products
- 👤 **User Authentication**: Login and registration
- 📝 **Resume/Data Management**: Full CRUD operations for user data

### Technical Features
- ✅ **Full CRUD Operations** on multiple entities (products, carts, wishlists, resumes, users)
- ✅ **RESTful API** integration with JSON-Server
- ✅ **Client-side routing** with React Router DOM
- ✅ **Responsive design** with Tailwind CSS
- ✅ **State management** with React Context API
- ✅ **Toast notifications** for user feedback

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

### Required Software
1. **Node.js** (v14 or higher)
   - Download: https://nodejs.org/en/download/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (for version control)
   - Download: https://git-scm.com/downloads
   - Verify installation: `git --version`

### Recommended Tools
- **Visual Studio Code**: https://code.visualstudio.com/download
- **Sublime Text**: https://www.sublimetext.com/download
- **WebStorm**: https://www.jetbrains.com/webstorm/download

## 🚀 Getting Started

### Installation

1. **Clone the repository** (if using Git):
   ```bash
   git clone <repository-url>
   cd Ecommerce-Application/application
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

You have two options to run the application:

#### Option 1: Run Everything Together (Recommended)
```bash
npm run dev
```
This command will start:
- React development server on `http://localhost:3000`
- JSON-Server backend on `http://localhost:3003`

#### Option 2: Run Separately

**Terminal 1 - Start the Frontend:**
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Terminal 2 - Start the Backend:**
```bash
npm run server
```
JSON-Server will run on [http://localhost:3003](http://localhost:3003)

## 📁 Project Structure

```
application/
├── public/                 # Static files
├── src/
│   ├── api/               # API integration layer
│   │   ├── auth.js        # Authentication API
│   │   ├── cartAPI.js     # Cart operations
│   │   ├── resumeAPI.js   # Resume CRUD operations
│   │   ├── getAllProducts.js
│   │   └── getAllCategories.js
│   ├── components/        # Reusable React components
│   │   ├── Navbar/
│   │   ├── ProductCard/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── PriceDetails/
│   │   ├── HorizontalProductCard/
│   │   └── reducers/
│   ├── pages/            # Page components
│   │   ├── Home/
│   │   ├── Cart/
│   │   ├── Wishlist/
│   │   ├── AuthLogin/
│   │   └── AuthRegister/
│   ├── context/          # React Context for state management
│   ├── styles/           # Custom CSS styles
│   ├── utils/            # Utility functions
│   ├── App.js            # Main application component
│   ├── index.js          # Application entry point
│   └── index.css         # Global styles with Tailwind
├── db.json               # JSON-Server database
├── package.json          # Dependencies and scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🔄 Application Flow

```mermaid
graph TD
    A[User Visits Website] --> B{Logged In?}
    B -- No --> C[Login / Register Page]
    B -- Yes --> D[Home Page]
    C --> D
    
    D --> E{User Action}
    E -- Browse Products --> D
    E -- Filter Category --> D
    E -- Click Product --> F[Product Details]
    E -- Add to Cart --> G[Update Cart Context]
    E -- Add to Wishlist --> H[Update Wishlist Context]
    
    G --> I[Cart Page]
    H --> J[Wishlist Page]
    
    I --> K{Checkout?}
    K -- Yes --> L[Address Form]
    L --> M[Payment Gateway (Razorpay)]
    M --> N[Order Success]
    N --> O[Update Order History]
    O --> D
```

## 📸 Output Screenshots

*(Add your screenshots here. You can drag and drop images into this folder and reference them)*

### 1. Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page+Screenshot)
*Displays the product grid with category filters and navigation.*

### 2. Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x400?text=Shopping+Cart+Screenshot)
*Shows selected items, quantity controls, and price details.*

### 3. Wishlist
![Wishlist](https://via.placeholder.com/800x400?text=Wishlist+Screenshot)
*User's saved favorite items.*

### 4. Checkout & Payment
![Checkout](https://via.placeholder.com/800x400?text=Checkout+Screenshot)
*Address form and Razorpay payment integration.*

### 5. Mobile Responsiveness
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+View+Screenshot)
*Responsive design on smaller screens.*

## 🔌 API Endpoints

The JSON-Server provides the following REST API endpoints:

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get single product
- `POST /products` - Create product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Categories
- `GET /categories` - Get all categories

### Users
- `GET /users` - Get all users
- `POST /users` - Create user

### Carts
- `GET /carts` - Get all carts
- `POST /carts` - Create cart
- `PUT /carts/:id` - Update cart
- `DELETE /carts/:id` - Delete cart

### Wishlists
- `GET /wishlists` - Get all wishlists
- `POST /wishlists` - Create wishlist
- `PUT /wishlists/:id` - Update wishlist
- `DELETE /wishlists/:id` - Delete wishlist

### Resumes (User Data)
- `GET /resumes` - Get all resumes
- `GET /resumes/:id` - Get single resume
- `POST /resumes` - Create resume
- `PUT /resumes/:id` - Update resume
- `DELETE /resumes/:id` - Delete resume

## 🛠️ Technologies Used

### Frontend
- **React.js** (v18.3.1) - UI library
- **React Router DOM** (v6.30.2) - Routing
- **Tailwind CSS** (v3.4.15) - Styling
- **Axios** (v1.13.2) - HTTP client
- **React Icons** (v5.5.0) - Icon library
- **React Toastify** (v11.0.5) - Notifications

### Backend
- **JSON-Server** - Mock REST API

### Development Tools
- **React Scripts** (v5.0.1) - Build tools
- **Concurrently** (v9.2.1) - Run multiple commands
- **PostCSS** & **Autoprefixer** - CSS processing

### Testing
- **@testing-library/react** - Component testing
- **@testing-library/jest-dom** - Jest matchers
- **@testing-library/user-event** - User interaction testing

## 📝 Available Scripts

### Development
- `npm start` - Runs the React app in development mode
- `npm run server` - Starts JSON-Server backend
- `npm run dev` - Runs both frontend and backend concurrently

### Production
- `npm run build` - Builds the app for production
  - Creates optimized bundle in `build/` folder
  - Minified and ready for deployment

### Testing
- `npm test` - Launches the test runner in interactive watch mode

### Advanced
- `npm run eject` - Ejects from Create React App (irreversible!)

## 🎨 Tailwind CSS Configuration

Tailwind CSS is configured to scan all JSX/JS files:
```javascript
content: ["./src/**/*.{js,jsx,ts,tsx}"]
```

To use Tailwind:
- All Tailwind directives are imported in `src/index.css`
- Use utility classes directly in your components
- Customize theme in `tailwind.config.js`

## 🔒 CRUD Operations Example

### Creating a Resume (Example)
```javascript
import { createResume } from './api/resumeAPI';

const newResume = {
  name: "John Doe",
  email: "john@example.com",
  experience: "5 years in software development"
};

const savedResume = await createResume(newResume);
```

### Reading All Resumes
```javascript
import { getAllResumes } from './api/resumeAPI';

const resumes = await getAllResumes();
```

### Updating a Resume
```javascript
import { updateResume } from './api/resumeAPI';

const updatedData = { name: "Jane Doe" };
const updated = await updateResume(1, updatedData);
```

### Deleting a Resume
```javascript
import { deleteResume } from './api/resumeAPI';

await deleteResume(1);
```

## 🌐 Browser Support

The application supports:
- Production: >0.2%, not dead, not op_mini all
- Development: Latest Chrome, Firefox, and Safari

## 📚 Learn More

### React Documentation
- [React Documentation](https://reactjs.org/)
- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)

### Additional Resources
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [JSON Server](https://github.com/typicode/json-server)

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 or 3003 is in use:
```bash
# Find and kill the process using the port
lsof -ti:3000 | xargs kill -9
lsof -ti:3003 | xargs kill -9
```

### JSON-Server Not Starting
Ensure `db.json` exists in the project root and is valid JSON.

### Tailwind Styles Not Working
1. Ensure `index.css` imports Tailwind directives
2. Check `tailwind.config.js` content paths
3. Restart the development server

## ✅ Minimum Requirements Checklist

- ✅ **Tailwind CSS** - Clean and responsive UI
- ✅ **Axios** - API requests to JSON-Server
- ✅ **React Router DOM** - Multi-page navigation
- ✅ **JSON-Server** - Backend data management
- ✅ **Full CRUD** - Create, Read, Update, Delete operations
- ✅ **NPM Libraries** - React Icons, React Toastify included
- ✅ **Additional Features** - Context API for state management

## 👨‍💻 Development Workflow

1. Start development servers: `npm run dev`
2. Make changes to React components in `src/`
3. Changes auto-reload in browser
4. API changes persist in `db.json`
5. Build for production: `npm run build`

## 📄 License

This project is created for educational purposes.

---

**Happy Coding! 🚀**
