import React, { useState } from 'react'
import card1 from '../../assets/card-group1.jpg';
import card2 from '../../assets/card-group2.jpg';
import card3 from '../../assets/card-group3.jpg';
import card4 from '../../assets/card-group4.jpg';
import card5 from '../../assets/card-group5.jpg';
import card6 from '../../assets/card-group6.jpg';
import card7 from '../../assets/card-group2.jpg';
import card8 from '../../assets/card-group8.jpg';
import card9 from '../../assets/card-group9.jpg';
import card10 from '../../assets/card-group10.jpg';
import card11 from '../../assets/card-group5.jpg';
import card12 from '../../assets/card-group6.jpg';

import './CardGroup.css'
function CardGroup() {
    const cards = [
        { id: 1, img: card1, title: 'Bangkok' },
        { id: 2, img: card2, title: 'Singapore' },
        { id: 3, img: card3, title: 'Bali' },
        { id: 4, img: card4, title: 'Paris' },
        { id: 5, img: card5, title: 'London' },
        { id: 6, img: card6, title: 'New York' },
        { id: 7, img: card7, title: 'Tokyo' },
        { id: 8, img: card8, title: 'Seoul' },
        { id: 9, img: card9, title: 'Hanoi' },
        { id: 10, img: card10, title: 'Da Nang' },
        { id: 11, img: card11, title: 'Ho Chi Minh' },
        { id: 12, img: card12, title: 'Nha Trang' },
    ]
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
                            <h4>{cardItem.title}</h4>
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