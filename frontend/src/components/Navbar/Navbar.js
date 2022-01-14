import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import './Navbar.css';

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="container">
      <div className="brand">
        <h2>Delta</h2>
      </div>
      <div className="user-information">
        <div className="username">{userInfo && <h2>{userInfo.name}</h2>}</div>
        <div className="logout">
          {userInfo && (
            <Link className="logout-btn" to="/login" onClick={logoutHandler}>
              Log out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
