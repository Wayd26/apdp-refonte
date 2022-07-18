import React, { useState, useEffect } from 'react'
import './ActualiteCarousel.css'
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import CardOnCaroussel from "../../components/CardOnCaroussel/CardOnCaroussel";
import { Carousel, Button } from "react-bootstrap";
import { getATypeOfArticles } from '../../http/http';


const ActualiteCarousel = () => {

  const [index, setIndex] = useState(0);
  const [actualites, setActualites] = useState([]);

  // const handleMoreClicked = (id) =>{
  //     navigate(`/activite/${id}`)
  // }

  const loadActualitesData = async () => {
    const resp = await getATypeOfArticles("actualites")
    if (resp.response && resp.response.status !== 200) {
      console.log("data error ", resp.response)
    } else {
      console.log("data data ", resp.data?.data)
      setActualites(resp.data?.data)
    }
  }

  // const dispatch = useDispatch();
  // const appState = useSelector(state=>state, shallowEqual);


  useEffect(() => {
    loadActualitesData();
    console.log("Actualites data ", actualites)
  }, [])

  const handleSelect = (selectedIndex, e) => {
    setIndex(0);
    // setIndex(selectedIndex);
  };
  return (

    <div id={'actualite-carousel'} className={'actualite-carousel'}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        
        {/* {actualites && actualites.map((actualite, index) => */}



          <Carousel.Item key={index+"w"}>
            {/* <img src={} className="d-block carousel-image" alt="..." /> */}
            <div className='carousel-bg' style={{ backgroundImage: `url(${actualites[0]?.image_url})` }}></div>
            <div className="carousel-caption d-md-block">
              <CardOnCaroussel id={actualites[0]?.id} title={actualites[0]?.title} subtitle={actualites[0]?.sub_title} image={actualites[0]?.image_url} />
            </div>
            <Carousel.Caption>
              {/* <h3>{}</h3> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
         {/* )} */}
        
      </Carousel>

    </div>
  )
}

export default ActualiteCarousel