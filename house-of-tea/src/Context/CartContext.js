
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      try {
        return JSON.parse(savedCartItems);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.sizes == product.sizes
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };
  const updateSize = (index, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
        console.log('size',size,item)
          if (item.selectedSize && item.selectedSize.includes(size.size)) {
            return { ...item, selectedSize: item.selectedSize.filter((e) => e !== size.size) };
          } else {
            return { ...item, selectedSize: [...item.selectedSize, size.size] };
          }
        }
        return item;
      })
    );
  };
  
  const getCartItems = () => cartItems;

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartItems,
        getTotalItems,
        clearCart,
        updateSize
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
