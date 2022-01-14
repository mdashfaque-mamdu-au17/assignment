import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultPage.css';
const DefaultPage = () => {
  return (
    <div className="def-container">
      <h2>Please Login to get started</h2>
      <Link className="login-btn" to="/login">
        Login
      </Link>
    </div>
  );
};

export default DefaultPage;
