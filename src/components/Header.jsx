import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
// import {FiShoppingBag} from "react-icons/fi";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useSelector } from 'react-redux';



import '../styles/header.scss';

const Header = () => {
 const navigate= useNavigate();
 const {cartItems} = useSelector((state)=> state.cart)

  return (
    <nav>
      {/* <h3 onClick={()=>navigate('/') } >
        My Cart
      </h3> */}
      {/* <h2>
      <Link to={"/"}>
        <h2>my cart app</h2>
      </Link>
      </h2> */}

      <h2>my cart app</h2>
      
      <div>

        <Link to={"/"}>Home</Link>

        <Link to={"/cart"}>
          <AddShoppingCartIcon/>
          <p>{cartItems.length}</p>
        </Link>

        <Link to={"/notifications"}>
          <NotificationsNoneIcon/>
          <p>{0}</p>
        </Link>

        {/* <div onClick={()=>navigate('/notifications') } >
        <NotificationsNoneIcon/>
          <p>{0}</p>
        </div> */}

      </div>
    </nav>
  );
};

export default Header
