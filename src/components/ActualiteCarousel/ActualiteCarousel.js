import CardOnCaroussel from "../../components/CardOnCaroussel/CardOnCaroussel";
import { getATypeOfArticles } from '../../http/http';
import React, { useState, useEffect } from 'react';
import { Carousel, Button } from "react-bootstrap";
import './ActualiteCarousel.css';


const ActualiteCarousel = () => {

  const [index, setIndex] = useState(0);
  const [actualites, setActualites] = useState([]);

  const loadActualitesData = async () => {
    const resp = await getATypeOfArticles("actualites");
    if (resp.response && resp.response.status !== 200) {
      console.log("data error ", resp.response);
    } else {
      console.log("data data ", resp.data?.data);
      setActualites(resp.data?.data);
    }
  }

  useEffect(() => {
    loadActualitesData();
    console.log("Actualites data ", actualites);
  }, [])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div id={'actualite-carousel'} className={'actualite-carousel'}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {actualites && actualites.map((actualite, index) =>
          <Carousel.Item key={index+"w"}>
            <div className='carousel-bg' style={{ backgroundImage: `url(${actualite?.image_url})` }}></div>
            <div className="carousel-caption d-none d-md-block">
              <CardOnCaroussel id={actualite.id} title={actualite.title} subtitle={actualite.sub_title} image={actualite.image_url} />
            </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  )
}
export default ActualiteCarousel