import axios from "axios";
const API_URL = 'http://localhost:3003';

// Cart Operations
export const getCart = async (userId) => {
  try {
    const { data } = await axios.get(`${API_URL}/carts?userId=${userId}`);
    return data[0] || { userId, items: [] };
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const addToCart = async (userId, productId, quantity = 1) => {
  try {
    // First, get the current cart or create a new one
    const cart = await getCart(userId);

    // Check if the product is already in the cart
    const existingItemIndex = cart.items?.findIndex(item => item.productId === productId) || -1;

    if (existingItemIndex >= 0) {
      // Update quantity if product exists
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      if (!cart.items) {
        cart.items = [];
      }
      cart.items.push({ productId, quantity });
    }

    // Save the updated cart
    if (cart.id) {
      const { data } = await axios.put(`${API_URL}/carts/${cart.id}`, cart);
      return data;
    } else {
      const { data } = await axios.post(`${API_URL}/carts`, { ...cart, userId });
      return data;
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const removeFromCart = async (cartId, productId) => {
  try {
    const { data: cart } = await axios.get(`${API_URL}/carts/${cartId}`);
    cart.items = cart.items.filter(item => item.productId !== productId);

    const { data } = await axios.put(`${API_URL}/carts/${cartId}`, cart);
    return data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const updateCartItemQuantity = async (cartId, productId, quantity) => {
  try {
    const { data: cart } = await axios.get(`${API_URL}/carts/${cartId}`);
    const item = cart.items.find(item => item.productId === productId);

    if (item) {
      item.quantity = quantity;
      const { data } = await axios.put(`${API_URL}/carts/${cartId}`, cart);
      return data;
    }

    return cart;
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    throw error;
  }
};

// Wishlist Operations
export const getWishlist = async (userId) => {
  try {
    const { data } = await axios.get(`${API_URL}/wishlists?userId=${userId}`);
    return data[0] || { userId, items: [] };
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    throw error;
  }
};

export const addToWishlist = async (userId, productId) => {
  try {
    const wishlist = await getWishlist(userId);

    if (!wishlist.items) {
      wishlist.items = [];
    }

    if (!wishlist.items.includes(productId)) {
      wishlist.items.push(productId);

      if (wishlist.id) {
        const { data } = await axios.put(`${API_URL}/wishlists/${wishlist.id}`, wishlist);
        return data;
      } else {
        const { data } = await axios.post(`${API_URL}/wishlists`, { ...wishlist, userId });
        return data;
      }
    }

    return wishlist;
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    throw error;
  }
};

export const removeFromWishlist = async (wishlistId, productId) => {
  try {
    const { data: wishlist } = await axios.get(`${API_URL}/wishlists/${wishlistId}`);
    wishlist.items = wishlist.items.filter(id => id !== productId);

    const { data } = await axios.put(`${API_URL}/wishlists/${wishlistId}`, wishlist);
    return data;
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    throw error;
  }
};
