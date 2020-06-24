import React from 'react'

const publicURL = process.env.PUBLIC_URL

function Resume(){

    return (
        <div className="resume__container" id="resume">
            <img src={`${publicURL}/assets/Dev_res.jpg`} alt="2020 resume"/>
        </div>
    )
}

export default Resume