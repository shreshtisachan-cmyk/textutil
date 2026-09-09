
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode === 'dark' ? 'bg-dark' : 'bg-light'
      }`}
    >

      <div className="container-fluid">

        {/* Brand */}
        <Link
          className={`navbar-brand ${
            props.mode === 'dark' ? 'text-light' : 'text-dark'
          }`}
          to="/"
        >
          {props.title}
        </Link>


        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navbar links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Home */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.mode === 'dark' ? 'text-light' : 'text-dark'
                }`}
                to="/"
              >
                Home
              </Link>
            </li>


            {/* about */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  props.mode === 'dark' ? 'text-light' : 'text-dark'
                }`}
                to="/about"
              >
                {props.abouttitle}
              </Link>
            </li>

          </ul>


          {/* Dark mode switch */}
          <div
            className={`form-check form-switch ${
              props.mode === 'dark' ? 'text-light' : 'text-dark'
            }`}
          >

            <input
              className="form-check-input"
              onChange={props.toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              checked={props.mode === 'dark'}
            />

            <label
              className="form-check-label"
              htmlFor="switchCheckDefault"
            >
              {props.mode === 'dark'
                ? 'Enable light mode'
                : 'Enable dark mode'}
            </label>

          </div>

        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttitle: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};


Navbar.defaultProps = {
  abouttitle: 'about'
};

