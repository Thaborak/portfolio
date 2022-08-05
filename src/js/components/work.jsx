import React from 'react';
import stn from '../../img/stn.png'
import pp from '../../img/pp.png';
import mufg from '../../img/mufg.png';
import Daix from '../../img/daixio.png'

export default function Work() {
  return (
    <section className="work-section">
      <div className="work-container">
        <h1>Work Experience</h1>
        <div className="proj-container" id="cc">
          <div className="proj-detail left">
            <div className="proj-title">
              <h2>Station Casinos</h2>
              <br /><i className="bold">Consultant - Software Engineer II</i>
              <br /><i className="label">December 2021 - July 2022</i>
            </div>
            <div className="proj-lang">
              <span>next.js</span>
              <span>nest.js</span>
              <span>react native</span>
              <span>mongo.db</span>
            </div>
            <p>{`Worked on the Mobile team, and then later on the Internal/R&D team. I worked across the whole stack at Stations. Ranging from a reworked company wide auth backend, to a custom micro-frontend framework in next.js.`}</p>
          </div>
          <a href="https://www.stncash.com/" className="proj-screenshot">
            <img className="grow" src={stn}  alt="stncash" />
          </a>
        </div>
        <div className="proj-container" id="PayPal">
          <a href="https://www.paypal.com/ca/home" className="proj-screenshot">
            <img className="grow" src={pp} alt="paypal" />
          </a>
          <div className="proj-detail right">
            <div className="proj-title">
              <h2>PayPal</h2>
              <a href="https://github.com/krakenjs/kraken-js">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
              <br /><i className="bold">Consultant - Senior Software Engineer</i>
              <br /><i className="label">February 2021 - November 2021</i>

            </div>
            <div className="proj-lang">
              <span>node.js</span>
              <span>docker</span>
              <span>mongo.db</span>
              <span>sematext</span>
            </div>
            <p>{`Member of the Web Platform team building out the infrastructure and experience for our product teams at PayPal. Built, maintained, and supported the Framework, tools, CI/CD, pipelines, containerization.`}</p>
          </div>
        </div>
        <div className="proj-container" id="mufg">
 
          <div className="proj-detail left">
            <div className="proj-title">
              <h2>MUFG Bank</h2>
              <br /><i className="bold">Consultant - Software Engineer</i>
              <br /><i className="label">October 2019 - December 2020</i>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>redux</span>
              <span>node.js</span>
              <span>ms sql</span>
            </div>
            <p>{`Worked on a multi-million-dollar greenfield project with numerous global stakeholders throughout the bank. Consolidated various compliance procedures throughout the bank into a workflow engine written in TypeScript.`}</p>
          </div>
          <a href="https://www.mufgamericas.com/" className="proj-screenshot">
            <img className="grow" src={mufg} alt="mufg" />
          </a>
        </div>
        <div className="proj-container" id="uptick">
          <a href="http://daix.io/" className="proj-screenshot">
            <img className="grow" src={Daix} alt="concertconnect" />
          </a>
          <div className="proj-detail right">
            <div className="proj-title">
              <h2>Daix.io</h2>
              <br /><i className="bold">Software Engineer</i>
              <br /><i className="label">July 2018 - July 2019</i>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>redux</span>
              <span>node.js</span>
              <span>mysql</span>
              <span>golang</span>
              <span>aws</span>
              <span>docker</span>
            </div>
            <p>{'A full stack cryptocurrency analytics platform providing realtime pricing, sentiment, and news data from hundreds of cryptocurrencies. Lead javascript development on frontend(react) and backend(node.js). '}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
