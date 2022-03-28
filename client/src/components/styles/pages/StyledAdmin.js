import styled from "styled-components";

export const StyledAdmin = styled.section`
    margin-top:10vh;
    width: 100%;

    .admin-table{
        width: 100%;
        height: 100%;
        border-collapse: collapse;
        text-align: center;
        font-size: 1.5rem;
        table-layout:fixed;
        
        .table-item-img{
            width: 100%;
            height: 100%;
        }
        thead{
            height: 5vh;
            font-size: 2.2rem;
            background: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
            /* position: sticky; */
            /* top: 10vh; */
        }
        td{
            border: 2px solid ${({ mode }) => mode.color};
            font-size: 1.6rem;
            font-weight: 900;
            overflow-wrap: break-word;
            overflow: hidden;
            /* line-height: 20px; */
            max-width: calc(100% / 14);
            min-width: calc(100% / 14);
            min-height: 50px;
            max-height: 50px;
        }
    }

    & .description{
        width:30%;
    height: 3%;
    border: 1px solid;
   
}
& .images{
    border: 1px solid;
    overflow: visible;
    width: 10px;
    height: 10px
}
& .form{
   display: flex;
   flex-direction: column;
   width: 50%;
   margin: auto;
}
& .button{
    width: 5%;
    height: 5%;
    margin-left: 5%;
    border-radius: 50%;
}
& .title{
    font-family: 'Times New Roman', Times, serif;
    margin-left: 2%;
}
& .input{
  margin-left: 5%;
    width: 5%;
    height: 5%;
}
& .label{
    font-weight: bold;
    font-size: 10px;
    width: 5%;
    height: 5%;
}
& .input:hover{
    background-color: gray;
}
& .label:hover{
    background-color: gray;
    opacity: 0.2;
}
.profileImg{  
      margin-left: 89%;
      width: 10%;
      height: 10%;
      border-radius: 50%;      
  }
  .mainDiv{
background-image: url("https://www.w3schools.com/css/img_lights.jpg");
background-size: cover;
  
}
.userDetails{
    
    border-style:ridge ;
        margin-top: 5% ;
        width: 20%;
        height: 200px;
        border-radius: 10% ;
        margin-left: 5px;
        border-color:black ;
        display: flex;
        flex-direction:column;
        align-items: center;
        align-items: flex-start;
        direction: ltr;
    }
    .userDetails ul{
    margin-top: 4%;
    margin-left: 30%;
}
.userDetails h1{
    margin-top: 15%;
    margin-left: 30%
}
.editIcon{
    margin-left: 90%;
    
    width: 8%;
    border-style: groove ;
}
  .profileImg{  
      margin-left: 89%;
      width: 10%;
      height: 10%;
      border-radius: 50%;      
  }
`