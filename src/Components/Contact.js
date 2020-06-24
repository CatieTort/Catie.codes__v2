import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

const currentYr = moment().year()

function Contact(){
   
    return (
        <div className="contact__background" id="contact">
            <div className="footer">
                <div><a href='mailto:catie@catie.codes'><FontAwesomeIcon icon={faEnvelope} />Catie@catie.codes</a></div>
                <div>Copyright &#169; Cathleen Tortorella {currentYr}</div>
            </div>
        </div>
    )
}

export default Contact