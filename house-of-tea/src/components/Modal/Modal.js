// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Make sure to create this CSS file for styling

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-body">
          {message}
        </div>
        <button className="modal-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
