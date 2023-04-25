import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // import css file
import cannabis_logo from './cannabis.png';
import PopUpLogin from './function/PopUpLogin';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        const token = localStorage.getItem("isAuthenticated");
        if (token) {
            // Call API to get user data
            axios.get('http://localhost:3008/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    setIsLoggedIn(true);
                    setUsername(response.data[0].username);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);


    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand className=' mx-3 ' href="/"><img src={cannabis_logo} alt="Cannabis Logo" width="55" height="51" /></Navbar.Brand>
                <Navbar.Brand href="/"> <h3 className=' mt-2 '> Smart Cannabis Farm</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='mx-2 mt-1'>
                    <Nav className="mx-2 mt-2 " >
                        <Nav.Link href="/home"><h5 style={{ width: 80 }}>หน้าหลัก</h5></Nav.Link>
                        <Nav.Link href="/home/About"><h5 style={{ width: 70 }}>เกี่ยวกับ</h5></Nav.Link>
                        <Nav.Link href="/home/Performance"><h5 style={{ width: 70 }}>ผลงาน</h5></Nav.Link>
                        <Nav.Link href="#contact"><h5 style={{ width: 120 }}>ช่องทางติดต่อ</h5></Nav.Link>
                    </Nav>
                    <Nav className="container-fluid d-flex justify-content-end">
                        {isLoggedIn ?
                            <>
                            <Nav.Link href="/dashboard/">
                                <h5 className="mt-2 mx-3"><FontAwesomeIcon icon={faUser} /> Username : {username}</h5>
                            </Nav.Link>
                            </>
                            :
                            <Button variant="outline-success" onClick={handleShowModal}><h5 className="mt-2">LOGIN</h5></Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Render PopUpLogin component as Modal */}
            <PopUpLogin showModal={showModal} handleCloseModal={handleCloseModal} />
        </>
    );
}