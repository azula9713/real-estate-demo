import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import menuData from "../data/MenuData";
import Button from "./Button";

import logo from "../assets/images/logo.png";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Logo to="/">
        <img src={logo} alt="logo" width={200} />
      </Logo>
      <Menubars>
        <FaBars
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </Menubars>
      <NavItemsContainer>
        {menuData.map((item, index) => (
          <NavItem key={index} to={item.link}>
            {item.title}
          </NavItem>
        ))}
      </NavItemsContainer>
      <NavBtnContainer>
        <Button to="/contact">Contact us</Button>
      </NavBtnContainer>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  left: 0;
  top: 0;
  right: 0;
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const Logo = styled(NavLink)`
  color: white;
  width: 100%;
`;

const Menubars = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  color: #cd853f;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
  }
`;

const NavBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
