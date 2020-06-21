import React from 'react'

const publicURL = process.env.PUBLIC_URL

function Resume(){

    return (
        <div className="resume__container" id="resume">
            <div>
                <div className="resume__download-btn">Download Resume</div>
            </div>
            <img src={`${publicURL}/assets/Resume-2020.png`} alt="2020 resume"/>
        </div>
    )
}

export default Resume