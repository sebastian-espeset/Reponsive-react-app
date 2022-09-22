import styled from "styled-components";
// for media query render a carosel
export const StyledInvestorsContainer = styled.div`
    width:98%;
    background-color:whitesmoke;
    display:flex;
    justify-content:center ;
    align-items: center;
    flex-direction:column ;
    @media(max-width:700px){
        display:flex;
        max-width:100%;
        height: auto;
        flex-direction:column;
    }
`
export const StyledInvestorsHeadline= styled.h1`
    font-family: 'Roboto-Thin';
    font-style: normal;
    font-weight: 300;
    font-size: 56px;
    line-height: 66px;
    text-align: center;
    @media(max-width:700px){
        display:flex;
        justify-content:center ;
        align-items:center ;
        width:100%;
        font-size:25px;
        line-height:20px ;
    }
`
export const StyledInvestorsLogoContainer= styled.div`
    display:flex;
    justify-content:center ;
    align-items: center;
    img{
        max-width:20% ;
        height:auto;
        padding:10px;
    }
`