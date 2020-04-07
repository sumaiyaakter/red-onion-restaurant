import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 m-auto text-center">
                        <h1 className="hero__title mb-5">Best food waiting for your belly</h1>
                        <div className="search-form">
                            <form action="#">
                                <div className="input__group d-flex">
                                    <input className="form-control" type="text" placeholder="search food items"/>
                                    <button type="submit" className="btn submit__btn">search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;