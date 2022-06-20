import React, { useState, useEffect } from 'react'
import EventCard from '../../components/EventCard/EventCard'
import "./Evenements.css";
import img5 from "../../assets/images/img5.jpg";
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { getATypeOfArticles } from '../../http/http';
import Pagination from '../../components/Pagination/Pagination';


const Evenements = () => {

    const navigate = useNavigate()

    const [evenements, setEvenements] = useState([]);
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
        loadEvenementsData();
        console.log("Evenements data ", evenements)
    }, [pageNumber])

    const handleMoreClicked = (id) => {
        navigate(`/evenement/${id}`)
    }

    const loadEvenementsData = async () => {
        const resp = await getATypeOfArticles("evenements", pageNumber)
        if (resp.response && resp.response.status !== 200) {
            console.log("data error ", resp.response)
        } else {
            // console.log("data data ", resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setEvenements(resp.data.data)
        }
    }

    // const dispatch = useDispatch();
    // const appState = useSelector(state=>state, shallowEqual);

    return (
        <div id="events" className="events">
            {/* <ActualiteCarousel /> */}
            <p className="events-title">Tous les évenements</p>
            {/* <p className="events-subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed  olores et ea rebum. Stet clita kasd gubergren, no seaolores et ea rebum. Stet clita kasd guolores et ea rebum. Stet clita kasdolores et ea rebum. Stet clita </p> */}
            <div className="row d-flex">

                <div className="events-cards-container mx-auto mt-5">
                    {
                        evenements && evenements.map((evenement, index) =>
                            <EventCard key={index + "w"}
                                eventId={evenement.id}
                                eventImage={evenement.image_url}
                                eventTitle={evenement.title}
                                eventSubTitle={evenement.sub_title}
                                eventContent={evenement.content}
                                eventDate={evenement.created_at}
                                moreClicked={() => handleMoreClicked(evenement.id)} />
                        )
                    }
                </div>
                {evenements && evenements?.length !== 0 && <Pagination
                    changePage={changePage}
                    pageCount={totalPage}
                    perPage={perPage}
                />}

            </div>

        </div>
    )
}

export default Evenements
