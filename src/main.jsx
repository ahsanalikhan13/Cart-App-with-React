import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import {Toaster} from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <Provider store={store} >
    <Header/>
    <App />
    <Toaster/>
  </Provider>
      
  </BrowserRouter>
)
