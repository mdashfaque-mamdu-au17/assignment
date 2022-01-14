import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpScreen from './screens/SignupScreen/SignupScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import DefaultPage from './screens/defaultPage/DefaultPage';

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <BrowserRouter>
      <Routes>
        {userInfo ? (
          <Route path="/" element={<HomeScreen />} />
        ) : (
          <Route path="/" element={<DefaultPage />} />
        )}

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
