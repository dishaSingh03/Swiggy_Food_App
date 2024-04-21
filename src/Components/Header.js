import React, { useContext, useEffect, useState } from "react";
import Logo from "../Assests/logo.png";
import "../Components/Header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"

const Header = () => {

  //context API
  const { loggedInUser, setUserName } = useContext(UserContext);

  //Redux subscribing the store (reading data from redux store)
  const cartItems = useSelector((store) => store.cart.items)


  const handleUser = () => {
    setUserName("Krishna");
  };

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header bg-black shadow-lg bottom-b-1">
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>
      <button className= "text-white" onClick={handleUser}>change user</button>
      <div className="nav-items text-white">
        <ul style={{ textDecoration: "none" }} className="flex">
          <li>UserName : {loggedInUser}</li>

          <li>online Status {onlineStatus ? "🟢" : "🔴"}</li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact</li>
          <li>
          <Link to="/cart">
            Cart {cartItems.length} Items </Link>
            </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
