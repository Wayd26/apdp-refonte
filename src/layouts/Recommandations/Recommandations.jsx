import React, {useState, useEffect} from 'react';
import "./Recommandations.css";
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
import RecommandationCard from '../../components/RecommandationCard/RecommandationCard';
import Pagination from '../../components/Pagination/Pagination';


const Recommandations = () => {
    const navigate = useNavigate();
    const [recommandations, setRecommandations] = useState([]);
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
      loadTextesData();
        console.log("recommandations data ", recommandations)
    }, [pageNumber])
  
  
    const loadTextesData = async () => {
    
     const resp = await getATypeOfArticles("recommandations", pageNumber)
        
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setRecommandations(resp.data.data)
        }
    }
    
    return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="textes-communautaires-container">
          <p className="textes-communautaires-title ">Recommandations</p>
          <br className='pb-4'/>
          <div className="textes-communautaires-cards-container row pt-4">
          <div className="lois-container row d-flex justify-content-around">
            {recommandations ? <>{recommandations.map((rec, index) =>
                <RecommandationCard key={index+"w"} data={rec} /> )}</> : <h1> Aucune recommandation </h1> 
                }
            </div>
            {recommandations && recommandations?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
          </div>
        </div>
    </div>;
  };
  export default Recommandations