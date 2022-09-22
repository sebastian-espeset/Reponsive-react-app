import styled from "styled-components"
// wasn't too sure which component was spilling over, so I hid the horizontal scroll bar. Given more time, I'd address this.
export const AppContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly ; 
    align-items:center;
    overflow-x: hidden;
`