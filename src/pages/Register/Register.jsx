import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Phần bên trái - Hình ảnh và slogan */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600">
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full text-white px-8 py-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
            Chào mừng bạn!
          </h1>
          <p className="text-lg lg:text-xl text-blue-100 text-center max-w-lg">
            Đăng ký tài khoản để bắt đầu hành trình khám phá những điểm đến tuyệt vời
          </p>
        </div>
      </div>

      {/* Phần bên phải - Form đăng ký */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              Đăng ký tài khoản
            </h2>
            <p className="text-gray-600 text-lg">Điền thông tin của bạn để tạo tài khoản mới</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                name="fullName"
                placeholder="Họ và tên"
                value={formData.fullName}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="flex items-start py-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-3 text-gray-600 text-sm lg:text-base">
                Tôi đồng ý với <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Điều khoản</a> và <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Chính sách bảo mật</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3.5 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-all duration-300 mt-6"
            >
              Đăng ký
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600 text-base">
            Đã có tài khoản?{' '}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-600 font-semibold hover:underline"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register; 