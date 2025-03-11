import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import card1 from '../../assets/card-group1.jpg';
import card10 from '../../assets/card-group10.jpg';
import { default as card2, default as card7 } from '../../assets/card-group2.jpg';
import card3 from '../../assets/card-group3.jpg';
import card4 from '../../assets/card-group4.jpg';
import { default as card11, default as card5 } from '../../assets/card-group5.jpg';
import { default as card12, default as card6 } from '../../assets/card-group6.jpg';
import card8 from '../../assets/card-group8.jpg';
import card9 from '../../assets/card-group9.jpg';
import { useCart } from '../../context/CartContext';

import './CardGroup.css';
function CardGroup() {
    const { addToCart } = useCart();
    const cards = [
        { id: 1, img: card1, title: 'Bangkok', price: '1.500.000đ' },
        { id: 2, img: card2, title: 'Singapore', price: '2.000.000đ' },
        { id: 3, img: card3, title: 'Bali', price: '2.500.000đ' },
        { id: 4, img: card4, title: 'Paris', price: '5.000.000đ' },
        { id: 5, img: card5, title: 'London', price: '6.000.000đ' },
        { id: 6, img: card6, title: 'New York', price: '7.000.000đ' },
        { id: 7, img: card7, title: 'Tokyo', price: '3.500.000đ' },
        { id: 8, img: card8, title: 'Seoul', price: '3.000.000đ' },
        { id: 9, img: card9, title: 'Hanoi', price: '800.000đ' },
        { id: 10, img: card10, title: 'Da Nang', price: '900.000đ' },
        { id: 11, img: card11, title: 'Ho Chi Minh', price: '850.000đ' },
        { id: 12, img: card12, title: 'Nha Trang', price: '950.000đ' },
    ]

    const handleAddToCart = (card) => {
        addToCart(card);
        alert('Đã thêm tour vào giỏ hàng!');
    };

    const cardItems = 6;
    const [currentCard, setCurrentCard] = useState(0);
    const maxIndex = cards.length - cardItems;
    const nextCard = () => {
        setCurrentCard(prev => (prev === maxIndex ? 0 : prev + 1))
    }
    console.log(currentCard)
    return (
        <div className='card-group-container'>
            <h3>Bạn muốn đi đâu chơi?</h3>
            <div className='section-card-group'>
                <div className='card-group-track'
                style={{transform: `translateX(-${currentCard * (100/cardItems)}%)`,
                transition: 'transform 0.3s ease-in-out'}}>
                    {cards.map(cardItem => (
                        <div key={cardItem.id} className='card-group-item'>
                            <img src={cardItem.img} alt={cardItem.title} />
                            <div className="card-group-content">
                                <h4>{cardItem.title}</h4>
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="nextCardGroup" onClick={nextCard}>
                ❯
            </button>
            <button className='btn btn-outline-dark d-block mx-auto my-4 w-72'>Xem tất cả</button>
        </div>
    )
}
export default CardGroup