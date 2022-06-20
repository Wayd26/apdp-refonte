import React, {useState, useEffect} from 'react';
import DecretRow from '../../components/DecretRow/DecretRow';
import "./Decrets.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination';

const Decrets = () => {
  const navigate = useNavigate();
  const [decrets, setDecrets] = useState([]);
  const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
      loadDecretsData() ;
      console.log("Decrets data ", decrets)  
    }, [pageNumber])

  const loadDecretsData = async () => {
      const resp = await getATypeOfArticles("decrets", pageNumber)
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          const perPageValue = resp?.data?.meta?.per_page
          setPerPage(perPageValue)
          const total = resp?.data?.meta?.total;
          setTotalPage(Math.ceil(total / perPageValue))

          setDecrets(resp.data.data)
      }
  }

  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="decrets-container">
          <p className="decrets-title">DÉCRETS</p>
          <div className="decrets-rows-container">
            {decrets.map((item, index) => (
              <DecretRow label={item.title} fileUrl={item.image_url} description={item.sub_title} decretImg={item.image_url}/>
            ))}
            {decrets && decrets?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
         </div>
      </div>
  </div>;
};

export default Decrets;
