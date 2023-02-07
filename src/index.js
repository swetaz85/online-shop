import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Shop} from './pages/shop';
// import { data } from "./components/data/data";


const root = ReactDOM.createRoot(document.getElementById('root'));
// const [{products}] = data;
root.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>
);


