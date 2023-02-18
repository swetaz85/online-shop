import React from "react";
import { Outlet } from "react-router-dom";
import {AddToCartButton} from '../addToCartButton';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserAuth, login, logout } from "../../redux/slices/userAuth";
import styles from './index.module.css';
import { useNavigate } from "react-router-dom";

export const MainMenu = () => {
    const navigate = useNavigate();
    const activeClassName = ({isActive}) => isActive ? styles.activeRoute: styles.route;
    const navigateToCart = () => navigate('/cart');

    const dispatch = useDispatch();
    const {userName} = useSelector(selectUserName);
    const {isAuth} = useSelector(selectUserAuth);
    const userLogin = () => {
        dispatch(login());
    };
    const userLogout = () => {
        dispatch(logout());
    };
    
  return (
    <>
      <nav className={styles.wrapper}>
        <p className={styles.userName}>USER NAME</p>
        {isAuth 
        ? <><span>{userName}</span> 
        <button onClick={userLogout}>logout</button></>         
        : <button onClick={userLogin}>Login</button>}
        <NavLink to='/login' className={styles.route}>logout</NavLink>
        <NavLink to='/login' className={styles.route}>user</NavLink>
        <NavLink to='/contacts' className={styles.route}>contacts</NavLink>
        <NavLink to='/' className={styles.activeRoute}>shop</NavLink>
        <AddToCartButton size="s"/>
      </nav>
      <Outlet/>
    </>
  );
};


