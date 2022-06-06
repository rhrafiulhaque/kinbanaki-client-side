import React, { useEffect, useRef, useState } from 'react';
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
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Header = () => {

    const logout = () => {
        signOut(auth);
        toast.success('Sign Out Successfully');
    };
    const [user] = useAuthState(auth);

    console.log(user?.displayName, user?.photoURL);

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
                            <div className='menubar' >
                               <ul className='d-flex'>
                                   <li className='pt-2 ' style={{listStyle:'none'}}><Link style={{textDecoration:'none', color:'#fff', fontSize:'16px', padding:'10px'}} to={'/'}>Home</Link></li>
                                   <li className='pt-2 ' style={{listStyle:'none'}}><Link style={{textDecoration:'none', color:'#fff', fontSize:'16px', padding:'10px'}} to={'/aboutus'}>About Us</Link></li>
                                   <li className='pt-2 ' style={{listStyle:'none'}}><Link style={{textDecoration:'none', color:'#fff', fontSize:'16px', padding:'10px'}} to={'contact'}>Contact</Link></li>
                                   {
                                       user&& <>
                                       
                                       <li className='pt-2 ' style={{listStyle:'none'}}><Link style={{textDecoration:'none', color:'#fff', fontSize:'16px', padding:'10px'}} to={'dashboard'}>Dashboard</Link></li>
                                       <li className='pt-2 ' style={{listStyle:'none'}}><Link onClick={logout} style={{textDecoration:'none', color:'#fff', fontSize:'16px', padding:'10px'}} to={'/login'}>Logout</Link></li>
                                       </>
                                   }
                                  {
                                      !user &&  <li className='pt-2 ' style={{listStyle:'none'}}><Link style={{textDecoration:'none', color:'#fff', fontSize:'16px', padding:'10px'}} to={'/login'}>Login</Link></li>
                                  }
                               </ul>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;