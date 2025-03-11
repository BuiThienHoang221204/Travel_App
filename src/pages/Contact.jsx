import "bootstrap/dist/css/bootstrap.min.css";
import { motion as Motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { FaComments, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import "./Contact.css";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const name = useRef(null);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Giả lập gửi form
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  useEffect(() => {
    if (showModal === false) {
      setTimeout(() => {
        if (name.current) {
          name.current.focus();
        }
      }, 100);
    }
  }, [showModal]);

  // Hiệu ứng cho các phần tử
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Motion.div 
      className="contact-page-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="contact-header">
        <Motion.h1 
          className="contact-title"
          variants={itemVariants}
        >
          Chúng tôi <span className="highlight">rất vui</span> khi nghe từ bạn.
        </Motion.h1>
        <Motion.p 
          className="contact-subtitle"
          variants={itemVariants}
        >
          Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ sớm nhất có thể.
        </Motion.p>
      </div>

      <Row className="contact-content">
        <Col md={5}>
          <Motion.div variants={itemVariants}>
            <Card className="contact-info-card">
              <Card.Body>
                <h3 className="mb-4">Thông tin liên hệ</h3>
                
                <div className="contact-info-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h5>Địa chỉ</h5>
                    <p>123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h5>Điện thoại</h5>
                    <p>+84 123 456 789</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h5>Email</h5>
                    <p>info@travel.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <FaComments className="contact-icon" />
                  <div>
                    <h5>Mạng xã hội</h5>
                    <div className="social-icons">
                      <SocialIcon url="https://facebook.com" style={{ width: "35px", height: "35px", margin: "0 5px" }} />
                      <SocialIcon url="https://tiktok.com" style={{ width: "35px", height: "35px", margin: "0 5px" }} />
                      <SocialIcon url="https://youtube.com" style={{ width: "35px", height: "35px", margin: "0 5px" }} />
                      <SocialIcon url="https://instagram.com" style={{ width: "35px", height: "35px", margin: "0 5px" }} />
                    </div>
                  </div>
                </div>

                <div className="testimonial">
                  <div className="testimonial-stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="testimonial-text">"Dịch vụ tuyệt vời! Chúng tôi đã có một kỳ nghỉ tuyệt vời nhờ Travel."</p>
                  <p className="testimonial-author">- Nguyễn Văn A</p>
                </div>
              </Card.Body>
            </Card>
          </Motion.div>
        </Col>

        <Col md={7}>
          <Motion.div variants={itemVariants}>
            <Card className="contact-form-card">
              <Card.Body>
                <h3 className="mb-4">Gửi tin nhắn cho chúng tôi</h3>
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Họ tên <span className="required-star">*</span></Form.Label>
                    <Form.Control 
                      autoFocus 
                      ref={name} 
                      type="text" 
                      placeholder="Nhập họ tên của bạn" 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email <span className="required-star">*</span></Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Nhập email của bạn" 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Công ty/Tổ chức</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Nhập tên công ty của bạn (nếu có)" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Tin nhắn <span className="required-star">*</span></Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Nhập nội dung tin nhắn" 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </Form.Group>

                  <div className="form-footer">
                    <p className="privacy-note"><FaHeart className="heart-icon" /> Chúng tôi tôn trọng quyền riêng tư của bạn</p>
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Motion.div>
        </Col>
      </Row>

      {/* Modal thông báo thành công */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered
        className="success-modal"
      >
        <Modal.Body className="text-center p-5">
          <div className="success-icon">✓</div>
          <h4 className="success-title">Gửi tin nhắn thành công!</h4>
          <p className="success-message">Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
          <Button 
            variant="primary" 
            onClick={() => setShowModal(false)}
            className="modal-close-button"
          >
            Đóng
          </Button>
        </Modal.Body>
      </Modal>
    </Motion.div>
  );
}

export default Contact;
