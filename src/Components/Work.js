import React, {useState} from 'react'
import Modal from './Modal'
import DesignImage from './DesignImage'
import {image} from '../utils/designDetails'
import { faJsSquare, faHtml5, faCss3Alt, faSass, faReact, faSketch, faInvision } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const publicURL = process.env.PUBLIC_URL

function Work(){
    const [showDesignImage, setShowImage] = useState(false);
    const [designId, setDesignId] = useState('');

    function handleDesignClick(id) {
        setDesignId(id)
        setShowImage(true)
    }

    function closeModal(){
        setShowImage(false)
        setDesignId('')
    }


    const modal = showDesignImage ? (
        <Modal closeImg={closeModal}>
            <DesignImage
                src={image[designId].src}
                imgDesc={image[designId].altDesc}
                designDesc={image[designId].description}
                closeImg={closeModal}
            />
        </Modal>
    ) : null;

   

    return (
        <div id="work" className="work__container">
            <div className="work__item">
                <div className="work__item-header">
                    <h2>Hookit</h2><h3>Sponsorship Analytics &amp; Valuation</h3>
                </div>
                <div className="work__project">
                    <img src={`${publicURL}/assets/Mockup.png`} alt="Pro Account images" />
                    <div className="work__project--desc">
                        <div className="work__project--desc-title">Pro Account</div>
                        <p>A web based, mobile first React-Redux application consuming .NET REST APIs</p>
                        <p>A tool designed for pro-athletes to authenticate their social network accounts and recieve detailed insights.</p>
                        <p>Pro-Athletes were provided with:
                            <ul>
                                <li>Data to analyze social performance to improve and become a better ambassador for their sponsors.</li>
                                <li>Rank compared to other athletes and influencers in their sport or industry when it comes to social engagements, followers, and total posts.</li>
                                <li>Detailed insight into who their fans are, what they like, and where they are from.</li>
                            </ul>
                        </p>
                        <p>Main business goal was to authenticate more social accounts and provide detailed data to brand sponsors.</p>
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
                                <div className="work__project--tech--icons-item"><img src={`${publicURL}/assets/redux.svg`} alt="redux-logo" height="48px" width="48px" style={{ marginBottom: "10px", marginTop: "5px" }} /> Redux</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work__project design">
                    <h3 className="work__project--desc-title">Design</h3>
                    <div className="work__project--desc design">
                        All the details here.

                         <div className="work__project--tech"><h4>Technologies used:</h4>
                            <div className="work__project--tech--icons">
                                <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faSketch} style={{ color: "#fda902" }} /> Sketch</div>
                                <div className="work__project--tech--icons-item"><FontAwesomeIcon icon={faInvision} style={{ color: "#ff3366" }} /> InVision</div>
                                <div className="work__project--tech--icons-item"><img src={`${publicURL}/assets/framerX.png`} alt="framerX icon" height="48px" style={{marginBottom: "10px"}}/> FramerX</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="design-img__grid-container">
                        {image.map((item, index) => {
                            if (item.multiple === true) {
                                return (<div key={index} className="design-img__grid--item" onClick={() => handleDesignClick(index)} style={{ backgroundImage: `url(${item.src[0]})` }}></div>)
                            } else {
                                return (<div key={index} className="design-img__grid--item" onClick={() => handleDesignClick(index)} style={{ backgroundImage: `url(${item.src})` }}></div>)
                            }
                        })}
                    </div>
                </div>
            </div>
            {modal}
        </div>
    )
}

export default Work