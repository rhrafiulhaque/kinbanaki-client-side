import React from 'react';
import './Footer.css'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div class="bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 href="#" className='text-white font fs-3 fw-bold fst-italic pt-3'>Kinba<span style={{ color: '#F6B924', textDecoration: 'underline' }}>Naki?</span></h1>
                        <p>Kinba Naki is the Most Popular E-commerce in Bangladesh. It is technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It has been referred to as "one of the most influential economic and cultural forces in the world", and is one of the world's most valuable brands. </p>
                    </div>
                    <div className="col-md-4 footer-nav">
                        <ul>
                            <li>
                                <a href="">Carrers</a>
                                <a href="">Blog</a>
                                <a href="">About Kinba Naki</a>
                                <a href="">Investor Relations</a>

                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 contact">
                        <p><FontAwesomeIcon className='contact-icon' icon={faHome}></FontAwesomeIcon>Mirpur, Dhaka 1100</p>
                        <p><FontAwesomeIcon className='contact-icon' icon={faMailBulk}></FontAwesomeIcon>kinba@naki.com</p>
                        <p><FontAwesomeIcon className='contact-icon' icon={faMobile}></FontAwesomeIcon>+880 01722 0011##</p>
                    </div>
                </div>
                <p className=' m-0 text-center'><small>All right reserved By KinbaNaki? <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />{year} </small></p>
            </div>
        </div>
    );
};

export default Footer;