import React, {useEffect, useState} from "react";
import ActualiteCarousel from "../../components/ActualiteCarousel/ActualiteCarousel";
import AvisImportant from "../../components/AvisImportant/AvisImportant";
import FaqSection from "../../components/FaqSection/FaqSection";
import MarketCard from "../../components/MarketCard/MarketCard";
import MarketDataTable from "../../components/MarketDataTable/MarketDataTable";
import { getATypeOfArticles } from "../../http/http";
import "./AppelsOffres.css";

const AppelsOffres = () => {
  var actualYear = new Date();

  const [appelsOffres, setAppelsOffres] = useState();

  const loadAOData = async () => {
      const resp = await getATypeOfArticles("publications_dao")
      if(resp.response && resp.response.status !== 200){
          console.log("error ",resp.response)
      } else {
          console.log("data ",resp.data.data)
          setAppelsOffres(resp.data.data)
      }
  }
  
  useEffect(() => {
      loadAOData()        
  }, [])


  return (
    <div style={{ background: "#F7F7F7 0% 0% no-repeat padding-box;" }}>
      {/* <ActualiteCarousel /> */}
      <div id="appels-offres" className="appels-offres">
        <div className="appels-offres-header">
          <p className="appels-offres-header-text">Publications</p>
        </div>
        <p className="appels-offres-publications">Appels d'offres</p>
        <div className="w90">
          <p className="appels-offres-avis-importants pl-3">Avis Importants !</p>
          {appelsOffres?.length != 0 ? <>{appelsOffres?.map((ao, index) =>
                         <AvisImportant title={ao.title} fileLink={ao.media[0]} />
 
                )}</> : <h1 className="py-3"> Aucun Appel d'Offre </h1> 
                }
          
        </div>

        {/* <div className="appels-offres-blue-band">
          <p className="appels-offres-blue-band-text">
            Marchés de {actualYear.getFullYear()}{" "}
          </p>
        </div> */}
        {/* <div className="w90 row d-flex justify-content-between pb-5">
          <MarketDataTable />
        </div> */}

        {/* <div className="appels-offres-blue-band">
          <p className="appels-offres-blue-band-text">
            Marchés de {actualYear.getFullYear() - 1}{" "}
          </p>

        </div>
        <div className="w90 row d-flex justify-content-between">
        <MarketDataTable />  
        </div> */}
      </div>
      {/* <FaqSection /> */}
    </div>
  );
};

export default AppelsOffres;
