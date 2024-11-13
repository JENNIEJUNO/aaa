import React from 'react'
import './Homepage.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Home from '../Pages/Home/Home';
import Qr from '../Pages/Qr/Qr';
import Taxi from '../Pages/Taxi/Taxi';
import Tourism from '../Pages/Tourism/Tourism';
import Workplace from '../Pages/Workplace/Workplace';

const Homepage = () => {
    const keyword = ['home', 'workplace', 'tourism', 'taxi']

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
    };
  return (
        <Carousel
            infinite={true}
            centerMode={false}
            itemClass="movie-slider p-1"
            containerClass="carousel-container"
            responsive={responsive}
        >
          <Qr/>
          <Home />
          <Taxi />
          <Tourism />
          <Workplace />
        </Carousel>
  )
}

export default Homepage
