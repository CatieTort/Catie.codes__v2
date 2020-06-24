import React from 'react';
import Logo from './Logo';

function Navbar() {

    return (
        <div className="header">
            <Logo />
            <div className="nav-bar">
                <ul className="nav-bar__list">
                    <li className="nav-bar__list--item">
                        <a className="nav-bar__list--item__link" href="#work" >Work</a>
                    </li>
                    <li className="nav-bar__list--item">
                        <a className="nav-bar__list--item__link" href="#resume" >Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar