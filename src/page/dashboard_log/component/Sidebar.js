import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import {handleLogout} from './logout'
import { useNavigate } from "react-router-dom";
import * as IoIcons from 'react-icons/io';
import cannabis_logo from'./cannabis.png'; 

const Nav = styled.div`
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    margin-bottom: 50px;
    
`;

const NavIcon = styled(Link)`
    margin-left: 1rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    `;

const SidebarNav = styled.nav`
    border-color:black;
    background: #ffffff;
    height: 100%;
    width: 250px;
    border-radius: 0px 70px 0px 0px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.2);
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 99;
    `;

const SidebarWrap = styled.div`
margin-top: 5.5rem;
    width: 100%;
    `;

const ButtonLogout = styled(Link)`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #BFBFBF;
    display: flex;
    color: #15171c;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    

    &:hover {
        background: #005200;
        color: #E8E8E8;
        border-left: 4px solid #15171c;
        cursor: pointer;
    }
    `;

const TextLogout = styled.span`
    margin-left: 16px;
    `;
const Img = styled.span`
    position: absolute;
    bottom: 12%;
    `;


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const navigate = useNavigate();

    return (
        <>
            <IconContext.Provider   value="" >
                <Nav>
                    <NavIcon className='text-dark' to='#'>
                        <FaIcons.FaBars  onClick={showSidebar} />
                    </NavIcon>
                    <div className=' container-fluid  d-flex justify-content-end justify-items-end'>
                        <h3 className="d-none d-md-block mt-2 mx-3">Dashboard Smart Farm </h3>
                        <h4 className="d-md-none mt-2 mx-3">Dashboard Smart Farm </h4>
                        <img src={cannabis_logo} alt='Cannabis Logo'  width="55" height="48" />
                    </div>
                </Nav>
                <SidebarNav sidebar={sidebar} >
                    <SidebarWrap >
                        <NavIcon className='text-dark' to='#' >
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu   item={item} key={index} />;
                        })}
                        <Img  className='container-fluid d-flex justify-content-center justify-items-end'>
                            <img  src={cannabis_logo} alt="Cannabis Logo" width="200" height="170"/>
                        </Img>
                        <ButtonLogout onClick={() => { handleLogout(navigate); showSidebar(); }} >  <IoIcons.IoIosLogOut /><TextLogout >ออกจากระบบ</TextLogout> 
                        </ButtonLogout >
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};


export default Sidebar;
