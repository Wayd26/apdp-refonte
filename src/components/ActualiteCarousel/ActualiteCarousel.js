import React, {useState, useEffect} from 'react'
import './ActualiteCarousel.css'
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import CardOnCaroussel from "../../components/CardOnCaroussel/CardOnCaroussel";
import {Carousel} from "react-bootstrap";
import {getATypeOfArticles} from '../../http/http';


const ActualiteCarousel = () => {

    const [index, setIndex] = useState(0);
    const [actualites, setActualites] = useState([]);

    // const handleMoreClicked = (id) =>{
    //     navigate(`/activite/${id}`)
    // }

    const loadActualitesData = async () => {
        const resp = await getATypeOfArticles("actualites")
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            setActualites(resp.data.data)
        }
    }

    // const dispatch = useDispatch();
    // const appState = useSelector(state=>state, shallowEqual);
  
    
    useEffect(() => {
        loadActualitesData() ;
        console.log("Actualites data ", actualites)       
    }, [])

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      
        <div id={'actualite-carousel'} className={'actualite-carousel'}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* <Carousel.Item>
      <img src={img7} className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <CardOnCaroussel />
            </div>
       
      </Carousel.Item> */}
      {actualites && actualites.map((actualite, index) => 
      


      <Carousel.Item>
      <img src={actualite?.image_url} className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <CardOnCaroussel title={actualite.title} subtitle={actualite.sub_title} image={actualite.image_url} />
            </div>
        <Carousel.Caption>
          {/* <h3>{}</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
            )}
{/* 
      <Carousel.Item>
      <img src={img6} className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <CardOnCaroussel />
            </div>

      </Carousel.Item> */}
    </Carousel>
        
        </div>
    )
}

export default ActualiteCarousel