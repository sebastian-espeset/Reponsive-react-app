import styled from "styled-components";

export const EmbedContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 600px;
  iframe {
    overflow: hidden;
    border: 2px solid black;
    align-self: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
