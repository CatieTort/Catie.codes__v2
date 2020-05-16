import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DesignImage(props){
    return (
        <div className="design-img__container">
            <div className="design-img--close">
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            <img src={props.src} alt={props.imgDesc} />
            <div className="design-img__description">
                {props.designDesc}
            </div>
        </div>
    )
}

export default DesignImage