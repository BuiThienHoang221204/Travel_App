import React from 'react'
import './Footer.css'; 
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import logoFooter from '../../assets/boconthuong.png';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-section">
          <h4>Giới thiệu</h4>
          <p>Hộ Kinh Doanh Bao GT</p>
          <p>
            MST 8752797026-001 do UBND Q. Tân Bình cấp ngày 14/11/2022
          </p>
          <img src={logoFooter} alt="logo" />
        </div>

        <div className="footer-section">
          <h4>Liên kết</h4>
          <ul>
            <li>Tìm kiếm sản phẩm</li>
            <li>Giới thiệu về sản phẩm</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách khiếu nại</li>
            <li>Chính sách giao và vận chuyển</li>
            <li>Chính sách yêu cầu đổi trả</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách về kiểm hàng</li>
            <li>Chính sách về bảo mật</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Thông tin liên hệ</h4>
          <p>
            📍 22 Nguyễn Thái Học - Phường Tân Thành - Quận Tân Phú - TP. Hồ
            Chí Minh
          </p>
          <p>📞 086 2642568</p>
          <p>📜 coming soon</p>
          <p>📧 travelapp.@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Instagram</h4>
          <div className="instagram-grid">
            <img src={img1} alt="Instagram 1" />
            <img src={img2} alt="Instagram 2" />
            <img src={img3} alt="Instagram 3" />
            <img src={img4} alt="Instagram 4" />
            <img src={img5} alt="Instagram 3" />
            <img src={img1} alt="Instagram 1" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 Travel App. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;