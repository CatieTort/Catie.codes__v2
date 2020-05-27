import React from 'react'
import { faJsSquare, faHtml5, faCss3Alt, faSass, faReact, faNodeJs, faAws, faSketch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const publicURL = process.env.PUBLIC_URL

function AnthemElectric(props){
    return (
        <div className="work__item">
            <div className="work__item-header"><h2>Anthem Electric</h2></div>
            <div className="work__project">
                <img src={`${publicURL}/assets/anthem-mockup.png`} alt="Anthem Electric Mockup" style={{borderRadius: "3px"}}/>
                <div className="work__project--desc">
                    <div className="work__project--desc-title">Business website</div>
                        <p>MERN stack website for electrician business using Yelp GraphQL, server-side &amp; client-side rendering, client payment portal with Stripe</p>
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
                            <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faNodeJs} style={{ color: "#3C873A" }} /> Node.js</div>
                            <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faAws} style={{ color: "#ff9900" }} /> AWS</div>
                        </div>
                    </div>                       
                </div>    
            </div>
            <div className="work__project design">
                <h3 className="work__project--desc-title">Design</h3>
                <div className="work__project--desc design">
                    <p>I designed some stuff</p>
                    <div className="work__project--tech"><h4>Technologies used:</h4>
                        <div className="work__project--tech--icons">
                            <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faSketch} style={{ color: "#fda902" }} /> Sketch</div>
                        </div>
                    </div>
                    <div className="design-img__grid-container">
                        {/* <div className="design-img__grid--item__container" onClick={() => props.handleClick(index)}>
                        <div className="design-img__grid--item-overlay"><div>{item.descTitle}</div></div>
                        <div key={index} className="design-img__grid--item" style={{ backgroundImage: `url(${item.src})` }}></div></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnthemElectric