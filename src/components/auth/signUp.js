import React, { useState } from "react";
import './index.css';
import { Link, useNavigate } from 'react-router-dom'
import ErrorModal from "../modals/errorModal";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://tf-be.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json(); // Parsing the response body

      if (!response.ok) {
        setErrorMessage(data.error || 'An error occurred'); // Extract the error message
        setShowModal(true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setShowModal(true);
      console.log("error++>", error);
    } finally {
      setLoading(false);
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

      <section className="vh-100" >
        <div className=" h-100">
          <div className="row h-100 justify-content-center align-items-center ">
            <div className="col-md-6 col-lg-6">
              <div className="bg-white p-4 rounded shadow">
                <h1 className="h3 mb-3 fw-normal">
                  Sign in to your account
                </h1>
                <form className="mb-3" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="firstName" className="form-label">Your first Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">Your lastName</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Your email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="py-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder=""
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="w-100 btn btn-primary mt-3">
                    {!loading ? "Sign Up" : <span className="spinner-border" role="status"></span>}
                  </button>

                  <p className="mt-2 text-muted">
                    Already have an account <Link to="/login" className="text-decoration-none">Login</Link>
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

export default SignUp;




