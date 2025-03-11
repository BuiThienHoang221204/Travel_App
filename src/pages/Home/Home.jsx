// import React, { useState, useEffect } from 'react'

import content1 from '../../assets/content-img1.jpg';
import content2 from '../../assets/content-img2.jpg';
import content3 from '../../assets/content-img3.jpg';
import content4 from '../../assets/content-img4.jpg';
import contactImg from '../../assets/contact-img.jpg';
import imgIphone from '../../assets/img-iphone.jpg';
import './Home.css'
import Card, { CardGroup, Scroll } from '../component';
function Home() {
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
      <div className='content-container'>
        <h3>Vì sao bạn nên chọn Travel</h3>
        <div className='content-section'>
          {contents.map(content => (
            <div key={content.id} className='content-item'>
              <img src={content.img} alt={content.title} />
              <h4>{content.title}</h4>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Card />
      <CardGroup />
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
    </div>


  )
}
export default Home