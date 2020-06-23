import React, {useState} from 'react'
import Modal from './Modal'
import DesignImage from './DesignImage'
import Hookit from './Hookit'
import {image} from '../utils/designDetails'

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
                descTitle={image[designId].descTitle}
                designDesc={image[designId].description}
                multiple={image[designId].multiple}
                closeImg={closeModal}
            />
        </Modal>
    ) : null;

   

    return (
        <div id="work" className="work__container">
           <Hookit handleClick={handleDesignClick}/>
            {modal}
        </div>
    )
}

export default Work