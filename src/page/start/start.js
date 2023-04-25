import React, { useState , useEffect} from "react";
import { Spinner, Container , Row, Col } from "react-bootstrap";
import Cannabis from './cannabis.png';
import { useNavigate } from 'react-router-dom';
import "./start.css"

const Start = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);        
        }, 3000);
    }, []);


    return (
        <Container className={`d-flex justify-content-center align-items-center `}>
            
            {isLoading ? (
                <>
                <Row className="justify-content-center my-5">
                    <Col md={12} className="d-flex justify-content-center align-items-center  mt-5">
                        <img src={Cannabis} alt="cannabis" />
                    </Col>
                    <Col md={12} className="d-flex justify-content-center align-items-center   mt-5">
                        <h1 className="text-font text-white font-effect-outline">Smart Cannabis Farm</h1>
                    </Col>

                    <Col md={12} className="d-flex justify-content-center align-items-center  mt-5">
                        <Spinner animation="grow" variant="dark"></Spinner>
                    </Col>
                </Row>
                </>
            ) : (
                <>
                    {navigate('/home')}
                </>
            )}
        </Container>
    );
};

export default Start;