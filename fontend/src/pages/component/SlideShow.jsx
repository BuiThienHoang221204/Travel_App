import React, { useState, useEffect } from 'react'
import '../component/SlideShow.css'
import img1 from '../../assets/slide1.jpg';
import img2 from '../../assets/slide2.jpg';

function SlideShow() {
    const slides = [
        { id: 1, image: img1, caption: 'Khám phá thiên nhiên', text: 'Khám phá niềm vui của bạn mọi lúc, mọi nơi - từ chuyến du lịch ngẫu hứng tới những cuộc phiêu lưu khắp thế giới' },
        { id: 2, image: img2, caption: 'Du lịch biển', text: 'Khám phá niềm vui của bạn mọi lúc, mọi nơi - từ chuyến du lịch ngẫu hứng tới những cuộc phiêu lưu khắp thế giới' },
        { id: 3, image: img1, caption: 'Thành phố tuyệt đẹp', text: 'Khám phá niềm vui của bạn mọi lúc, mọi nơi - từ chuyến du lịch ngẫu hứng tới những cuộc phiêu lưu khắp thế giới' },
    ]
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    //tự đông chuyển slide
    useEffect(() => {
        const interval = setInterval(() => {
            if (autoPlay) {
                setCurrent(current === slides.length - 1 ? 0 : current + 1) //nếu current = 2 thì chuyển về 0, ngược lại thì tăng lên 1
            }
        }, 1000)
        return () => clearInterval(interval)// Dọn dẹp timer khi component unmount
    }, [autoPlay, slides.length])
    //chuyển slide
    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % slides.length) //đến slide cuối cùng thì chuyển về slide đầu tiên
    }

    const prevSlide = () => {
        setCurrent(prev => (prev - 1 + slides.length) % slides.length) //đến slide đầu tiên thì chuyển về slide cuối cùng
    }
    //tạm dừng khi chạm vào slide
    const pause = () => setAutoPlay(false)
    const play = () => setAutoPlay(true)
    return (
        <div className='slide-show'
            onMouseEnter={pause}
            onMouseLeave={play}>
            <div className='slide-container'>
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`slide ${index === current ? 'active' : ''}`}>
                        <img src={slide.image} alt={slide.caption} />
                        <div className='caption'>{slide.caption}</div>
                        <div className='text'>{slide.text}</div>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    )
}
export default SlideShow

