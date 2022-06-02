import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div className='container'>
             <h1 className='fw-bold text-center my-5' style={{color:'#161880', fontSize:'50px'}}>Our Services</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-service" style={{border: '3px solid #45B9D5'}}>
                        <div className="icon-img-section d-flex justify-content-center align-items-center" style={{background:'#45B9D5'}} >
                        <FontAwesomeIcon icon={faTruck}  style={{color:'#ffff', fontSize:'100px', paddingRight:'20px'}} />
                        </div>
                        <div className="sevice-section text-end pt-5 pe-3">
                            <h1>Fastest Delivery</h1>
                            <p>We are Delivery in 2-3 Days outside Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-service" style={{border: '3px solid #F6CD3D'}}>
                        <div className="icon-img-section d-flex justify-content-center align-items-center" style={{background:'#F6CD3D'}} >
                        <FontAwesomeIcon icon={faMoneyBill1Wave}  style={{color:'#ffff', fontSize:'100px', paddingRight:'20px'}} />
                        </div>
                        <div className="sevice-section text-end pt-2 pe-3">
                            <h1>Money Back Guarantee</h1>
                            <p>We are Providing Money Back Guarantee at 30 Days</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-service" style={{border: '3px solid #D25651'}}>
                        <div className="icon-img-section d-flex justify-content-center align-items-center" style={{background:'#D25651'}} >
                        <FontAwesomeIcon icon={faFeatherPointed}  style={{color:'#ffff', fontSize:'100px', paddingRight:'20px'}} />
                        </div>
                        <div className="sevice-section text-end pt-5 pe-3">
                            <h1>Feedback</h1>
                            <p>You are Valuable For Us. Your Single Feedback is important for us</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;