import styled from "styled-components";

export const StyledAdmin = styled.section`
    margin-top:10vh;
    width: 100%;
    display: flex;
    justify-content: center;

    .table-style{
        box-shadow: 0px 0px 10px 0px ${({ mode }) => mode.color};
        background:inherit;
        color:inherit;
    }
    #tableTitle, .admin-table-selected{
        text-decoration: underline;
        font-size:1.5rem;
        font-weight:900;
    }
    .admin-table-head{
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
    }
    .admin-table-head-th{
        font-size: 1.5rem;
        font-weight: 900;
        color: ${({ mode }) => mode.color};
    }
    .admin-table-checkbox{
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
    }
    .admin-table-sort-label{
        transition: 0.2s ease-in-out;    
    }
    .admin-table-sort-label:hover, .admin-table-sort-label:focus{
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        transform: scale(1.3);
    }
    .table-row-th{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        font-size: 1rem;
        font-weight: 900;
    }
    .table-row-td{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        padding: 0;
        font-size: 1rem;
        border:1px solid black;
        font-size: 1.2rem;
    }
    .table-description{
        text-align: center;
        margin:auto;
        width: 90%;
        overflow: auto;
        min-height: fit-content;
        max-height: 12vh;
    }
    .table-link{
        text-decoration: underline;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        font-size: 1.5rem;
        font-weight: 900;
    }
    .table-img{
        width: 100%;
        height: 100%;
    }
`