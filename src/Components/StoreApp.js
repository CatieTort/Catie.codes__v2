import React from 'react'
import { faJsSquare, faHtml5, faCss3Alt, faSass, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const publicURL = process.env.PUBLIC_URL

function StoreApp(){
    return (
        <div className="work__item">
            <div className="work__item-header"><h2>Store App</h2></div>
            <div className="work__project">
                <div className="work__project--desc">
                    <div className="work__project--desc-title">FullStack CRUD App</div>

                    <div className="work__project--tech"><h4>Technologies used:</h4>
                        <div className="work__project--tech--icons">
                            <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faJsSquare} style={{ color: "#f0db4f" }} /> Javascript ES6</div>
                            <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faHtml5} style={{ color: "#F16529" }} /> HTML</div>
                            <div className="work__project--tech--icons-item">
                                <div className="style-icons">
                                    <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#264de4" }} />
                                    <FontAwesomeIcon icon={faSass} style={{ color: "#cc6699" }} /></div> CSS &amp; Sass
                                </div>
                            <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faReact} style={{ color: "#61DBFB" }} /> React</div>
                            <div className="work__project--tech--icons-item"><img src={`${publicURL}/assets/c-sharp.png`} alt="C-sharp-logo" height="48px" width="48px" style={{ marginBottom: "10px", marginTop: "5px" }} /> C#</div>
                            <div className="work__project--tech--icons-item"><img src={`${publicURL}/assets/dot-net.png`} alt="net-logo" height="48px" width="48px" style={{ marginBottom: "10px", marginTop: "5px" }} />.Net Core</div>
                            <div className="work__project--tech--icons-item"><img src={`${publicURL}/assets/mongo.png`} alt="mongodb-logo" height="55px" style={{ marginBottom: "10px", marginTop: "5px" }} /> MongoDB</div>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    )
}

export default StoreApp