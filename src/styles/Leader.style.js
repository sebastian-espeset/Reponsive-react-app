import styled from "styled-components";

export const StyledLeadershipLink=styled.div`
    width:20%;
    height:70%;
    padding:20px;
    display:flex;
    flex-direction:column ;
    align-items:center;
    font-family:'Roboto';
    border-radius:18px;
    line-height: 66px;
    :hover{
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
    }
    @media(max-width:700px){
        display:flex;
        flex-direction:column;
        align-items:center;
        /* padding:0; */
        width:100% ;
        max-width:45%;
        :hover{
            box-shadow:none ;
        }
    }
    img{
        border-radius:50% ;
        max-width:40%;
        height:auto ;
        
        @media(max-width:700px){
            max-width:75%;
    }
    }
    h3{
        font-size:24px;
        text-align:center ;
        font-variant:small-caps;
        letter-spacing: 0.06em;
        
        @media(max-width:700px){
            text-align:center ;
            font-size:10px;
        }
    }
    h4{
        position:relative;
        font-family:'Roboto-Thin';
        font-size:16px;
        font-weight:300;
        text-align:center ;
        bottom:40px;
        
        @media(max-width:700px){
            bottom:20px;
            display:flex;
            text-align:center ;
            font-size:12px;
            line-height:20px ;
        }
    }

`