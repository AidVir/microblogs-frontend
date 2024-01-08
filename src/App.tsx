import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/page/LoginPage";
import Header from "./components/Header";
import RegisterPage from "./components/page/RegisterPage";
import HomePage from "./components/page/HomePage";

const App = () => {

  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </div>
  );
}

export default App;
