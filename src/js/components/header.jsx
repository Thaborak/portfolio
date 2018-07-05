import React from 'react';
import reactImg from '../../img/react.png';
import nodeImg from '../../img/node.png';
import jqueryImg from '../../img/jquery.png';
import jsImg from '../../img/js.jpg';
import pyImg from '../../img/py.png';
import htmlImg from '../../img/html.png';
import cssImg from '../../img/css.png';
import mongoImg from '../../img/mongodb.png';
import sqlImg from '../../img/postgres.png';
import graphqlImg from '../../img/graphql.svg';
import apolloImg from '../../img/apollo.png';




export default function Header() {
  return (
    <header className="head-section">
      <div className="intro-head">
        <h1>Tom Haborak</h1>
        <h2>Software Engineer</h2>
        <h3>New York, NY</h3>
        <h4>thaborak@gmail.com</h4>
        <div className="intro-social">
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
      </div>
      <div className="intro-content">
        <p>
          {'Hi! I\'m Tom, a software engineer '}
          {`skilled in writing clean, and scalable code.`}
        </p>
        <div className="skills-section">
          <div className="skills-lang">
            <h3>languages:</h3>
            <img src={jsImg} alt="javascript" />
            <img src={pyImg} alt="python" />
            <img src={htmlImg} alt="html" />
            <img src={cssImg} alt="css" />
          </div>
          <div className="skills-framework">
            <h3>frameworks:</h3>
            <img src={reactImg} alt="react" />
            <img src={nodeImg} alt="node" />
            <img src={jqueryImg} alt="jquery" />
            <img src={graphqlImg} alt="graphql" />
            <img src={apolloImg} alt="apollo" />
          </div>
          <div className="skills-databases">
            <h3>Databases:</h3>
            <img src={mongoImg} alt="mongo" />
            <img src={sqlImg} alt="postgres" />
          </div>
        </div>
      </div>
    </header>
  );
}
