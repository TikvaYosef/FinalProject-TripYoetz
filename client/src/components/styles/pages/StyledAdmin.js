import styled from "styled-components";

export const StyledAdmin = styled.section`
    margin-top:10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    .add-item-btn{
        cursor: pointer;
        position: absolute;
        z-index: 10;
        left: 12.5%;
        top: -8%;
    }

    .popup-dialog-modal{
        width: 50%;
        height: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
        .popup-dialog-modal::backdrop{
            background-color: rgba(0,0,0,0.5);
        }

    .admin-table-wrapper{
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        width: 95%;
        overflow: hidden;
    }
    .table-head-th{
        font-size:1.2rem;
        font-weight:900;
        color: ${({ mode }) => mode.background};
        background: ${({ mode }) => mode.color};
    }
    .admin-table-td{
        padding: 0;
        overflow: hidden;
        font-size:1rem;
        border: 1px solid black;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
    }
    .table-link{
        text-decoration: underline;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
    }
    .table-img{
        width: 100%;
        height: 100%;
    }
    .table-img.activities{
        width: 100%;
        height: 15vh;
    }
`