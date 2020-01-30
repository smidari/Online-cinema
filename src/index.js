import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/app/App';
import {ModalProvider} from "./components/ui/modal/ModalContext";
import ModalRoot from "./components/ui/modal/ModaRoot";



const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <ModalProvider>

        <ModalRoot />

        <Provider store={store}>
          <div>
            <App />
          </div>
        </Provider>

    </ModalProvider>


  </BrowserRouter>, rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
