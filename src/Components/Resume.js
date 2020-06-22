import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const publicURL = process.env.PUBLIC_URL

function Resume(){

    return (
        <div className="resume__container" id="resume">
            <div>
                <div className="resume__download-icon"><FontAwesomeIcon icon={faDownload} /></div>
                <div className="resume__download-btn">Download Resume</div>
            </div>
            <img src={`${publicURL}/assets/Resume-2020.jpg`} alt="2020 resume"/>
        </div>
    )
}

export default Resume