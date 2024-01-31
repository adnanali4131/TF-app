import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import SignUp from './components/auth/signUp';
import Login from './components/auth/login';

import "./App.css";



function App() {

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
