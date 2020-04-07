import React from 'react';
import Logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-md-flex justify-content-between align-items-center">
                        <span className="footer__logo"><img src={Logo} alt=""/></span>
                        <div className="">
                            <div className="d-sm-flex justify-content-center justify-content-lg-start">
                                <ul className="footer__widget">
                                    <li>about our food</li>
                                    <li>read our blog</li>
                                    <li>sign up to deliver </li>
                                    <li>add your restaurant</li>
                                </ul>
                                <ul className="footer__widget">
                                    <li>get help</li>
                                    <li>read our blog</li>
                                    <li>sign up to deliver </li>
                                    <li>add your restaurant</li>
                                </ul>
                            </div>
                            <ul className="footer__menu d-flex justify-content-center justify-content-md-start">
                                <li>privacy policy</li>
                                <li>terms of Use</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;