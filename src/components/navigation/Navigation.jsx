import React from "react";
import { 
    NavContainer, 
    NavLogo, 
    NavMain, 
    Title, 
    LogoImg,
    NavComplements,
    NavPage,
    NavOutlet
} from "./Navigation.element";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/residential.png";
import Dropdown from "../dropdown/Dropdown";


const Navigation = () => {
  return (
    <NavContainer>
      <NavMain>
        <NavLogo>
          <LogoImg src={Logo} />
          <Title>Duplex</Title>
        </NavLogo>

        <Dropdown />
      </NavMain>

      <NavPage>
        <NavComplements>
            
        </NavComplements>

        <NavOutlet>
            <Outlet />
        </NavOutlet>
      </NavPage>
    </NavContainer>
  );
};

export default Navigation;
