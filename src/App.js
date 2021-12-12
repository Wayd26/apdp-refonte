import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import UserTypeCard from './components/UserTypeCard/UserTypeCard';
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import Content from './layouts/Content/Content'
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* <div>APDP Frontend</div> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
