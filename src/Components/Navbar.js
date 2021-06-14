import React from 'react'
import Logo from '../logo.png';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#"><img className="Logo" src={Logo} alt="Logo..."></img> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: 'white'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">                    
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">                    
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">                    
                        <a className="nav-link" href="#">Experience</a>
                    </li>
                    <li className="nav-item">                    
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">                    
                        <a className="nav-link" href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
