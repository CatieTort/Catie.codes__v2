import React from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const publicURL = process.env.PUBLIC_URL

function About(){

    

    return (
        <section className="section-about">
            <div className="section-about--1">
                <div className="intro-img">
                    <img src={`${publicURL}/assets/square.jpg` }alt="Catie's headshot" />
                </div>
                <div className="dev">
                    <h2>Front End Developer &amp; UI/UX Designer</h2>
                    <div className="dev__desc">
                        <p>with a passion to create beautiful user interfaces with clear and effective reusable code using the latest
                            UI/UX design standards.</p>
                        <p>Design has always drawn my interest. Being able to convey meaning through shapes, colors, images and
                        typography is
                            powerful.</p>
                        <p>I design and develop my code with the end user in mind. When they get to this page what decisions are
                        available? What is confusing? How
                        can I make it clear to find what they are looking for and achieve business goals? I enjoy solving these
                            problems and improving user experiences.</p>
                    </div>
                    <div className="btn-container">
                        <a href="https://www.linkedin.com/in/catietortorella/" target="_blank" rel='noopener noreferrer' className="icon"><FontAwesomeIcon icon={faLinkedin}  /></a>
                        <a href="https://github.com/CatieTort" target="_blank" rel='noopener noreferrer' className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

