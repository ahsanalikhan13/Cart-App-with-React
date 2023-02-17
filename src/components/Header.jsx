import React from 'react';
import { Link } from 'react-router-dom';
// import {FiShoppingBag} from "react-icons/fi";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


import '../styles/header.scss';

const Header = () => {
  return (
    <nav>
      <h2>my cart app</h2>
      <div>
        <Link to={"/"}>Home</Link>
        
        <Link to={"/cart"}>
          <AddShoppingCartIcon/>
          <p>{0}</p>
        </Link>

        <Link to={"/notifications"}>
          <NotificationsNoneIcon/>
          <p>{0}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header
