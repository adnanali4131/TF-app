import React from "react";
import './index.css';

const Login = () => {
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
                    <label htmlFor="email" className="form-label">Your email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="name@example.com" required />
                  </div>
                  <div className="py-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="••••••••" required />
                  </div>
                  <div className="d-flex pt-4 justify-content-between">
                    <div className="form-check">
                      <input id="remember" type="checkbox" className="form-check-input" required />
                      <label htmlFor="remember" className="form-check-label">Remember me</label>
                    </div>
                    <a href="#" className="text-decoration-none">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-100 btn btn-primary mt-3">Sign in</button>
                  <p className="mt-2 text-muted">
                    Don’t have an account yet? <a href="#" className="text-decoration-none">Sign up</a>
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

export default Login;




