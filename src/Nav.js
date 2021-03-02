import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import './Nav.css';

function Navbar() {
    const [ show, handleShow ] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return(
        <div className={`nav ${show && 'nav-black'}`}>
            <div className="nav-contents">
                 <img onClick={() => history.push('./')}
                      className="nav-logo" 
                      src="images/netflixLogo.png"
                      alt="Netflix Logo" />
                 <img onClick={() => history.push('./profile')}
                      className="nav-avatar" 
                      src="images/avatars/avatar-8.png" 
                      alt="Profile Logo" />
            </div>
        </div>
    )
}

export default Navbar;