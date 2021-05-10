import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/img/slider-img.jpg'
import Image2 from '../../assets/img/slider-img2.jpg'
import Image3 from '../../assets/img/slider-img3.jpg'

const MainCarousel = () => {
    return (
        <div>
            <Carousel showThumbs={false}>
            <div>
                <img src={Image2} style={{width:'100%'}} alt="logo" />
            </div>
            <div>
                <img src={Image3} alt="logo" />
            </div>
            <div>
                <img src={Image1} alt="logo" />
            </div>
        </Carousel>
        </div>
    );
};

export default MainCarousel;