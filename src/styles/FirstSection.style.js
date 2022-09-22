import styled from "styled-components";
import gradientbg from '../assets/gradientbg.png';
export const StyledFirstSection = styled.div`
    display:flex;
    color:white;
    width:100%;
    height:800px;
    flex-direction:column;
    align-items:center;
    padding-bottom:20px;
    position:relative;
    text-align:center;
    font-family:'Roboto';
    background-image:url(${gradientbg});
    background-repeat:no-repeat;
    background-size: 100%;
    @media(max-width:700px){
        display:flex;
        height: auto;
    }
`
export const StyledHeadline = styled.div`
    width:710px;
    display:flex;
    text-align:center;
    font-weight:300;
    font-family:'Roboto-light';
    p{
        font-size:56px;
    }
    @media(max-width: 700px) {
        width:80%;
        height:100px;
        p{
            display:flex;
            align-items:center;
            font-size:28px;
            height:20px;
            padding:8px;
            text-align:center;
        }
    }
`
export const StyledVideoContainer=styled.div`
    width:60%;
    height:90%;
    position:relative;
    overflow:hidden;
    display:flex;
    justify-content:column;
    align-items:center ;
    @media(max-width:700px) {
        width:80%
    }
    div{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center ;
        padding:2px;
    }
`