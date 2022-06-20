import React, {useState, useEffect} from 'react';
import RapportAnnuelRow from '../../components/RapportAnnuelRow/RapportAnnuelRow';
import "./RapportsAnnuels.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination';

const RapportsAnnuels = () => {
    const navigate = useNavigate();
    const [rapports, setRapports] = useState([]);
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
        loadRapportsData() ;
        console.log("Rapports data ", rapports)
    }, [pageNumber])

    const loadRapportsData = async () => {
        const resp = await getATypeOfArticles("rapports_annuel", pageNumber)
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setRapports(resp.data.data)
        }
    }

    const dispatch = useDispatch();
    const appState = useSelector(state=>state, shallowEqual);
  
    return (
        <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>

            <div className="rapports-annuels-box">
                <p className="rapports-annuels-title">Rapports Annuels</p>

                <div className="rapports-annuels-row-box">
                    {rapports.map((item, index) => (
                        <RapportAnnuelRow key={index+"w"} period={item.period} title={item.title} description={item.description} fileUrl={item.image_url}/>
                    ))}
                </div>
                {rapports && rapports?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
            </div>
            
        </div>
    )
}

export default RapportsAnnuels
