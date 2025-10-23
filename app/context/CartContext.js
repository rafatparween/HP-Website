// // context/CartContext.js
// "use client";
// import { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   console.log('CartProvider initialized');

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     console.log('Loading cart from localStorage...');
//     try {
//       const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//       console.log('Loaded cart:', savedCart);
//       setCart(savedCart);
//     } catch (error) {
//       console.error('Error loading cart:', error);
//       setCart([]);
//     }
//     setIsLoaded(true);
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     if (isLoaded) {
//       console.log('Saving cart to localStorage:', cart);
//       localStorage.setItem('cart', JSON.stringify(cart));
//     }
//   }, [cart, isLoaded]);

//   const addToCart = (product) => {
//     console.log('🛒 ADDING TO CART:', product.name);
    
//     if (product.stock === 0) return;
    
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === product.id);
      
//       if (existingItem) {
//         const updatedCart = prevCart.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//         console.log('✅ Cart updated (existing item):', updatedCart);
//         return updatedCart;
//       } else {
//         const updatedCart = [...prevCart, { 
//           ...product, 
//           quantity: 1,
//           addedAt: new Date().toISOString()
//         }];
//         console.log('✅ Cart updated (new item):', updatedCart);
//         return updatedCart;
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     console.log('🗑️ REMOVING FROM CART:', productId);
//     setCart(prevCart => {
//       const updatedCart = prevCart.filter(item => item.id !== productId);
//       console.log('✅ Cart after removal:', updatedCart);
//       return updatedCart;
//     });
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     console.log('🔄 UPDATING QUANTITY:', productId, newQuantity);
//     if (newQuantity < 1) {
//       removeFromCart(productId);
//       return;
//     }
    
//     setCart(prevCart => {
//       const updatedCart = prevCart.map(item =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       );
//       console.log('✅ Cart after quantity update:', updatedCart);
//       return updatedCart;
//     });
//   };

//   const getTotalItems = () => {
//     const total = cart.reduce((total, item) => total + item.quantity, 0);
//     console.log('📦 Total items in cart:', total);
//     return total;
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     getTotalItems,
//     clearCart,
//     isLoaded
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }



"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) setCart(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist cart to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart, isLoaded]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1, addedAt: Date.now() }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: newQty } : p)));
  };

  const getTotalItems = () => cart.reduce((s, item) => s + (item.quantity || 0), 0);

  const getTotalPrice = () =>
    cart.reduce((s, item) => s + (item.discountPrice || item.price || 0) * (item.quantity || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoaded,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
