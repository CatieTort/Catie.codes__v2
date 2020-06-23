import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const rootURL = 'http://localhost:8080'
const publicURL = process.env.PUBLIC_URL

function Resume(){

    return (
        <div className="resume__container" id="resume">
            <div>
                <div className="resume__download-icon"><FontAwesomeIcon icon={faDownload} /></div>
                <a className="resume__download-btn" href={`${rootURL}/download-resume`} download>Download Resume</a>
            </div>
            <img src={`${publicURL}/assets/Resume-2020.jpg`} alt="2020 resume"/>
        </div>
    )
}

export default Resume