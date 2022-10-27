import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import './locales/i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./fonts/Gotham-Font/GothamBold.ttf";
import "./fonts/Gotham-Font/GothamBoldItalic.ttf";
import "./fonts/Gotham-Font/GothamBook.ttf";
import "./fonts/Gotham-Font/GothamBookItalic.ttf";
import "./fonts/Gotham-Font/GothamLight.ttf";
import "./fonts/Gotham-Font/GothamLightItalic.ttf";
// import "./fonts/Gotham-Font/GothamThin.ttf"
import "./fonts/Gotham-Font/GothamMedium.ttf";
import "./fonts/Gotham-Font/GothamMediumItalic.ttf";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals(console.log);
