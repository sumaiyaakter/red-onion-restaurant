import React from 'react';
import Auth from './useAuth';
import googleIcon from '../../images/icons/google.png';
import  './Login.css';


const Login = () => {
    const auth = Auth();
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
        <div className="login text-center text-md-left">
           <div className="container">
               <div className="row">
                   <div className="col-12">
                   <h1>Sign up with Google</h1>
                    {
                        auth.user ? <button onClick={handleSigOut} className="btn">Logout</button> :
                        <button onClick={handleSignIn} className="btn"><span className="google_icon"><img src={googleIcon} alt=""/></span> Sign up with Google</button>
                    }
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Login;