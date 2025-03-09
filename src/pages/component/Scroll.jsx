import React, { useState, useEffect } from 'react'
import scroll1 from '../../assets/scroll1.jpg';
import scroll2 from '../../assets/scroll2.jpg';
import scroll3 from '../../assets/scroll3.jpg';
import scroll4 from '../../assets/scroll4.jpg';
import scroll5 from '../../assets/scroll5.jpg';
import './Scroll.css'

function Scroll() {
    // Dữ liệu cho section ưu đãi
    const promotions = [
        {
            id: 1,
            background: scroll1
        },
        {
            id: 2,
            background: scroll2
        },
        {
            id: 3,
            background: scroll3
        },
        {
            id: 4,
            background: scroll4
        },
        {
            id: 5,
            background: scroll5
        },
        {
            id: 6,
            background: scroll1
        },
        {
            id: 7,
            background: scroll2
        },
        {
            id: 8,
            background: scroll3
        },
    ];

    // Tự động chuyển ưu đãi
    const itemsSlide = 3; //Hiển thi 3 ưu đãi cùng lúc
    const [currentPromo, setCurrentPromo] = useState(0);

    const nextPromo = () => {
        const maxIndex = Math.ceil(promotions.length / itemsSlide) - 1;//tính maxIndex để chia nhóm (9/3 = 3) sẽ có 3 nhóm và max index = 2  
        setCurrentPromo((prev) => (prev === maxIndex ? 0 : prev + 1));//nếu currentPromo = maxIndex thì chuyển về 0, ngược lại thì tăng lên 1
    };

    const prevPromo = () => {
        const maxIndex = Math.ceil(promotions.length / itemsSlide) - 1;
        setCurrentPromo((prev) => (prev === 0 ? maxIndex : prev - 1));//nếu currentPromo = 0 thì chuyển về maxIndex, ngược lại thì giảm đi 1
    };
    return (
        <div className="discount">
            <h3 className="discount-title">Ưu đãi cho bạn</h3>
            <div
                className="discount-container">
                <div
                    className="promotions-track"
                    style={{
                        transform: `translateX(-${currentPromo * (100 / itemsSlide)}% )`, //tính toán để di chuyển silde theo chìu x
                        //ví dụ currentPromo = 1 thì sẽ di chuyển -33.33% sẽ di chuyển sang trái 1 slide
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    {promotions.map((promo) => (
                        <div key={promo.id} className="promo">
                            <img src={promo.background} alt={`promo-${promo.id}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="prevPro" onClick={prevPromo}>
                ❮
            </button>
            <button className="nextPro" onClick={nextPromo}>
                ❯
            </button>
        </div>
    )
}
export default Scroll