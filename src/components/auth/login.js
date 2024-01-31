import React, { useState } from "react";
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import ErrorModal from "../modals/errorModal";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false)


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch('https://tf-be.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setShowModal(true);
    } finally {
      setLoading(false)
    }
  };


  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };
  return (
    <>
      <div className="bg-image"></div>
      <div className="bg-overlay"></div>

      <section className="vh-100">
        <div className="h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="bg-white p-4 rounded shadow">
                <h1 className="h3 mb-3 fw-normal">Sign in to your account</h1>
                <form className="mb-3" onSubmit={handleLogin}>
                  <div>
                    <label htmlFor="email" className="form-label">Your email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="name@example.com" required
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="py-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="" required
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="d-flex pt-4 justify-content-between">
                    <div className="form-check">
                      <input id="remember" type="checkbox" className="form-check-input" required />
                      <label htmlFor="remember" className="form-check-label">Remember me</label>
                    </div>
                    <a href="#" className="text-decoration-none">Forgot password?</a>
                  </div>

                  <button type="submit" className="w-100 btn btn-primary mt-3">
                    {!loading ? "Sign in" : <span className="spinner-border" role="status"></span>}
                  </button>

                  <p to="/signup" className="mt-2 text-muted">
                    Don’t have an account yet? <Link to="/signup" className="text-decoration-none">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Error Modal */}
      <ErrorModal show={showModal} message={errorMessage} onHide={handleCloseModal} />
    </>
  );
};
export default Login;




