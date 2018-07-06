import React from 'react';
import headShot from '../../img/headshot.jpeg'

export default function AboutMe() {
    return (
        <section className="work-section">
            <div className="work-container">
                <h1>About Me</h1>
                <div className="proj-container" id="about">
                    <a className="proj-screenshot left" target="_blank">
                        <img src={headShot} alt="me" />
                    </a>
                    <div className="proj-detail right">
                    <h4>HI</h4>
                            <p> {` I specialize in full-stack JavaScript, but I like to think of myself as tech agnostic. I enjoy learning new programming languages, framworks, and am currently enjoying how to integrate GraphlQl & Apollo into my projects.
          Outside of programming I like to go hiking and finding new trails/parks to explore. I  `}  </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
