
import React, {useRef} from 'react'

import { useInView } from 'framer-motion';
import React, { useState } from 'react';

import { FaShoppingCart } from "react-icons/fa";
import contactImg from '../../assets/contact-img.jpg';
import content1 from '../../assets/content-img1.jpg';
import content2 from '../../assets/content-img2.jpg';
import content3 from '../../assets/content-img3.jpg';
import content4 from '../../assets/content-img4.jpg';
import imgIphone from '../../assets/img-iphone.jpg';
import CartModal from '../../component/CartModal/CartModal';
import { useCart } from '../../context/CartContext';
import Card, { CardGroup, Scroll } from '../component';
import './Home.css';

// Component con để áp dụng hiệu ứng xuất hiện khi scroll
const AnimateOnScroll = ({ children, delay = 0 }) => {

  const ref = useRef(null);
  //Hiệu ứng chỉ chạy 1 lần và khi scroll đc 30% phần tử sẽ có animation
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'animate-visible' : ''}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(50px)',
        transition: `opacity 0.5s ease-in-out ${delay}s, transform 0.5s ease-in-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

function Home() {
  const [showCartModal, setShowCartModal] = useState(false);
  const { cartItems } = useCart();

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  //Content 
  const contents = [
    { id: 1, img: content1, title: 'Vô vàng lựa chọn', text: 'Tìm kiếm niềm vui với gần nửa triệu điểm tham quan, phòng khách sạn và nhiều trải nghiệm thú vị' },
    { id: 2, img: content2, title: 'Chơi vui, giá tốt', text: 'Trải nghiệm chất lượng với giá tốt. Tích luỹ Klook xu để được thêm ưu đãi' },
    { id: 3, img: content3, title: 'Dễ dàng và tiện lợi', text: 'Đặt vé xác nhận ngay, miễn xếp hàng, miễn phí hủy, tiện lợi cho bạn tha hồ khám phá' },
    { id: 4, img: content4, title: 'Đáng tin cậy', text: 'Tham khảo đánh giá chân thực. Dịch vụ hỗ trợ tận tình, đồng hành cùng bạn mọi lúc, mọi nơi' },
  ]
  return (
    <div>
      <Scroll />
      <div className="floating-cart-button" onClick={handleCartClick}>
        <FaShoppingCart className="cart-icon" />
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </div>
      <AnimateOnScroll>
        <div className='content-container'>
          <h3>Vì sao bạn nên chọn Travel</h3>
          <div className='content-section'>
            {contents.map((content, index) => (
              <AnimateOnScroll key={content.id} delay={index * 0.1}>
                <div className='content-item'>
                  <img src={content.img} alt={content.title} />
                  <h4>{content.title}</h4>
                  <p>{content.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.4}>
        <Card />
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.6}>
        <CardGroup />
      </AnimateOnScroll>
      
      <AnimateOnScroll delay={0.8}>
        <div className='contact-container'>
          <h3>Khám phá thêm</h3>
          <div className='contact-img'>
            <img src={contactImg} alt="" className='img1' />
            <img src={imgIphone} alt="" className='img2' />
            <h4 className='title-img'>Ứng dụng du lịch từ A-Z</h4>
            <p className='text-img'>Ưu đãi hot khi đặt tour, vé tham quan, khách sạn, vé di chuyển khắp thế giới qua app Klook!</p>
            <div className='group-input'>
              <p className='fw-bold'>Nhận & gửi magic link đến email của bạn</p>
              <div className='d-flex'>
                <input type="email" placeholder='Email' className='form-control' />
                <button className='btn btn-light mx-2'>Gửi</button>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <CartModal show={showCartModal} handleClose={handleCloseCartModal} />
    </div>
  )
}
export default Home