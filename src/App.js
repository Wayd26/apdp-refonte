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

function App() {
  return (
    <div className="App">
      {/* <div>APDP Frontend</div> */}
      {/* <SignIn /> */}
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
