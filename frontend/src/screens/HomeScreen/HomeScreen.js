import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import AddMembers from '../../components/AddMembers/AddMembers';
import Navbar from '../../components/Navbar/Navbar';
import Underline from '../../components/Underline/Underline';
import './HomeScreen.css';
const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="main-container">
      <Navbar />
      <Underline />
      <AddMembers />
    </div>
  );
};

export default HomeScreen;
