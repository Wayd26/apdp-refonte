import React, {useState, useEffect} from 'react';
import "./Vidéothèque.css";
import VideothequeCard from "../../components/VidéothèqueCard/VidéothèqueCard";
import {getATypeOfArticles} from '../../http/http';
import Pagination from '../../components/Pagination/Pagination';


const Vidéothèque = () => {

  const [videotheque, setVideotheque] = useState();
  const [perPage, setPerPage] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const changePage = ({ selected }) => {
      let currentPage = selected + 1;
      setPageNumber(currentPage)
      console.log("ok ", selected + 1)
  }
  useEffect(() => {
    loadVideothequeData();
      console.log("Arretes data ", videotheque)
  }, [pageNumber])

    const loadVideothequeData = async () => {
        const resp = await getATypeOfArticles("videotheque", pageNumber)
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setVideotheque(resp.data)
        }
    }

    
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "50px", paddingBottom: "50px"}}>
  <div className="videotheque-title">videothèque</div>
  <div className="videotheque-cards-container row">
    {
      [0,1,2,3].map((item, index) => (
        

        <div  key={index+"w"} className="col-sm-4 col-xs-12">
          <VideothequeCard />
        </div>

      ))
    }
  </div>
  {videotheque && videotheque?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
</div>;
};

export default Vidéothèque;
