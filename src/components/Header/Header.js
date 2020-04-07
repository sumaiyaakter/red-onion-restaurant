import React from 'react';
import Logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import useAuth from '../Login/useAuth';

const Header = () => {
    const auth = useAuth();

    // handleSignIn
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/';
        })
    }

    // handleSigOut
    const handleSigOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
    })

  }
    return (
        <header className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">

                        <span className="brand__logo col-12 col-lg-3 text-center text-lg-left mb-4 mb-lg-0">
                           <a href="/"> <img src={Logo} alt=""/></a>
                        </span>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-5">
                            <div className="right d-flex align-items-center  float-sm-right mb-3">
                                <span className="shopping-cart mr-5"><a href="/"><FontAwesomeIcon icon={faShoppingCart}/></a></span>
                        
                                {
                                    auth.user ? <button onClick={handleSigOut} className="btn Logout">Logout</button> :
                                    <button onClick={handleSignIn} className="btn">sign up</button>
                                }
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-6 col-lg-4  text-center text-sm-right">
                            {
                                auth.user && <span className="user">{auth.user.name}</span>
                            }
                        </div>
                    </div>
                </div>
        </header>
    );
};

export default Header;