import React from 'react'
import { createPortal } from 'react-dom';

const MODAL = document.getElementById('modalRoot');

const Modal = ({ children, closeImg, style }) => {
    return createPortal(
        <div className="modal" style={style}>{children}</div>
        , MODAL
    )
}

export default Modal