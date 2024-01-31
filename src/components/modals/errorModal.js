import React from 'react';

const ErrorModal = ({ show, message, onHide }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} id="errorModal" tabIndex="-1" aria-labelledby="errorModalLabel" aria-hidden={!show} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="errorModalLabel">Error</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            {message}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
