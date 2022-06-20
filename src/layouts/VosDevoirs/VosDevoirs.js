import React, { useState, useEffect } from 'react';
import DutyCard from '../../components/DutyCard/DutyCard';
import "./VosDevoirs.css";
import { Tabs, Tab } from "react-bootstrap";
import DutiesContent from '../../components/DutiesContent/DutiesContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getATypeOfArticles, getRightsOrDuties } from '../../http/http';


const VosDevoirs = () => {

  const [key, setKey] = useState('particulier');
  const [devoirsPrives, setDevoirsPrives] = useState();
  const [devoirsParticuliers, setDevoirsParticuliers] = useState();
  const [devoirsPubliques, setDevoirsPubliques] = useState();

  const [perPage, setPerPage] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const changePage = ({ selected }) => {
    let currentPage = selected + 1;
    setPageNumber(currentPage)
    console.log("ok ", selected + 1)
  }
  useEffect(() => {
    loadDevoirsData("devoirs", "devoir_particulier", "", pageNumber);
    loadDevoirsData("devoirs", "devoir_structure_privee", "", pageNumber);
    loadDevoirsData("devoirs", "devoir_administration_publique", "", pageNumber);
  }, [pageNumber])

  const loadDevoirsData = async (type, category, section) => {
    const resp = await getRightsOrDuties(type, category, section)
    if (resp.response && resp.response.status !== 200) {
      console.log("error ", resp.response)
    } else {
      console.log("data ", resp.data)
      const perPageValue = resp?.data?.meta?.per_page
      setPerPage(perPageValue)
      const total = resp?.data?.meta?.total;
      setTotalPage(Math.ceil(total / perPageValue))

      if (category == "devoir_particulier") {
        setDevoirsParticuliers(resp.data.data)
      }
      if (category == "devoir_structure_privee") {
        setDevoirsPrives(resp.data.data)
      }
      if (category == "devoir_administration_publique") {
        setDevoirsPubliques(resp.data.data)
      }

    }
  }



  return (
    <div style={{ background: '#E2E2E2', paddingBottom: "40px", paddingTop: "40px" }}>
      {/* <ActualiteCarousel /> */}
      <div className={"your-duties"} id={"your-duties"}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="particulier" title=" Je suis un Particulier">
            <DutiesContent categorie={"Particulier"}
              changePage={changePage}
              pageCount={totalPage}
              perPage={perPage}
              devoirs={devoirsParticuliers} />
          </Tab>
          <Tab eventKey="entreprise_et_organisme" title=" Je suis une Entreprise et Organisme">
            <DutiesContent categorie={"Structure Privée"}
              changePage={changePage}
              pageCount={totalPage}
              perPage={perPage}
              devoirs={devoirsPrives} />

          </Tab>
          <Tab eventKey="administration_publique" title="Je suis une Administration Publique" >
            <DutiesContent categorie={"Administration Publique"}
              changePage={changePage}
              pageCount={totalPage}
              perPage={perPage}
              devoirs={devoirsPubliques} />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default VosDevoirs;
