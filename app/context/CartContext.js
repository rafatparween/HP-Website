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
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // popup toggle

  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return removeFromCart(id);
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const getTotalItems = () => cart.reduce((sum, i) => sum + i.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
