import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './ItemDetails.css'
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const ItemDetails = (props) => {
    const {itemkey} = useParams();
    const [products, setProducts] = useState (fakeData);
    const [count, setCount] = useState(0);

    
    
    const item = products.find(item => item.key === itemkey);

    useEffect(() => {
        fetch('https://powerful-tor-19593.herokuapp.com/product'+itemkey)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])
    const auth = useAuth();
 

    return (
        <div className="menu__details">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu__details--item">
                            <div className="menu__details--content">
                                <h1 className="mb-3">{item.name}</h1>
                                <p className="mb-5">{item.details}</p>
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
                                     <h3 className="mr-5">$ {item.price}</h3>
                                     <div className="count d-flex">
                                        <button className="decrements"  onClick={ () => setCount(count <= 1 ? 0 : count - 1)}>-</button>
                                        <p>{count}</p>
                                        <button className="increments" onClick={ () => setCount(count + 1)}>+</button>
                                    </div>
                                </div>
                                <Link to="/shipment">
                                {
                                    auth.user ?
                                    <button className="btn">proceed checkout</button>
                                    :
                                    <button className="btn add_btn"><span><FontAwesomeIcon icon={faCartArrowDown}/></span> add</button>
                                }
                                </Link>
                            </div>
                            <div className="menu__details--img">
                            <img src={item.img} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default ItemDetails;