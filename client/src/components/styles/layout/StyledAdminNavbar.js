import styled from "styled-components";

export const StyledAdminNavbar = styled.nav`
    grid-area:nav;
    position: sticky;
    top: 0;
    z-index:100;
    margin-top: 2%;
    margin-bottom: 3%;
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
        border:2px solid black;
        padding:10px;
        transition:color, background 0.2s ease-in-out;
        font-size:1.5rem;
        border-radius:10px;
    }
    & .navbar-link:hover{
        color: white;
        background: black;
    }
`