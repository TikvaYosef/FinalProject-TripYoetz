import styled from "styled-components";

export const StyledCityPageSlider = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    align-items: center;
    flex-wrap: wrap;

    
    .slider-info-wrapper{
        width: 20%;
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .slider-name{
        font-size: 3rem;
    }
    .slider-info{
        font-size: 2rem;
    }
    .slider-link{
        font-size: 1.5rem;
        font-weight: 900;
        text-decoration: underline;
        color: ${({mode})=> mode.color};
    }



    .slider-box-display{
        position: relative;
        width: 80%;
        height: 100%;
        overflow: hidden;
    }


    .slider-images-wrapper{
        height: 100%;
        position: absolute;
        display: flex;
        align-items:center;
        gap: 1vw;
        transition: 0.2s ease-in-out;
    }
    .next-img-btn{
        position: absolute;
        right: 2%;
    }
    .slider-img{ 
        width: 15vw;
        height: 100%;
        border-radius: 5px;
        border: 5px solid black;
        transition: 0.2s ease-in-out;
     }    
    .slider-img:hover{
        filter:brightness(120%);
    }
`