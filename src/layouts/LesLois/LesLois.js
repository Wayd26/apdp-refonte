import React, {useState, useEffect} from 'react'
import LoiCard from '../../components/LoiCard/LoiCard';
import "./LesLois.css"
import {getATypeOfArticles} from '../../http/http';
import Pagination from '../../components/Pagination/Pagination';


const LesLois = () => {

    const [lois, setLois] = useState();
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
        loadLoisData()
        console.log("Lois data ", lois)
    }, [pageNumber])

    const loadLoisData = async () => {
        const resp = await getATypeOfArticles("lois", pageNumber)
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setLois(resp.data.data)
        }
    }
 
    
    return (
        
        <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
            <p className="lois-title">LOIS</p>

            <div className="lois-container row d-flex justify-content-around">
            {lois ? <>{lois.map((loi, index) =>
                <LoiCard key={index+"w"} data={loi} /> )}</> : <h1> Aucune Loi </h1> 
                }
            </div>
                {lois && lois?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
        </div>
    )
}

export default LesLois
