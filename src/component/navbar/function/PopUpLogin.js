import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { handleSubmit } from './SubmitLog';

export default function PopUpLogin(props) {
    const { showModal, handleCloseModal } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    className="container-fluid"
                    noValidate
                    onSubmit={(event) => handleSubmit(event, username, password, handleCloseModal, navigate)}
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required // เพิ่ม required attribute
                            isInvalid={!username} // ถ้าไม่กรอก username จะแสดงสีแดง
                        />
                        <Form.Control.Feedback type="invalid">กรุณากรอก Username</Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group className="mt-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required // เพิ่ม required attribute
                            isInvalid={!password} // ถ้าไม่กรอก password จะแสดงสีแดง
                        />
                        <Form.Control.Feedback type="invalid">กรุณากรอก Password</Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group className="mt-4 d-flex justify-content-center">
                        <Button className="mx-3" variant="primary" type="submit" disabled={!username || !password}>
                            Submit
                        </Button>
                        <Button className="mx-3" variant="secondary" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}