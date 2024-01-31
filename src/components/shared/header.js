import React from "react";
import logo from "../../assets/logo/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="container-fluid navbar navbar-expand-lg navbar-light bgNav">
      <nav class="container ">
        <div className="d-flex w-100  justify-content-between">
          <div className="d-flex">
            <a class="navbar-brand" href="/">
              <img src={logo} width={50} height={50} className="rounded rounded-circle" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <ul class="navbar-nav m-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>

          <div class="d-flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">

            <form class="form-inline my-2 my-lg-0 px-4">
              <Link to="login" class="btn btn-outline-success my-2 my-sm-0 px-4" type="submit">
                logIn
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header