import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // Lấy dữ liệu giỏ hàng từ localStorage khi component được mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Lưu giỏ hàng vào localStorage khi có thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Thêm tour vào giỏ hàng
  const addToCart = (tour) => {
    // Kiểm tra xem tour đã có trong giỏ hàng chưa
    const existingTour = cartItems.find(item => item.id === tour.id);
    
    if (existingTour) {
      // Nếu đã có, không thêm nữa
      return;
    } else {
      // Nếu chưa có, thêm vào giỏ hàng
      setCartItems([...cartItems, tour]);
    }
  };

  // Xóa tour khỏi giỏ hàng
  const removeFromCart = (tourId) => {
    setCartItems(cartItems.filter(item => item.id !== tourId));
  };

  // Xóa tất cả tour khỏi giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; 