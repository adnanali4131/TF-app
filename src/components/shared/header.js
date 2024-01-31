import React from 'react';
import logo from "../../assets/logo/logo.png"
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn = token !== null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <section className="container-fluid navbar navbar-expand-lg navbar-light bgNav">
      <nav className="container">
        <div className="d-flex w-100 justify-content-between">
          <div className="d-flex">
            <a className="navbar-brand" href="/">
              <img src={logo} width={50} height={50} className="rounded rounded-circle" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
            <div className="form-inline my-2 my-lg-0 px-4">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="btn btn-outline-danger my-2 my-sm-0 px-4">
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-outline-success my-2 my-sm-0 px-4">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
