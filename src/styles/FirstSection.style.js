import styled from "styled-components";
import gradientbg from "../assets/gradientbg.png";
export const StyledFirstSection = styled.div`
  display: flex;
  color: white;
  width: 100%;
  height: 800px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  position: relative;
  text-align: center;
  font-family: "Roboto";
  background-image: url(${gradientbg});
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 700px) {
    display: flex;
    height: auto;
    background-size: 200%;
  }
`;
export const StyledHeadline = styled.div`
  width: 1310px;
  display: flex;
  text-align: center;
  font-weight: 300;
  font-family: "Roboto-light";
  p {
    font-size: 56px;
  }
  @media (max-width: 700px) {
    width: 80%;
    height: 150px;
    p {
      display: flex;
      align-items: center;
      font-size: 25px;
      height: 68px;
      padding: 8px;
      text-align: center;
    }
  }
`;
