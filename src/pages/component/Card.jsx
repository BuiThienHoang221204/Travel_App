import React, { useState, useEffect, use } from 'react'
import Card from 'react-bootstrap/Card';
import card1 from '../../assets/card1.jpg';
import card2 from '../../assets/card2.jpg';
import card3 from '../../assets/card3.jpg';
import card4 from '../../assets/card4.jpg';
import card5 from '../../assets/card1.jpg';
import card6 from '../../assets/card2.jpg';
import card7 from '../../assets/card3.jpg';
import card8 from '../../assets/card4.jpg';

import '../component/Card.css'

function BasicExample() {
    const cards = [
        {
            id: 1,
            background: card1,
            text: 'Dịch Vụ Đón Tiễn Ưu Tiên Tại Sân Bay Tân Sơn Nhất (SGN) - Hồ Chí Minh',
            title: 'Dịch vụ du lịch - TP HCM',
            price: '100.000đ'
        },
        {
            id: 2,
            background: card2,
            text: 'Tour Tham Quan Địa Đạo Củ Chi',
            title: 'Dịch vụ du lịch - TP HCM',
            price: '200.000đ'
        },
        {
            id: 3,
            background: card3,
            text: 'Vé Cáp Treo Sun World Ba Den Mountain Ở Tây Ninh',
            title: 'Cáp treo',
            price: '300.000đ'
        },
        {
            id: 4,
            background: card4,
            text: 'Tour Ngày Khu Di Tích Địa Đạo Củ Chi & Đồng Bằng Sông Cửu Long từ TP. Hồ Chí Minh',
            title: 'Tour',
            price: '400.000đ'
        },
        {
            id: 5,
            background: card5,
            text: 'Dịch Vụ Đón Tiễn Ưu Tiên Tại Sân Bay Tân Sơn Nhất (SGN) - Hồ Chí Minh',
            title: 'Dịch vụ du lịch - TP HCM',
            price: '100.000đ'
        },
        {
            id: 6,
            background: card6,
            text: 'Tour Tham Quan Địa Đạo Củ Chi',
            title: 'Dịch vụ du lịch - TP HCM',
            price: '200.000đ'
        },
        {
            id: 7,
            background: card7,
            text: 'Vé Cáp Treo Sun World Ba Den Mountain Ở Tây Ninh',
            title: 'Cáp treo',
            price: '300.000đ'
        },
        {
            id: 8,
            background: card8,
            text: 'Tour Ngày Khu Di Tích Địa Đạo Củ Chi & Đồng Bằng Sông Cửu Long từ TP. Hồ Chí Minh',
            title: 'Tour',
            price: '400.000đ'
        },
    ];

    const itemCard = 4;
    const [currentCard, setCurrentCard] = useState(0);
    const maxIndex = cards.length - itemCard;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCard(prev => (prev === maxIndex ? 0 : prev + 1))
        }, 3000)
        return () => clearInterval(timer);
    },[cards.length, maxIndex])

    const nextCard = () => {
        setCurrentCard((prev) => (prev === maxIndex ? 0 : prev + 1))
    }
    return (
        <div className='car-container'>
            <h3>Cách hoạt động nổi bật</h3>
            <div className='card-section'>
                <div className='card-track'
                    style={{
                        transform: `translateX(-${currentCard * (100 / itemCard)}%)`,
                        transition: 'transform 0.3s ease-in-out'
                    }}>
                    {
                        cards.map((card, index) => (
                            <Card style={{ width: '18rem' }} key={index} className='card-item'>
                                <Card.Img variant="top" src={card.background} className='img' />
                                <Card.Body>
                                    <Card.Title className='title'>{card.title}</Card.Title>
                                    <Card.Text style={{ height: '60px', fontWeight: 'bold' }}>{card.text}</Card.Text>
                                    <div className='py-2 fw-semibold'>Chỉ từ: {card.price}</div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
            <button className="nextCard" onClick={nextCard}>
                ❯
            </button>
        </div>
    );
}

export default BasicExample;