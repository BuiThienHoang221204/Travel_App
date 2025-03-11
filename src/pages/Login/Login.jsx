import React, { useState } from 'react';
import { FaLock, FaEnvelope, FaFacebookF, FaGoogle, FaTwitter, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra các trường dữ liệu
    if (!email || !password) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Email không hợp lệ!');
      return;
    }

    // Giả lập đăng nhập thành công
    toast.success('Đăng nhập thành công!', {
      onClose: () => {
        navigate('/');
      }
    });
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600">
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full text-white p-12">
          <h1 className="text-5xl font-bold mb-6">
            Chào mừng trở lại!
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-md">
            Khám phá những điểm đến tuyệt vời và trải nghiệm những chuyến đi đáng nhớ cùng chúng tôi
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-end mb-4">
            <Link
              to="/"
              className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaHome className="text-xl mr-1" />
              <span>Trang chủ</span>
            </Link>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Đăng nhập
            </h2>
            <p className="text-gray-600">Đăng nhập để khám phá những điều tuyệt vời</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-lg"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500" 
                />
                <span className="ml-2 text-gray-600">Ghi nhớ đăng nhập</span>
              </label>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-all duration-300"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-500">
                  Hoặc đăng nhập với
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <button className="flex justify-center items-center py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <FaGoogle className="text-red-500 text-xl" />
              </button>
              <button className="flex justify-center items-center py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <FaFacebookF className="text-blue-600 text-xl" />
              </button>
              <button className="flex justify-center items-center py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <FaTwitter className="text-blue-400 text-xl" />
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Chưa có tài khoản?{' '}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-600 font-semibold hover:underline"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;