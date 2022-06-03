import React, { useState } from 'react';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const BusinessSummery = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <div className='container'>
            <h1 className='fw-bold text-center my-5' style={{ color: '#161880', fontSize: '50px' }}>We Belive in Numbers</h1>

            <div className='row text-center'>
                <div className="col-md-4">
                    <div className="country">
                        <FontAwesomeIcon icon={faEarth} style={{ fontSize: '150px', margin: '30px 30px', color: '#FAC214' }}></FontAwesomeIcon>
                        <p style={{ fontSize: '50px', fontWeight: 'bold', color: '#F77F22' }}>
                            <VisibilitySensor active={!viewPortEntered}
                                onChange={isVisible => {
                                    if (isVisible) {
                                        setViewPortEntered(true);
                                    }
                                }}
                                delayedCall>
                                <CountUp end={27}  duration={1}></CountUp>
                            </VisibilitySensor>
                            <span>+</span>  <br /> Country</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="country">
                        <FontAwesomeIcon icon={faPeopleCarryBox} style={{ fontSize: '150px', margin: '30px 30px', color: '#FAC214' }}></FontAwesomeIcon>
                        <p style={{ fontSize: '50px', fontWeight: 'bold', color: '#F77F22' }} className="num" data-val="57697"><CountUp end={57697} duration={1}></CountUp> <span>+</span><br /> Delivery</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="country">
                        <FontAwesomeIcon icon={faFaceLaugh} style={{ fontSize: '150px', margin: '30px 30px', color: '#FAC214' }}></FontAwesomeIcon>
                        <p style={{ fontSize: '50px', fontWeight: 'bold', color: '#F77F22' }}><CountUp end={27670} duration={1}></CountUp> <span>+</span> <br /> Happy Client</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummery;