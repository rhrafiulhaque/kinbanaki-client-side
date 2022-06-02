import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div style={{background: "#161880"}} >
            <Navbar className='mx-3'  expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-white font fs-3 fw-bold fst-italic'>Kinba<span style={{color:'#F6B924', textDecoration:'underline'}}>Naki?</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex ms-auto position-relative">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className='rounded-pill '
                                style={{minWidth:'450px'}}                                
                            />
                            <Button className='btn search-btn position-absolute pb-2 rounded-bottom end-0' style={{backgroundColor:'#F6B924', border:'none'}} ><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                        </Form>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div >
                            <Nav.Link href="#action1"><FontAwesomeIcon icon={faCartPlus}  style={{color:'#F6B924', fontSize:'30px', paddingRight:'20px'}} /></Nav.Link>
                            </div>
                            <Nav.Link href="#action2"><FontAwesomeIcon icon={faUser} style={{color:'#F6B924', fontSize:'30px', paddingRight:'20px'}}  /></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;