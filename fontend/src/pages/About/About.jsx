import React from 'react';
import { FaMapMarkedAlt, FaUserFriends, FaRegLightbulb, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-blue-500" />,
      title: "Khám Phá Điểm Đến",
      description: "Khám phá những điểm đến tuyệt vời với các tour du lịch được thiết kế riêng cho bạn."
    },
    {
      icon: <FaUserFriends className="text-4xl text-blue-500" />,
      title: "Cộng Đồng Du Lịch",
      description: "Kết nối với cộng đồng du lịch, chia sẻ trải nghiệm và tìm bạn đồng hành."
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-blue-500" />,
      title: "Lập Kế Hoạch",
      description: "Công cụ lập kế hoạch thông minh giúp chuyến đi của bạn trở nên hoàn hảo."
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: "Đối Tác Tin Cậy",
      description: "Hợp tác với các đối tác uy tín để mang đến trải nghiệm tốt nhất cho bạn."
    }
  ];

  const stats = [
    { number: "10K+", label: "Khách Hàng" },
    { number: "500+", label: "Điểm Đến" },
    { number: "100+", label: "Đối Tác" },
    { number: "50+", label: "Quốc Gia" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 bottom-0 right-0"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Về Chúng Tôi
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Chúng tôi là đơn vị tiên phong trong lĩnh vực du lịch, mang đến những trải nghiệm độc đáo và đáng nhớ cho mọi hành trình của bạn.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chúng tôi cam kết mang đến những trải nghiệm du lịch tuyệt vời nhất, 
            kết nối con người với những vùng đất mới, văn hóa mới và những câu chuyện đáng nhớ. 
            Với đội ngũ chuyên nghiệp và tận tâm, chúng tôi luôn nỗ lực để mỗi chuyến đi của bạn 
            đều trở thành những kỷ niệm đáng trân trọng.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Đội Ngũ Của Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thành Viên {member}</h3>
                <p className="text-gray-600">Chức vụ</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hãy để chúng tôi giúp bạn lên kế hoạch cho chuyến đi tiếp theo của bạn
          </p>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-all duration-300">
            Liên Hệ Ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 