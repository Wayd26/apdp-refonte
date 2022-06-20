import React, {useState, useEffect} from 'react';
import OutilsConformiteCard from '../../components/OutilsConformiteCard/OutilsConformiteCard';
import "./OutilsConformite.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination';

const OutilsConformite = () => {
  const navigate = useNavigate();
  const [outilsConformite, setOutilsConformite] = useState([]);
  const [perPage, setPerPage] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const changePage = ({ selected }) => {
      let currentPage = selected + 1;
      setPageNumber(currentPage)
      console.log("ok ", selected + 1)
  }
  useEffect(() => {
    loadOutilsConformiteData() ;
    console.log("Outils de conformite data ", outilsConformite) 
  }, [pageNumber])

  const loadOutilsConformiteData = async () => {
      const resp = await getATypeOfArticles("outils_de_conformite", pageNumber)
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

          setOutilsConformite(resp.data.data)
      }
  }
  
  // const outilsConformiteData = [
  //   {id: 1,
  //   label:"MODÈLE DE REGISTRE DES ACTIVITÉS DE VIDÉOSURVEILLANCE"},
  //   {id: 2,
  //   label:"OUTIL DE VÉRIFICATION DU REMPLISSAGE DU FORMULAIRE"},
  //   {id: 3,
  //   label:"FICHE PRATIQUE POUR LA MISE EN CONFORMITÉ DES OBLIGATIONS RELATIVES A LA PROTECTION DES DONNÉES PERSONNELLES"},
  //   {id: 4,
  //   label:"GUIDE PRATIQUE POUR LA VIDEOSURVEILLANCE"},
  //   {id: 5,
  //   label:"MODÈLE D’ANALYSE D’IMPACT RELATIF A LA PROTECTION DES DONNÉES PERSONNELLES"},
  //   {id: 6,
  //   label:"RECEPISSE DE CONSENTEMENT POUR LE TRAITEMENT DE DONNEES PERSONNELLES"}
  // ]
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
    <p className="outils-conformite-title">LES OUTILS DE LA CONFORMITÉ</p>
    <div className="outils-conformite-cards-container row d-flex justify-content-around">
      {outilsConformite?.length !== 0 ? 
      outilsConformite?.map((item, index) => (
      <div className="col-sm-6 col-xs-12 col-md-6">
      <OutilsConformiteCard label={item.title} fileUrl={item.image_url}/>
      </div>
      )) 
      :
       <h1>AUCUN OUTIL DE LA CONFORMITÉ</h1>}
    </div>
    {outilsConformite && outilsConformite?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />}
  </div>;
};

export default OutilsConformite;
