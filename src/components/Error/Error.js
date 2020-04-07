import React from 'react';
import ErrorImg from '../../images/error.png';
import './Error.css'

const Error = () => {
    return (
        <div className="Error">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <span className="mb-5"><img className="img-fluid" src={ErrorImg} alt=""/></span>
                        <h4>Something went wrong</h4>
                        <p>We're deeply sorry, there are no product about this data</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;