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
        {/* <h3>New York, NY</h3> */}
        <h4>thaborak@gmail.com</h4>
        <div className="intro-social">
          <a href="mailto:thaborak@gmail.com">
            <i className="fa fa-envelope fa-3x" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/tom-haborak">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          </a>
          <a href="https://github.com/thaborak">
            <i className="fa fa-github fa-3x" aria-hidden="true" />
          </a>
          <a href="https://angel.co/thomas-haborak">
            <i class="fa fa-angellist fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="intro-content">
        <p>
          {'Hi! I\'m Tom, a software engineer '}
          {`skilled in writing clean and scalable code.`}
        </p>
        <div className="skills-section">
          <div className="skills-lang">
            <h3>languages:</h3>

            <div className="tooltip">
              <img className="grow" src={jsImg} alt="javascript" />
              <span class="tooltiptext">JavaScript</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={pyImg} title="this will be displayed as a tooltip" alt="python" />
              <span class="tooltiptext">Python</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={htmlImg} alt="html" />
              <span class="tooltiptext">Html</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={cssImg} alt="css" />
              <span class="tooltiptext">CSS</span>
            </div>
          </div>
          <div className="skills-framework">
            <h3>frameworks:</h3>
            <div className="tooltip" v>
              <img className="grow" src={reactImg} alt="react" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={nodeImg} alt="node" />
              <span class="tooltiptext">Node.js</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={jqueryImg} alt="jquery" />
              <span class="tooltiptext">Jquery</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={graphqlImg} alt="graphql" />
              <span class="tooltiptext">GraphQL</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={apolloImg} alt="apollo" />
              <span class="tooltiptext">Apollo</span>
            </div>
          </div>
          <div className="skills-databases">
            <h3>databases:</h3>
            <div className="tooltip">
              <img className="grow" src={mongoImg} alt="mongo" />
              <span class="tooltiptext">MongoDB</span>
            </div>
            <div className="tooltip">
              <img className="grow" src={sqlImg} alt="postgres" />
              <span class="tooltiptext">Postgres SQL</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
