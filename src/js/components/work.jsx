import React from 'react';
import cc from '../../img/CC.png'
import ArmChair from '../../img/ArmChair.png';
import DuoDragon from '../../img/DuoDragons.png';

export default function Work() {
  return (
    <section className="work-section">
      <div className="work-container">
        <h1>Projects</h1>
        <div className="proj-container" id="armchair">
          <a href="https://armchair-gm.netlify.com/" className="proj-screenshot left" target="_blank">
            <img className="grow" src={ArmChair} alt="armchair" />
          </a>
          <div className="proj-detail right">
            <div className="proj-title">
              <h2>ArmChair GM </h2>
              <a href="https://github.com/Thaborak/armchair-gm-client" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>redux</span>
              <span>mongo.db</span>
              <span>node.js</span>
            </div>
            <p>{'The ArmChair-GM application allows a user to draft & manage their fantasy football team with a interactive draft board of the top 200 players from FantasyPros.com. '}</p>
            <p className="responsibilities"><b>{'Responsibilities: '}</b>{'This was an individual project where I was responsible for all aspects of a full stack JavaScript application from idea and design to features and functionality.'}</p>
          </div>
        </div>
        <div className="proj-container" id="cc">
          <div className="proj-detail left">
            <div className="proj-title">
              <h2>ConcertConnect</h2>
              <a href="https://github.com/kttm-development" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>redux</span>
              <span>node.js</span>
              <span>mongo.db</span>
            </div>
            <p>{'A full stack concert-based application that allows a user to search, book, and share multiple concert plans. We also utilized JWT for authentication, the Ticketmaster, YouTube & AirBnB API\'s for data, and the Google Maps API for additional functionality.'}</p>
            <p className="responsibilities"><b>{'Responsibilities:'}</b>{'Managed git workflow & deployment, worked on features for both the backend & frontend.'}</p>
          </div>
          <a href="https://concertconnect-client.herokuapp.com/" className="proj-screenshot right" target="_blank">
            <img className="grow" src={cc} alt="concertconnect" />
          </a>
        </div>
        <div className="proj-container" id="duodragons">
          <a href="https://learn-high-valyrian.netlify.com" className="proj-screenshot left" target="_blank">
            <img className="grow" src={DuoDragon} alt="duodragons" />
          </a>
          <div className="proj-detail right">
            <div className="proj-title">
              <h2>DuoDragons</h2>
              <a href="https://github.com/thinkful-ei19/tom-bianca-srp-server" target="_blank">
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
            </div>
            <div className="proj-lang">
              <span>react</span>
              <span>redux</span>
              <span>node.js</span>
              <span>mongo.db</span>
            </div>
            <p>{'A small application designed to teach users Valyrian using a spaced-repetition algorithm. My partner on this project and I, are both fans of the HBO show Game Of Thrones and choose the fictional language Valyrian as an "unique" for the user to learn. '}</p>
            <p className="responsibilities"><b>{'Responsibilities:'}</b>{' I was involved in all aspects of this project from idea generation to implementation.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
