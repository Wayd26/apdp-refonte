import React, {useState, useEffect} from 'react';
import "./Mission.css";
import apdp_siege from "../../assets/images/img8.png"
import MissionCard from "../../components/MissionCard/MissionCard";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate();
  const [missions, setMissions] = useState([]);

  const handleMoreClicked = (link) =>{
      navigate(link);
  }

  const loadMissionsData = async () => {
      const resp = await getATypeOfArticles("mission")
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          setMissions(resp.data.data)
      }
  }

  const dispatch = useDispatch();
  const appState = useSelector(state=>state, shallowEqual);

  
  useEffect(() => {
      loadMissionsData() ;
      console.log("Missions data ", missions)       
  }, [])
  return (
    <div style={{ backgroundColor: "#E2E2E2",paddingTop: "40px", paddingBottom: "40px" }}>
      <div className="mission-presentation-box row">
        <div className="mission-presentation-image-container">
            <img src={apdp_siege} className="mission-presentation-image"/>
        </div>
        <div className="mission-presentation-text-container">
            <p className="mission-presentation-text-container-title">PRÉSENTATION</p>
            <p className="mission-presentation-text-container-text">Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea t et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata smpor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero e auyam erat, sed diam voluptulosit.</p>
        </div>
        <div className="mission-missions-title">
          {/* <hr className="mission-missions-hr"></hr> */}
          Missions
          </div>
        <div className="mission-missions-box row d-flex justify-content-between">
          {missions.map((item, index) => (
            <div className="col-sm-4 col-xs-12"><MissionCard link={item?.link} title={item.title} description={item.sub_title}/></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
