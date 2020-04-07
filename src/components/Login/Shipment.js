import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';

import { Elements } from '@stripe/react-stripe-js';

import {getDatabaseCart, clearLocalShoppingCart} from '../../utilities/databaseManager';
import CheckoutForm from '../CheckourForm/CheckourForm';
import { loadStripe } from '@stripe/stripe-js';
import  './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const [shipmentInfo, setShipmentInfo] = useState(null);
    const [orderId, setOrderId] = useState(null)

    const auth = useAuth();

    const stripePromise = loadStripe('pk_test_50WZVmKEgfF7W7nAI6PH3m7k00Jja0ng8f');


    const onSubmit = data => { 
      setShipmentInfo(true)
     }

     const handlePlaceOrder = (payment) => {
           // TOOL:samad move this after payment
           const saveCart = getDatabaseCart();
           const orderDetails ={
             email: auth.user.email,
             cart:saveCart,
             shipment: shipmentInfo,
             paymentMethod: payment,
           };
     
           fetch('https://powerful-tor-19593.herokuapp.com/placeOrder', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(orderDetails)
           })
           .then(res => res.json())
           .then(order => {
             setOrderId(order._id)
            clearLocalShoppingCart();
           })
     }

  
    return (
      <div className="shipment_form  text-center text-md-left">

       <div className="container">
         <div className="row">
           <div style={{display: shipmentInfo && 'none'}} className="col-12 col-lg-6">
           <h2>Edit Delivery Details</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="form-group">
                <input name="name" defaultValue={auth.user.name} className="form-control" ref={register({ required: true })} placeholder="name"/>
                  {
                    errors.name && <span className="error-message">name is required</span>
                  }
              </div>

              <div className="form-group">   
                  <input name="email"  defaultValue={auth.user.email}  className="form-control" ref={register({ required: true })} placeholder="email"/>
                  {
                    errors.email && <span className="error-message">email is required</span>
                  }
              </div>
              <div className="form-group">
                  <input name="address" className="form-control" ref={register({ required: true })} placeholder="Deliver to door"/>
                  {errors.address && <span className="error-message">address is required</span>}
              </div>

              <div className="form-group">
                  <input name="homeNo" className="form-control"  ref={register({ required: true })} placeholder="107 RD No 12"/>
                  {errors.homeNo && <span className="error-message">Road No is required</span>}
              </div>

              <div className="form-group">
                  <input name="flatNo" className="form-control" ref={register({ required: true })} placeholder="Flat, suite or flor"/>
                  {errors.flatNo && <span className="error-message">flatNo is required</span>}
              </div>

              <div className="form-group">
              <textarea class="form-control" name="instrunCiton" placeholder="Add Delivery Instruction " rows="3" ref={register({ required: true })}></textarea>
                  {errors.instrunCiton && <span className="error-message">Message is required</span>}
              </div>
           
                <button type="submit" className="submit">Save and Continue</button>
            </form>
           </div>

            <div  
              style={{display: shipmentInfo ? 'block' : 'none'}} className="col-12 col-lg-6">
                <div className="text-center mb-5">
                  {
                  orderId && <div>
                    <h5>Thank you for shopping</h5>
                    <p>Your order id is: {orderId}</p>
                  </div>

                  }
                </div>
              <h2>payment information</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
              </Elements>
            <br/>
            {/* {
              orderId && <div>
                <h3>thank you for shopping</h3>
                <p>Your order id is: {orderId}</p>
              </div>

            } */}
            </div>

         </div>
       </div>
      </div>
    )
};

export default Shipment;