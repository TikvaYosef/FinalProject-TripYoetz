import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledProfileImg = styled(Link)`
    width: 25%;
    height: 90%;
    cursor: pointer;
    border:none;
    border-radius: 50%;
    position: relative;

    .user-status{
        position:absolute;
        right: -5%;
        top: 5%;
        width: 25%;
        height: 25%;
        background:${({ user }) => user.isAdmin ? "indigo" : "LimeGreen"};
        border-radius: 50%;
        border: 2px solid white;
        z-index:10;
        animation-name: status;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    @keyframes status {
        0%{}
        100%{transform:scale(1.3)}
    }
    .user-profile-img {
        width: 100%;
        height: 100%;
        border-radius:inherit;
    }
`