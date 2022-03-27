import styled from "styled-components";

export const StyledUserProfile = styled.section`
    width: 100%;
    height: 100%;


    .profile-banner{
        width: 100%;
        height: 35%;
        background-image: url("/profile_banner_bg.png");
        background-size: cover;
        display: flex;
        justify-content: flex-end;

        .profile-img_edit-wrapper{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
        .profile-img{
            width: 65%;
            height: 80%;
            border-radius: 50%;
        }
        .edit-user-btn{
            color:${({ mode }) => mode.background};
            background:${({ mode }) => mode.color};
            cursor: pointer;
            width: fit-content;
            height: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            gap: 5px;
            padding: 5px 10px;
            border:2px solid black;
            border-radius: 5px;
            transition: 0.2s ease-in-out; 
        }
        .edit-user-btn:hover{
            background:${({ mode }) => mode.background};
            color:${({ mode }) => mode.color};
        }
        .edit-user-icon{
            font-size: 2rem;
        }

    }
    .user-info-wrapper{
        width: 100%;
        height: 65%;
        display: grid;
        grid-template-areas:
        'user-details user-favorites user-edit';
        grid-template-columns: 25% 50% 25%;
        grid-template-rows: 100%;
    }
    .user-details{
        grid-area: user-details;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 10%;

        .user-details-header{
            text-align: center;
            width: 100%;
            height: 10%;
            font-size: 2.2rem;
            text-decoration: underline;
        }

        .user-details-body{
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
                h2{
                    font-size: 1.6rem;
                }
        }
       
    }   
    .user-favorites{
        grid-area: user-favorites;
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 2rem;

        .user-favorites-header{
            text-align: center;
            width: 100%;
            font-size: 2.2rem;
            text-decoration: underline;
        }
        .favorites-table{
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            font-size: 1.5rem;
            border: 2px solid ${({ mode }) => mode.color};

            .delete-favorite{
                cursor: pointer;
                font-size: 2.5rem;
            }
            .delete-favorite:hover{
                color:red;
            }

            thead{
                height: 5vh;
                font-size: 2.2rem;
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
                position: sticky;
                top: 0;
            }
            tr{
                transition: 0.2s ease-in-out;
            }
            td:first-of-type{
                width: 20%;
            }
            td{
                width: 8%;
                border: 2px solid ${({ mode }) => mode.color};
                height: 5vh;
                font-size: 1.6rem;
                font-weight: 900;

                .favorite-link{
                    transition: 0.2s ease-in-out;
                    text-decoration: underline;
                    color: ${({ mode }) => mode.color};
                }
            }
        }
        .no-favorites-msg{
            padding-top: 10%;
            font-size: 3.5rem;
        }
    }
    .user-update-wrapper{
        grid-area: user-edit;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        h1{
            text-align: center; 
            font-size: 2.2rem;
            text-decoration: underline;
        }
        .user-update-form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            width: 80%;
            height: 80%;
            border: 3px solid ${({ mode }) => mode.color};
            border-radius: 50px;
            
            input{
                width: 80%;
                font-size: 1.6rem;
                font-weight: 900;
                padding: 5px 10px;
                border: 2px solid transparent;
                border-bottom-color: ${({ mode }) => mode.color};
                background: ${({ mode }) => mode.background};
                color: ${({ mode }) => mode.color};
                transition: 0.2s ease-in-out;
            }
            input:focus{
                outline: none;
            }
            button{
                cursor: pointer;
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
                font-size: 1.6rem;
                font-weight: 900;
                padding: 5px 10px;
                border: 2px solid ${({ mode }) => mode.color};
                border-radius: 15px;
                transition: 0.2s ease-in-out;
            }
            button:hover{
                background: ${({ mode }) => mode.background};
                color: ${({ mode }) => mode.color};
            }
        }
    }





@media  only screen  and (min-width:320px) and (max-width:375px){
    table {
      font-size:1rem;
  width: 50%;
}
.userDetails{
    margin-top: 5% ;
    width: 40%;
    height: 20%;
}
.userDetails h1{
    font-size: 1.2rem;
    margin-top: 6%;
    margin-left: 10%
}
.userDetails ul{
    margin-top: 4%;
    margin-left: 12%;
    font-size: 1rem;
}
form{
  width:50% ;
}  
form h1{
    font-size: 1.5rem;
}
 .editIcon{
    margin-left: 3%;
        width: 30%;
    margin-left:70%
}
.profileImg{   
    margin-left:79%;
    width:20%
}
table{
    font-size: 1.2rem;
}
}
@media  only screen  and (min-width:375px)and (max-width:426px){
    table {
      font-size:3rem;
  width: 50%;
}
.userDetails{
    margin-top: 5% ;
    width: 40%;
    height: 20%;
}
.userDetails h1{
    font-size: 1.2rem;
    margin-top: 6%;
    margin-left: 10%
}
.userDetails ul{
    /* list-style: none; */
    margin-top: 4%;
    margin-left: 12%;
    font-size: 1rem;
}
form{
  width:50% ;
}  
form h1{
    font-size: 1.5rem;
}
 .editIcon{
    margin-left: 3%;
        width: 30%;
    margin-left:70%
}
.profileImg{   
    margin-left:79%;
    width:20%
}
table{
    font-size: 1.2rem;
}
}
@media  only screen  and (min-width:427px)and (max-width:766px){
    table {
      font-size:3rem;
  width: 50%;
}
.userDetails{
    margin-top: 5% ;
    width: 40%;
    height: 20%;
}
.userDetails h1{
    font-size: 1.2rem;
    margin-top: 6%;
    margin-left: 10%
}
.userDetails ul{
    /* list-style: none; */
    margin-top: 4%;
    margin-left: 12%;
    font-size: 1rem;
}
form{
  width:50% ;
}  
form h1{
    font-size: 1.5rem;
}
 .editIcon{
    margin-left: 3%;
        width: 30%;
    margin-left:70%
}
.profileImg{   
    margin-left:79%;
    width:20%
}
table{
    font-size: 1.2rem;
}
}
@media  only screen  and (min-width:767px){
     table {
      font-size:1.8rem;
  width:30%;
}
.userDetails{
    margin-top: 5% ;
    width: 30%;
    height: 20%;
}

.userDetails h1{
    font-size: 2.5rem;
    margin-top: 6%;
    margin-left: 10%
}
.userDetails ul{
    margin-left: 10%;
    font-size: 1.8rem;
}

 .editIcon{
        width: 15%;
    margin-left:85%
}

.profileImg{   
    margin-left:85%;
    width:15%
}
}
`;