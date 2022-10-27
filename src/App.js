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
import 'react-toastify/dist/ReactToastify.css';
import { getMenus } from './http/http';

function App() {

  const [menus, setMenus] = useState([])
  const [firstMenus, setFirstMenus] = useState([])
  const [secondMenus, setSecondMenus] = useState([])

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

  if (firstMenus.length != 0 && secondMenus.length != 0){
    return (
      <div className="App">
        {/* <div>APDP Frontend</div> */}
        {/* <SignIn /> */}
        <Header firstMenus={firstMenus} secondMenus={secondMenus} />
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
