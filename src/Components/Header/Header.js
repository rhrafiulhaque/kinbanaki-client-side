import React from 'react';
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firbase.init';
import { Link } from 'react-router-dom';

const Header = () => {

    const [user] = useAuthState(auth);
    const openDropdown = () => {
        if(user){
            const toggleMenu = document.querySelector('.menu');
            toggleMenu.classList.toggle('active');
        }
        else{
            console.log('inside');
        }
            
        

    }
    return (
        <div style={{ background: "#161880" }} >
            <Navbar className='mx-3' expand="lg">
                <Container fluid>
                    <Link to={'/'}><Navbar.Brand href="#" className='text-white font fs-3 fw-bold fst-italic'>Kinba<span style={{ color: '#F6B924', textDecoration: 'underline' }}>Naki?</span></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex ms-auto position-relative">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className='rounded-pill '
                                style={{ minWidth: '450px' }}
                            />
                            <Button className='btn search-btn position-absolute pb-2 rounded-bottom end-0' style={{ backgroundColor: '#F6B924', border: 'none' }} ><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                        </Form>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div >
                                <Nav.Link href="#action1"><FontAwesomeIcon icon={faCartPlus} style={{ color: '#F6B924', fontSize: '30px', paddingRight: '20px' }} /></Nav.Link>
                            </div>


                            {/* DropDown User Start  */}
                            <div className="action">
                                <div className="profile">
                                    {user?<FontAwesomeIcon onClick={openDropdown} className='user-icon pt-2' icon={faUser} style={{ color: '#F6B924', fontSize: '30px', paddingRight: '20px' }} />: <Link to={'/login'}><FontAwesomeIcon  className='user-icon pt-2' icon={faUser} style={{ color: '#F6B924', fontSize: '30px', paddingRight: '20px' }} /></Link> }
                                </div>
                                <div className="menu">
                                    <h1 className='fs-5 text-center pt-2'>Hello RH</h1>
                                    <ul>
                                        <li><a href=""><FontAwesomeIcon className='ftp-icon' icon={faUserAlt} /> My Profile</a></li>
                                        <li><a href=""><FontAwesomeIcon className='ftp-icon' icon={faDashboard} />Dashboard</a></li>
                                        <li><a href=""><FontAwesomeIcon className='ftp-icon' icon={faBox} />My Orders</a></li>
                                        <li><a href=""><FontAwesomeIcon className='ftp-icon' icon={faLongArrowAltUp} />Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* DropDown User End  */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;