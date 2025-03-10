import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const name = useRef(null)
  // Xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset() // Ngăn chặn load lại trang
    setShowModal(true);
    setTimeout(()=>{
      name.current.focus();
    },10) // Hiển thị modal
    
  };

  return (
    <div className="container mt-5">
      {/* Tiêu đề */}
      <h2 className="mb-4">
        We'd <b>love</b> to hear from you.
      </h2>

      {/* Form liên hệ */}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control autoFocus ref ={name} type="text" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company/Organization</Form.Label>
              <Form.Control type="text" placeholder="Your Company" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your Message" required />
            </Form.Group>
          </Col>
        </Row>

        {/* Nút Submit */}
        <Button variant="dark" type="submit">
          SUBMIT
        </Button>
      </Form>

      {/* Social Icons */}
      <div className="mt-4 d-flex align-items-center">
        <h5 className="me-3">Connect:</h5>
        <SocialIcon url="https://facebook.com" style={{ width: "30px", height: "30px" }} />
        <SocialIcon url="https://tiktok.com" style={{ width: "30px", height: "30px", margin: "0 10px" }} />
        <SocialIcon url="https://youtube.com" style={{ width: "30px", height: "30px" }} />
      </div>

      {/* Modal thông báo thành công */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center p-4">
          <h4 className="text-success">🎉 Your message is sent!</h4>
          <p>Thanks for sharing opinion. We will contact to you soon.</p>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Contact;
