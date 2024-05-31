import React from 'react';
import { Carousel } from 'react-bootstrap';
import corousel1 from '../../assets/corousel1.jpg';
import banner1 from '../../assets/slide1.png';
import banner2 from '../../assets/slide2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';
import banner5 from '../../assets/banner5.png';
import './corousal.css';

export default function Corousel() {
  const items = [
    { img: banner1, alt: 'slide 1' },
    { img: banner2, alt: 'slide 2' },
    { img: banner3, alt: 'slide 4' },
    { img: banner4, alt: 'slide 5' },
    { img: banner5, alt: 'slide 6' },
  ];

  return (
    <div className='carousalbase'>
      <Carousel>
        {items.map((item, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={item.img} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}