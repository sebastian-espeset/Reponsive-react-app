import styled from 'styled-components';
import brush from '../assets/brush.png';

export const StyledMissionContainer=styled.div`
    height:650px;
    width:800px;
    display:flex;
    justify-content:center ;
    align-items:center ;
    flex-direction:column ;
    @media(max-width:700px){
        width:98%;
        height:auto;
        display:flex;
        justify-content:center ;
        align-items:center ;
        flex-direction:column ;
        background-image:url(${brush});
        background-position:left center ;
        background-repeat:no-repeat ;
    }
`
export const StyledMissionHeadline=styled.h1`
    font-size: 56px;
    font-family:'Roboto-Thin';
    @media(max-width:700px){
        display:flex;
        justify-content:center ;
        align-items:center ;
        width:100%;
        font-size:25px;
    }
`
export const StyledToothBrushImageContainer= styled.div`
    position:relative;
    top:250px;
    right:850px ;
    @media(max-width:700px){
        display:none;
    }
`
export const StyledToothGlassesImageContainer= styled.div`
    position:relative;
    top:50px;
    left:850px ;
    @media(max-width:700px){
        display:none;
    }
`
        
export const StyledMissionBody=styled.p`
    font-family: 'Roboto-Thin';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    @media(max-width:700px){
        width:100%;
        display:flex;
        justify-content:center ;
        align-items:center ;
        flex-direction:column ;
        font-size:15px;
    }
`