import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <h2>get in touch</h2>
        <div>
          <a href="mailto:thaborak@gmail.com">
            <i className="fa fa-envelope fa-3x" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/tom-haborak" target="_blank">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          </a>
          <a href="https://github.com/thaborak" target="_blank">
            <i className="fa fa-github fa-3x" aria-hidden="true" />
          </a>
        </div>
        <span>&copy; Tom Haborak 2019</span>
      </div>
    </footer>
  );
}
