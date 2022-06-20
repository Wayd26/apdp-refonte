import React, {useState, useEffect} from 'react';
import "./Conseils.css";
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { RiArrowRightCircleFill, RiH1 } from 'react-icons/ri';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";
import TexteCommunautaireCard from '../../components/TexteCommunautaireCard/TexteCommunautaireCard';
import Pagination from '../../components/Pagination/Pagination';


const Conseils = () => {
    const navigate = useNavigate();
    const [textes_internationaux, setTextesInternationaux] = useState([]);
    const [title, setTitle] = useState([]);
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
      loadTextesData() ;
      console.log("TextesCommunautaire data ", textes_internationaux)       
    }, [pageNumber])
  
  
    const loadTextesData = async () => {
    
     const resp = await getATypeOfArticles("textes_internationaux", pageNumber)
        
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setTextesInternationaux(resp.data.data)
        }
    }
    
    return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="textes-communautaires-container">
          <p className="textes-communautaires-title">Textes Internationaux</p>
          <div className="textes-communautaires-cards-container row">
            <div className="col-sm-4 col-xs-12">
            { textes_internationaux ? textes_internationaux.map((index, item) => (  
              <TexteCommunautaireCard key={index+"w"} title={item.title} description={item.sub_title}/>
            )) : <h1 className="px-3">Aucun Texte</h1> }
            {textes_internationaux && textes_internationaux?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
            </div>
          </div>
        </div>
    </div>;
  };
  
export default Conseils;