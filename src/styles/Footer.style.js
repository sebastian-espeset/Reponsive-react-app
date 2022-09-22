import styled from "styled-components";

export const StyledFooterContainer=styled.div`
    width:98%;
    height:320px ;
    display:flex;
    flex-direction:row ;
    justify-content:space-evenly;
    padding:10px;
    @media(max-width:700px){
        display:flex;
        justify-content:space-between;
        max-width:100%;
        height:auto;
        flex-direction:row;
    }
`
export const StyledFooterImageContainer=styled.div`
    img{
        max-width:180px;
        height:auto;
        @media(max-width:700px){
            display:flex;
            max-width:60px;
            height: auto;
            flex-direction:row;
            margin-left:10px;
            margin-right :10px;
    }
    }
`
export const StyledFooterTextContainer=styled.div`
    max-width:17%;
    height:40px;
    display:flex;
    flex-direction:column;
    align-items:flex-start ;
    justify-content:space-between;
    line-height:2px ;
    h3{
        font-weight:medium;
        @media(max-width:700px){
            text-align:match-parent ;
            font-size:12px;
        }
    }
    h4{
        font-weight:lighter;
        @media(max-width:700px){
            display:none;
        }
    }
`