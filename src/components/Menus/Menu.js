import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Item from '../Item/Item';
import './Menu.css';
const Menu = () => {
    
    const [item, setItem] = useState(fakeData);
    const [activeMenu, setActiveMenu] = useState("breakfast");

    const selectedItem =(value) =>{
        setItem(fakeData.filter(item => item.category === value));
        setActiveMenu(value);
    }
    useEffect(()=> {
        selectedItem('breakfast')
    }, [])

    return (
        <div className="menu__item">
            <div className="container">
                <h6>{item.name}</h6>

                <div className="row">
                    <div className="col-12">
                      
                        <div className="tab__list">
                                <li  onClick={()=> selectedItem ("breakfast") } >
                                    <span className={`${activeMenu === "breakfast" ? "active" : " "}`}>
                                        breakfast
                                    </span>
                                </li>
                                <li  onClick={()=> selectedItem ("lunch") } >
                                    <span className={`${activeMenu === "lunch" ? "active" : " "}`}>
                                        lunch
                                    </span>
                                </li>
                                <li  onClick={()=> selectedItem ("dinner") } >
                                    <span className={`${activeMenu === "dinner" ? "active" : " "}`}>
                                        dinner
                                    </span>
                                </li>
                        </div>
                    </div>
                </div>

                <div className="row">
                   {item.map(item => <Item 
                   items = {item} ></Item>)}
                </div>

                <div className="row">
                   <div className="col-12">
                        <button className="btn  checkout-btn disabled">checkout your food</button>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default Menu;

