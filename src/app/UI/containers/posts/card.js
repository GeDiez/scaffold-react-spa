import React from 'react';

const card = () => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          Component
        </p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          Content for post
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">Save</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
      </footer>
    </div>
  );
};

export default card;