import React, { useState, useEffect } from 'react';
import ArreteRow from '../../components/ArreteRow/ArreteRow';
import "./Arretes.css"
import { getATypeOfArticles } from '../../http/http';
import Pagination from '../../components/Pagination/Pagination';


const Arretes = () => {

    const [arretes, setArretes] = useState();
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
        loadArretesData();
        console.log("Arretes data ", arretes)
    }, [pageNumber])

    const loadArretesData = async () => {
        const resp = await getATypeOfArticles("arretes", pageNumber)
        if (resp.response && resp.response.status !== 200) {
            console.log("error ", resp.response)
        } else {
            console.log("data arretes", resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setArretes(resp.data.data)
        }
    }


    return <div style={{ backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="arretes-container">
            <p className="arretes-title">ARRÈTÉS</p>
            <div className="arretes-rows-container">
                {arretes ? <>{arretes.map((arrete, index) =>
                    <ArreteRow data={arrete} />)}</> : <h1> Aucun Arrêté </h1>
                }
            </div>
                {arretes && arretes?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
        </div>
    </div>;
};

export default Arretes;
