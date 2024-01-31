import React from "react";

const Features = () => {
  return (
    <div className="container-fluid py-4 ">
      <div className="container py-4 bg-light  rounded rounded-lg">
        <div className=" d-flex py-3 justify-content-center">
          <h2 className="py-4 mb-4">Features</h2>
        </div>
        <div className="row py-4">
          <div className="col-md-4 mb-3">
            <div className="card h-100 py-4">
              <div className="card-body">
                <h3 className="card-title">Real time detection</h3>
                <p className="card-tex py-4">
                  Our app employs the latest Tensorflow.JS technology to achieve real-time sign language detection. Witness the accuracy and speed as the app interprets gestures and converts them into meaningful text.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 py-4">
              <div className="card-body">
                <h3 className="card-title">User-Friendly Interface</h3>
                <p className="card-text py-4">
                  Experience a sleek and intuitive user interface built with React.JS. Navigating through the app is a breeze, ensuring a seamless and enjoyable user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 py-4">
              <div className="card-body">
                <h3 className="card-title">Multilingual Support</h3>
                <p className="card-text py-4">
                  We understand the diversity of sign languages around the world. Our app is equipped with multilingual support, allowing users to choose from a variety of sign languages and dialects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
