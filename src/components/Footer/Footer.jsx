import React from 'react';
import './Footer.scss';
const Footer=()=>{
    return(
        <footer>
            <div className="footer-links">
                <a href="#">Terms & Conditions</a>|{' '}
                <a href="#">Privacy Policy</a>|{' '}
                <a href="#">Contact</a>
            </div>
            <div className="footer-copy">
                Copright &copy; Example.com 2015
            </div>
        </footer>
    );
};
export default Footer;