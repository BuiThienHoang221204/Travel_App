import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import './CartModal.css';

const CartModal = ({ show, handleClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Giỏ hàng của bạn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Giỏ hàng của bạn đang trống</p>
            <p>Hãy thêm các tour du lịch vào giỏ hàng để đặt</p>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.img || item.background} alt={item.text || item.title} />
                </div>
                <div className="cart-item-details">
                  <h5>{item.text || item.title}</h5>
                  {item.title && <p className="cart-item-title">{item.title}</p>}
                  <p className="cart-item-price">Giá: {item.price}</p>
                </div>
                <Button 
                  variant="danger" 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Xóa
                </Button>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        {cartItems.length > 0 && (
          <>
            <Button variant="danger" onClick={clearCart}>
              Xóa tất cả
            </Button>
            <Button variant="primary">
              Thanh toán
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal; 