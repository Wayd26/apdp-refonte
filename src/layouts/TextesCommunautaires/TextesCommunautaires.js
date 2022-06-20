import React, { useState, useEffect } from 'react';
import TexteCommunautaireCard from '../../components/TexteCommunautaireCard/TexteCommunautaireCard';
import "./TextesCommunautaires.css"
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getATypeOfArticles } from '../../http/http';
import { useNavigate } from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination';

const TextesCommunautaires = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  const [textes_communautaire, setTextesCommunautaire] = useState([]);
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
    loadTextesCommunautaireData();
    console.log("textes_communautaire data ", textes_communautaire)
  }, [pageNumber])



  useEffect(() => {
    if (type === "accords") {
      setTitle("Accords")
    }
    if (type === "reglements") {
      setTitle("Règlements")
    }
    if (type === "directives") {
      setTitle("Directives")
    }

  }, [])


  const loadTextesCommunautaireData = async () => {
    let resp;
    if (type === "accords") {
      resp = await getATypeOfArticles("accords", pageNumber)
    }
    if (type === "reglements") {
      resp = await getATypeOfArticles("reglements", pageNumber)
    }
    if (type === "directives") {
      resp = await getATypeOfArticles("directives", pageNumber)
    }

    if (resp.response && resp.response.status !== 200) {
      console.log("data error ", resp.response)
    } else {
      console.log("data data ", resp.data.data)
      const perPageValue = resp?.data?.meta?.per_page
      setPerPage(perPageValue)
      const total = resp?.data?.meta?.total;
      setTotalPage(Math.ceil(total / perPageValue))

      setTextesCommunautaire(resp.data.data)
    }
  }

  useEffect(() => {
    loadTextesCommunautaireData();
    console.log("TextesCommunautaire data ", textes_communautaire)
  }, [])
  return <div style={{ backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px" }}>
    <div className="textes-communautaires-container">
      <p className="textes-communautaires-title">{title}</p>
      <div className="textes-communautaires-cards-container row">
        <div className="col-sm-4 col-xs-12">
          {textes_communautaire.map(item => (
            <TexteCommunautaireCard title={item.title} description={item.sub_title} />
          ))}
        </div>

      </div>
      {textes_communautaire && textes_communautaire?.length !== 0 && <Pagination
        changePage={changePage}
        pageCount={totalPage}
        perPage={perPage}
      />}
    </div>
  </div>;
};

export default TextesCommunautaires;
