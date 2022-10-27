import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import UserTypeCard from './components/UserTypeCard/UserTypeCard';
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import Content from './layouts/Content/Content'
import { Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SignIn from './layouts/Auth/Auth';
import Lottie from 'react-lottie';
import animationData from './assets/lotties/loadingAnimation';
import 'react-toastify/dist/ReactToastify.css';
import { getMenus } from './http/http';

function App() {

  const [menus, setMenus] = useState([])
  const [firstMenus, setFirstMenus] = useState([])
  const [secondMenus, setSecondMenus] = useState([])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const fetchMenus = async () => {
    let first = []
    let second =[]
    const request = await getMenus()
    if(request?.data) {
      console.log("menus ", request.data)
      setMenus(request.data.data)
      first = request.data?.data.filter(item => item.level == 1 && item.name !== "Code du Numérique")
      console.log("firstMenus ", first)
      second = request.data?.data.filter(item => item.level == 2 && item.name !== "Vos Démarches")
      console.log("firstMenus ", second)
      setFirstMenus(first)
      setSecondMenus(second)
      
    }
  }

  useEffect(() => {
    fetchMenus();
  }, [])

  return (
    <div className="App">
      {/* <div>APDP Frontend</div> */}
      {/* <SignIn /> */}
      {firstMenus.length == 0 && secondMenus.length == 0 ? <div style={{ backgroundColor: '#337ab7', width: '100%', height: '100%', position: 'fixed', display: 'flex', alignItems: 'center'}}>
        <div style={{ alignItems: 'center', width: '100%'}}>
          <Lottie 
            options={defaultOptions}
            height={100}
            width={100}
          />
          <p style={{
              color: 'white'
            }}
          >
            Chargement en cours...
          </p>
        </div>
      </div> : null }
      {firstMenus.length != 0 && secondMenus.length != 0 ? <Header firstMenus={firstMenus} secondMenus={secondMenus} /> : null }
      {firstMenus.length != 0 && secondMenus.length != 0 ? <Content/> : null }
      {firstMenus.length != 0 && secondMenus.length != 0 ? <Footer/> : null }
    </div>
  );
}

export default App;
