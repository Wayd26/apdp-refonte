import React from 'react'
import Home from '../Home/Home'
// import { Route, Router, Switch, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth"


const Content = () => {

    const history = createBrowserHistory();

    return (
        <div>
            <BrowserRouter>
      <Routes>
          {/* <Route index element={<div> Here</div>} /> */}
          <Route path="/vos-demarches" element={<Auth/>} />
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
