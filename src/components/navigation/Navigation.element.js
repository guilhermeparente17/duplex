import styled from "styled-components";

export const NavContainer = styled.header`
    width: 100%;
    height: 100%;
    display:flex;
`;

export const NavMain = styled.header`
    width: 300px;
    height: 100vh;
    background-color: #fff;
    padding: 30px 0px 0px 20px;
    border-right: 2px solid #EDEEF0;
`;

export const NavLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: end;
`;

export const LogoImg = styled.img`
    width: 30px;
    height: 30px;
    `;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
`;

export const NavComplements = styled.header`
    width: 100%;
    height: 100px;
    background-color: #fff;
    border-bottom: 2px solid #EDEEF0;
`;

export const NavPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NavOutlet = styled.div`
    padding: 20px;
`;