import React, {useState, useEffect} from 'react'
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//TODO: fix image sizes so they are the same/ not HUGE

function DesignImage(props){
    const [currentImage, setCurrentImage] = useState(0)
    const [imgCount, setImageCount] = useState(0)
   
    useEffect(() => {
        if (Array.isArray(props.src)){
           setImageCount(props.src.length)
        }
    },[props])

    function handleShow(num){
        if(currentImage === props.src.length - 1){
            setCurrentImage(0)
        }else if(num === -1 && currentImage >= 1){
            setCurrentImage(currentImage - 1)
        }else{
            setCurrentImage(currentImage + 1)
        }
    }

    function displayImage(id){
        setCurrentImage(id)
    }

    return (
        <div className="design-img__container">
            <div className="design-img--close" onClick={() => props.closeImg()}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
            {imgCount > 1 && Array.isArray(props.src) ?
             (<div className="design-display-container">
                        {props.src.map((item, i) => {
                            return (<img key={i} className={`design-image ${currentImage === i ? 'active' : ''}`} src={item} alt={`${props.imgDesc}_${i}`} />)
                        })}
                        <div className="design-img__description"><p><span>{props.descTitle}</span><br /><br />{props.designDesc}</p></div> 
                <div className="design-display-controls">
                    <div className="design-display-left" onClick={() => handleShow(-1)}><FontAwesomeIcon icon={faChevronLeft} /></div>
                        <div className="dot__container">
                        {props.src.map((item, i) => {
                            return (<div key={i} className={`design-display-dot ${currentImage === i ? 'active' : ''}`} onClick={() => displayImage(i)}></div>)
                        })}
                        </div>
                    <div className="design-display-right" onClick={() => handleShow(1)}><FontAwesomeIcon icon={faChevronRight} /></div>
                </div>
            </div>) : (
            <div className="design-display-container">
                <img src={props.src} alt={props.imgDesc} />
                <div className="design-img__description">
                    <p><span>{props.descTitle}</span><br />{props.designDesc}</p>
                </div>
            </div>)
            }
        </div>
    )
}

export default DesignImage