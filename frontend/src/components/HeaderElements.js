import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';





export const Bordering = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 9px;
    transition: 0.3s;
    width: 90%;
    margin-bottom: 100px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    margin-top: 30px;
    width 100%;
    padding: 0 24px;
    max-wiidth: 1100px;
`
export const NavLogo = styled(LinkR)`
    color: $fff;
    justify-self: space-between;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`

export const Button = styled(LinkR, 'a')`
    background: rgba(235, 87, 87, 0.03);
    color: rgb(234, 87, 87);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid rgb(249, 200, 200);
    box-shadow: rgba(0, 0,0 , 0.1) 0px 1px 2px;
    // cursor: pointer;
    text-decoration: none;

`;


export const A = styled.a`
    background: rgba(235, 87, 87, 0.03);
    color: rgb(234, 87, 87);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid rgb(249, 200, 200);
    box-shadow: rgba(0, 0,0 , 0.1) 0px 1px 2px;
    // cursor: pointer;
    text-decoration: none;
`

export const SearchBar = styled("input")`
background: rgba(235, 87, 87, 0.03);
color: rgb(234, 87, 87);
width: 50%;
font-size: 20px;
height: 29px;
padding-left: 30px;
border: 1px solid rgb(249, 200, 200);
`


export default Container;