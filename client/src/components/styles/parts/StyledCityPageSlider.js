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
    .next-img-btn, .prev-img-btn{
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid ${({mode})=> mode.color};
        color: ${({mode})=> mode.color};
        background: ${({mode})=> mode.background};
        transition: 0.2s ease-in-out;
    }
    .next-img-btn{
        right: 2%;
    }
    .prev-img-btn{
        right: 5%;
    }

    .next-img-btn:disabled, .prev-img-btn:disabled{
        border-color: darkGray;
        color: darkGray;
        background: darkWhite;
    }
    .arrow-icon{
        font-size: 3rem;
    }

    .slider-card{
        width: 15vw;
        height: 100%;
        border-radius: 5px;
        border: 2px solid black;
        transition: 0.2s ease-in-out;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .slider-card-name{
        text-shadow: 0 0 5px black;
        text-align: center;
        font-size: 2rem;
        font-weight:900;
        color: white;
        position: absolute;
        z-index:2;
    }

    .slider-img{ 
        width: 100%;
        height: 100%;
        transition: 0.2s ease-in-out;
     }    
    .slider-img:hover{
        filter:brightness(120%);
    }

    .end-slider{
        position: absolute;
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 15vw;
        border: 5px solid black;
        border-radius: 50px;
        left: 96vw;
    }


`