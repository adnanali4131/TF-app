import React from "react";

const Works = () => {
  return (
    <div className="container-fluid py-4">
      <div className="container bg-light rounded rounded-lg py-4">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3 ">
            <div className="card h-100 ">
              <div className="card-body justify-content-center">
                <h2 className="card-title py-3">Gesture Recognition:</h2>
                <p className="card-text pb-3">
                  Tensorflow.JS utilizes advanced machine learning algorithms to recognize and interpret sign language gestures in real time. The model is trained to identify a wide range of signs, ensuring comprehensive coverage.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 ">
              <div className="card-body">
                <h2 className="card-title py-3">React.JS Integration:</h2>
                <p className="card-text pb-3">
                  The power of React.JS enhances the user experience by providing a responsive and dynamic interface. Enjoy smooth transitions and updates as the app processes and displays real-time sign language interpretations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
