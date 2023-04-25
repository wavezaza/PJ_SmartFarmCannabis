import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import showSidebar from './Sidebar'
const SidebarLink = styled(Link)`
    background: #BFBFBF;
    display: flex;
    color: #15171c;
    justify-content: space-between;
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

const SidebarLabel = styled.span`
    margin-left: 16px;
    `;

const DropdownLink = styled(Link)`
    background: #BFBFBF;
    border:2px;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #15171c;
    font-size: 18px;

    &:hover {
        background: #005200;
        color: #E8E8E8;
        border-left: 4px solid #15171c;
        cursor: pointer;
    }
    `;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={() => { item.subNav ? showSubnav() : showSidebar(); }}>
                <div>
                    {item.icon}
                    <SidebarLabel >{item.title}</SidebarLabel>
                </div>
                
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink  to={item.path} key={index} >
                            {item.icon}  
                            <SidebarLabel >{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
                
        </>
    );
};

export default SubMenu;
