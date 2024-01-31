import React from "react";
import './index.css';
import { Link } from 'react-router-dom'

const SignUp = () => {


  return (
    <>
      <div className="bg-image"></div>
      <div className="bg-overlay"></div>

      <section className="vh-100" >
        <div className=" h-100">
          <div className="row h-100 justify-content-center align-items-center ">
            <div className="col-md-6 col-lg-6">
              <div className="bg-white p-4 rounded shadow">
                <h1 className="h3 mb-3 fw-normal">
                  Sign in to your account
                </h1>
                <form className="mb-3">
                  <div>
                    <label htmlFor="firstName" className="form-label">Your first Name</label>
                    <input type="firstName" name="firstName" id="firstName" className="form-control" placeholder="First Name" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">Your lastName</label>
                    <input type="lastName" name="lastName" id="lastName" className="form-control" placeholder="Last Name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Your email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="name@example.com" required />
                  </div>
                  <div className="py-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="••••••••" required />
                  </div>

                  <button type="submit" className="w-100 btn btn-primary mt-3">Sign Up</button>
                  <p className="mt-2 text-muted">
                    Already have an account  <Link to="/login" className="text-decoration-none">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default SignUp;




