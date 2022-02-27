import React, {useState, useEffect} from 'react'
import EventCard from '../../components/EventCard/EventCard'
import "./Evenements.css";
import img5 from "../../assets/images/img5.jpg";
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {useNavigate} from "react-router-dom";
import ReactPaginate from "react-paginate";



const Evenements = () => {

    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    let limit = 10;

    const handleEventCardMoreClicked = () => {
        navigate("/evenements/evenement26")
    }

    const handlePageClicked = () => {

    }

    useEffect(() => {
        const getComments = async () => {
          const res = await fetch(
            `http://localhost:3004/comments?_page=1&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
          );
          const data = await res.json();
          const total = res.headers.get("x-total-count");
          setpageCount(Math.ceil(total / limit));
          // console.log(Math.ceil(total/12));
          setItems(data);
        };
    
        getComments();
      }, [limit]);

    return (
        <div id="events" className="events">
            {/* <ActualiteCarousel /> */}
            <p className="events-title">Tous les évenements</p>
            {/* <p className="events-subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed  olores et ea rebum. Stet clita kasd gubergren, no seaolores et ea rebum. Stet clita kasd guolores et ea rebum. Stet clita kasdolores et ea rebum. Stet clita </p> */}
           <div className="row d-flex">

            <div className="events-cards-container">
                <EventCard moreClicked={()=> handleEventCardMoreClicked()} />
                <EventCard moreClicked={()=> handleEventCardMoreClicked()} />

            <ReactPaginate 
                previousLabel={"Précédent"}
                nextLabel={"Suivant"}
                breakLabel={"..."}
                pageCount={25}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClicked}
                containerClassName={"pagination justify-content-center mb-3"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

            </div>
            <div className="events-others-container">
                <p className="popular-activities-title">Activités Populaires</p>
                <hr className="popular-activities-hr"></hr>
                {/* Start Popular Activites */}
                <div className="row my-3">
                    <div className="col-4">
                        <img src={img5} className="popular-activities-img"/>
                    </div>
                    <div className="col-8">
                        <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <img src={img5} className="popular-activities-img"/>
                      </div>
                    <div className="col-8">
                        <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <img src={img5} className="popular-activities-img"/>
                    </div>
                    <div className="col-8">
                        <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-4">
                        <img src={img5} className="popular-activities-img"/>
                    </div>
                    <div className="col-8">
                        <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                    </div>
                </div>

                {/* End Popular Activities */}
                {/* Start Categories */}
                <p className="categories-title">Catégories</p>
                <hr className="categories-hr"></hr>
                <p className="categories-items">Lorem ipsum(13)</p>
                <p className="categories-items">Lorem ipsum(5)</p>
                <p className="categories-items">Lorem ipsum(8)</p>
                <p className="categories-items">Lorem ipsum(11)</p>
                <p className="categories-items">Lorem ipsum(7)</p>
                {/* End Categories */}
                <BesoinAide />
            </div>
           </div>

           {/* <FaqSection /> */}
        </div>
    )
}

export default Evenements
