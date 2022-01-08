import React from 'react'
import Home from '../Home/Home'
// import { Route, Router, Switch, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth"
import VosDroits from '../VosDroits/VosDroits';
import FaireUneDemande from '../FaireUneDemande/FaireUneDemande';
import Communiques from '../Communiqués/Communiques';


const Content = () => {

    const history = createBrowserHistory();

    return (
        <div>
            <BrowserRouter>
      <Routes>
          {/* <Route index element={<div> Here</div>} /> */}
          <Route path="/vos-demarches" element={<Auth/>} />

          <Route path="/faire-une-demande" element={<FaireUneDemande />} />

          <Route path="/communiques" element={<Communiques/>} />

          <Route path="/vos-droits" element={<VosDroits/>} />
        <   Route path="/" element={<Home />} >
        </Route>
          {/* <Route path="*" element={<div>404</div>} /> */}
          <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
        {/* </Container> */}
        </div>
    )
}

export default Content
