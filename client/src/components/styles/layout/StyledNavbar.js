import styled from "styled-components";

export const StyledNavbar = styled.nav`
    grid-area:nav;
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    /* height: 15%;     */
    position: sticky;
    top: 0;
    z-index:100;
    & .navbar-list{
        list-style:none;
        display:flex;
        justify-content:center;
        gap:10%;
        align-items:center;
        height: 100%;
    }
    & .navbar-link {
        text-decoration:none;
        color: ${({ mode }) => mode.color};
        border:2px solid black;
        padding:20px 10px;
        transition:color, background 0.2s ease-in-out;
        font-size:1.5rem;
        border-radius:10px;
        border-color: ${({ mode }) => mode.color};
    }
    & .navbar-link:hover{
        color: white;
        background: black;
    }
`