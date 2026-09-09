
import React from 'react';

export default function About() {
  return (
    <div className="container my-4">

      {/* About Heading */}
      <div className="text-center mb-4">
        <h1>About MyTextUtil</h1>
        <p className="lead">
          A simple and useful text utility application built with React.js.
        </p>
      </div>

      {/* Accordion */}
      <div className="accordion" id="aboutAccordion">

        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is MyTextUtil?
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              <strong>MyTextUtil</strong> is a React-based text utility
              application that helps users perform different operations
              on their text quickly and easily.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Convert text to Uppercase</li>
                <li>Convert text to Lowercase</li>
                <li>Remove extra spaces</li>
                <li>Copy text easily</li>
                <li>Clear text with one click</li>
                <li>Count words and characters</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Technologies Used
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              <div className="row">

                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h5 className="card-title">React.js</h5>
                      <p className="card-text">
                        Used to build the user interface and application
                        components.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h5 className="card-title">JavaScript</h5>
                      <p className="card-text">
                        Used to add functionality and perform text
                        operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h5 className="card-title">Bootstrap</h5>
                      <p className="card-text">
                        Used to create a responsive and attractive design.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Why use MyTextUtil?
            </button>
          </h2>

          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              MyTextUtil is designed to make common text operations fast,
              simple and accessible. You can modify your text without
              installing any additional software.
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-5">
        <h3>Simple. Fast. Useful. 🚀</h3>
        <p className="text-muted">
          Built with React.js for learning and practical web development.
        </p>
      </div>

    </div>
  );
}

