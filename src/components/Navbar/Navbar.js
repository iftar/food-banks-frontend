import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="shareiftar-navbar navbar navbar-horizontal navbar-expand-lg navbar-expand-lg navbar-dark bg-default">
      <div className="container">
        <a className="shareiftar-navbar__brand navbar-brand" href="/">Food Banks</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-social" aria-controls="navbar-social" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-social">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="/">Food Banks</a>
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-social" aria-controls="navbar-social" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://www.facebook.com/shareiftar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i>
                <span className="nav-link-inner--text">Facebook</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://twitter.com/shareiftar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                <span className="nav-link-inner--text">Twitter</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://www.instagram.com/shareiftar/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                <span className="nav-link-inner--text">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
