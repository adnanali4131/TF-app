import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import SignUp from './components/auth/signUp';
import Login from './components/auth/login';
import LandingPage from './components/landingPage';
import "./App.css";
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          } />

          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
