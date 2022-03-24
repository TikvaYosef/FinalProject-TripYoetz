import styled from "styled-components";

export const StyledNavbar = styled.nav`
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    height: 10vh;    
    width: 60%;
    position: fixed;
    z-index: 10;
    
    .navbar-list{
        list-style:none;
        display:flex;
        justify-content:center;
        gap:10%;
        align-items:center;
        height: 100%;
    }
    .navbar-link {
        text-decoration:none;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        border:2px solid ${({ mode }) => mode.color};
        padding:8px;
        transition: 0.2s ease-in-out;
        font-size:1.8rem;
        font-weight: 900;
        border-radius:10px;
    }
    .navbar-link:hover{
        color: ${({ mode }) => mode.background};
        background: ${({ mode }) => mode.color};
    }
`