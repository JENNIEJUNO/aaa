import React from 'react'
import './Homepage.style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
            <div className="home">
                <img src="/aaa.png" style={{width:"200px"}}/>
            </div>
            <div className="workplace">직업</div>
            <div className="tourism">관광</div>
            <div className="taxi">택시</div>
        </Carousel>
  )
}

export default Homepage
