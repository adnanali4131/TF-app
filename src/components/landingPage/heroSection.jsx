import React from "react";
import heroImage from "../../assets/auth/hands.jpg"
import './HeroSection.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="my-4 container-fluid ">
      <div className="container mx-auto row border border-1 rounded py-4 bg-light">
        <div className="col-md-6">
          <div className="">
            <img src={heroImage} alt="img" className="w-100 h-100" />
            <Link to="/home" className="btn py-2 my-2 block w-100 btn-primary">
              <span className="h4">
                {`Lets talk`}
              </span>
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center py-4">
          <p>
            Welcome to our Real-Time Sign Language Detection App with React.JS and Tensorflow.JS!
            Experience the power of cutting-edge technology as we bring you a seamless fusion of React.JS and Tensorflow.JS,
            revolutionizing the way we communicate with sign language. Our app is designed to provide real-time sign language interpretation,
            making communication accessible for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
