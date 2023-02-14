import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Product } from './pages/product';
import {Shop} from './pages/shop';
// import { data } from "./components/data/data";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {Contacts} from './pages/contacts';
import { Login } from './pages/login';
import { Cart } from './pages/cart';
import { NotFound } from './pages/notFound';
import { MainMenu } from './components/mainHeader';
import { Provider } from 'react-redux';
import { store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const [{products}] = data;
root.render(   
  <Provider store={store}>
    <BrowserRouter>
      {/* <MainMenu/> */}
      <Routes> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<MainMenu/>}>
          {/* <Route path='/' element={<Shop/>}/>  можно двумя вариантами */}
          <Route index element={<Shop/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='product/:productId' element={<Product/>}/>
          <Route path='product' element={<Navigate to='/'/>}/>
        </Route>     
        <Route path='*' element={<NotFound/>}/>

        {/* <Route path='/' element={<Shop/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/product' element={<Navigate to='/'/>}/>
        <Route path='*' element={<NotFound/>}/> */}
        
      </Routes>
      {/* <Shop />
      <Product/> */}
    </BrowserRouter>
  </Provider> 
);


