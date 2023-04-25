import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn
} from 'mdb-react-ui-kit';
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

function Footer() {
    return (
        <MDBFooter className='bg-white text-white mt-5'>
            <MDBContainer fluid className='p-4'>
                <MDBContainer className='text-center mb-3'>
                    <h5 className='mb-2'>ติดตามเราได้ที่</h5>
                    <MDBBtn outline color='dark' href='#'>
                        <FaFacebook />
                    </MDBBtn>{' '}
                    <MDBBtn outline color='dark' href='#'>
                        <FaInstagram />
                    </MDBBtn>{' '}
                    <MDBBtn outline color='dark' href='#'>
                        <FaLine />
                    </MDBBtn>
                </MDBContainer>
                <MDBContainer className='text-center mb-3'>
                    <h5 className='mb-2'>ข้อมูลเพิ่มเติม</h5>
                    <MDBBtn outline color='dark' href='#'>
                        คำถามที่พบบ่อย
                    </MDBBtn>{' '}
                    <MDBBtn outline color='dark' href='#'>
                        ติดต่อเรา
                    </MDBBtn>{' '}
                </MDBContainer>
                <MDBContainer className='text-center'>
                    <p>
                        © 2023 Smart Cannabis Farm. | Design by{' '}
                        <a href='https://www.facebook.com/wave.samui.9/' target='_blank' rel='noreferrer'>
                            ReStarT
                        </a>
                    </p>
                </MDBContainer>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;