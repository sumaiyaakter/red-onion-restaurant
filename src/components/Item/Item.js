import React  from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { key, name, img, desc, price } = props.items


    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single__item">
                <img src={img} alt=""/>
                <div className="single__item--content">
                    <h3><Link to={"/item/" + key}>{name}</Link></h3>
                    <p>{desc}</p>
                    <h4> ${price}</h4>
                </div>
            </div>
        </div>
               
    );
};

export default Item;









