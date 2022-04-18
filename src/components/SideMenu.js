import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

import menuData from "../data/MenuData";
import Button from "./Button";

const SideMenu = ({ isOpen, setIsOpen }) => {
  return (
    <SideMenuContainer visible={isOpen}>
      <div style={{ width: "100%" }}>
        <Icon>
          <CloseIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </Icon>
        <MenuWrapper>
          <MenuItems>
            {menuData.map((item, index) => (
              <MenuItem key={index} to={item.link}>
                {item.title}
              </MenuItem>
            ))}
          </MenuItems>
        </MenuWrapper>
      </div>

      <ButtonWrapper>
        <Button primary big to="/contact">
          Contact us
        </Button>
      </ButtonWrapper>
    </SideMenuContainer>
  );
};

export default SideMenu;

const SideMenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 80%;
  height: 100%;
  background: #cd853f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  padding: 2rem;
  transform: ${({ visible }) =>
    visible ? "translateX(0)" : "translateX(100%)"};
`;

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5rem;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div``;

const CloseIcon = styled(GrClose)`
  font-size: 1.5rem;
  outline: none;
`;
