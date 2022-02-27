import React, {useState} from 'react'
import './ActualiteCarousel.css'
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import CardOnCaroussel from "../../components/CardOnCaroussel/CardOnCaroussel";
import {Carousel} from "react-bootstrap";

const ActualiteCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      
        <div id={'actualite-carousel'} className={'actualite-carousel'}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={img7} className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <CardOnCaroussel />
            </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <CardOnCaroussel />
            </div>

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={img6} className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <CardOnCaroussel />
            </div>

      </Carousel.Item>
    </Carousel>
        
        </div>
    )
}

export default ActualiteCarousel