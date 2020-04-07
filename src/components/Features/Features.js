import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../images/features-1.png';
import Image2 from '../../images/features-2.png';
import Image3 from '../../images/features-3.png';
import Icon1 from '../../images/icons/icon-1.png';
import Icon2 from '../../images/icons/icon-2.png';
import Icon3 from '../../images/icons/icon-3.png';
import './Features.css';

const Features = () => {
    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className="feature__title">
                            <h3>Why you choose us</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum modi a quod ratione commodi.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 feature__wrapper d-md-flex justify-content-between">
                        <div className="feature__item">
                            <img className="feature__img img-fluid" src={Image1} alt=""/>
                            <div className="feature__item--content">
                                <span className="feature__icon"><img src={Icon1} alt=""/></span>
                                <div className="">
                                    <h5><a href="/">Quick Delivery</a></h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque modi, enim expedita delectus.</p>
                                    <a className="link" href="/">see more<span><FontAwesomeIcon icon={faArrowRight}/></span></a>
                                </div>
                            </div>
                        </div>
                        {/* feature item end */}
                        <div className="feature__item">
                            <img className="feature__img img-fluid" src={Image2} alt=""/>
                            <div className="feature__item--content">
                                <span className="feature__icon"><img src={Icon2} alt=""/></span>
                                <div className="">
                                    <h5><a href="/">A Good Auto Responder</a></h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque modi, enim expedita delectus.</p>
                                    <a className="link" href="/">see more<span><FontAwesomeIcon icon={faArrowRight}/></span></a>
                                </div>
                            </div>
                        </div>
                        {/* feature item end */}
                        <div className="feature__item">
                            <img className="feature__img img-fluid" src={Image3} alt=""/>
                            <div className="feature__item--content">
                                <span className="feature__icon"><img src={Icon3} alt=""/></span>
                                <div className="">
                                    <h5><a href="/">Home Delivery</a></h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus neque modi, enim expedita delectus.</p>
                                    <a className="link" href="/">see more<span><FontAwesomeIcon icon={faArrowRight}/></span></a>
                                </div>
                            </div>
                        </div>
                        {/* feature item end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;