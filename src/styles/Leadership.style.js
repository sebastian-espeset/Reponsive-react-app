import styled from "styled-components";

export const StyledLeadershipContainer = styled.div`
    width:98%;
    height:500px;
    display:flex;
    justify-content:center ;
    align-items:center ;
    flex-direction:column ;
    @media(max-width:700px){
        display:flex;
        height: auto;
    }
`
export const StyledLeadershipHeadline= styled.h1`
    font-size:80px ;
    font-family:'Roboto-Thin';
    @media(max-width:700px){
        display:flex;
        justify-content:center ;
        align-items:center ;
        width:100%;
        font-size:25px;
    }
`
export const StyledLeadershipLinksContainer=styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:space-evenly;
`
