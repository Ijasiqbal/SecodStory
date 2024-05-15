import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import corousel1 from '../assets/corousel1.jpg';
import corousel2 from '../assets/SLIDE2.jpg';

export default function Corousel() {
  const items = [
    { img: corousel1, alt: 'slide 1' },
    { img: corousel2, alt: 'slide 2' },
    { img: corousel1, alt: 'slide 3' },
  ];

  return (
    <div className='carousalbase'>
      <Carousel autoPlay>
        {items.map((item, i) => (
          <Paper key={i}>
            <img className="d-block w-100" src={item.img} alt={item.alt} />
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}