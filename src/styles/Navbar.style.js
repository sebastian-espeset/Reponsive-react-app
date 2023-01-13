import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: ${(props) => (props.openNav ? "auto" : "80px")};
  width: 98%;
  background: white;
  font-family: "Roboto";
  font-weight: 700;
  color: grey;
  position: relative;
  @media (min-width: 700px) {
    height: 80px;
    width: 100%;
  }
`;
export const NavbarInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;
export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20%;
`;
export const StyledLogo = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.5;
`;
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
`;
export const LinksInnerContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 80px;
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
  img {
    padding: 5px;
  }
`;
export const OpenLink = styled.a`
  color: black;
  font-size: large;
  text-decoration: none;
  margin: 10px;
`;
export const FindButton = styled.button`
  box-sizing: border-box;
  width: 177px;
  height: 38px;
  left: 952px;
  top: 27px;
  border-radius: 100px;
  border-width: 0.5px;
  border-color: #058ed3;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  line-height: 18.75px;
  text-align: center;
  color: grey;
  :hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  }
  background-image: ${(props) =>
    props.findButton
      ? "linear-gradient(to right,#03C6EE,#058ED3);color:white"
      : "white"};
  @media (max-width: 700px) {
    display: none;
  }
`;
export const LoginButton = styled.button`
  box-sizing: border-box;
  width: 177px;
  height: 38px;
  left: 952px;
  top: 27px;
  border-radius: 100px;
  border-width: 0.5px;
  border-color: #058ed3;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  color: grey;
  :hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  }
  background-image: ${(props) =>
    props.loginButton
      ? "white"
      : "linear-gradient(to right,#03C6EE,#058ED3);color:white;"};
  line-height: 18.75px;
  @media (max-width: 700px) {
    display: none;
    :hover {
      box-shadow: none;
    }
  }
`;
export const OpenFindButtonLink = styled.button`
  box-sizing: border-box;
  width: 177px;
  height: 38px;
  left: 952px;
  top: 27px;
  border-radius: 100px;
  border-width: 0.5px;
  border-color: #058ed3;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  line-height: 18.75px;
  text-align: center;
  color: grey;
  :hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  }
  background-image: ${(props) =>
    props.findButton
      ? "linear-gradient(to right,#03C6EE,#058ED3);color:white"
      : "white"};
`;
export const OpenLoginButtonLink = styled.button`
  box-sizing: border-box;
  width: 177px;
  height: 38px;
  left: 952px;
  top: 27px;
  border-radius: 100px;
  border-width: 0.5px;
  border-color: #058ed3;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  color: grey;
  :hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  }
  background-image: ${(props) =>
    props.loginButton
      ? "white"
      : "linear-gradient(to right,#03C6EE,#058ED3);color:white;"};
  line-height: 18.75px;
`;

export const LinksHamburgerButton = styled.div`
  width: 40px;
  height: 40px;
  background: none;
  padding: 8px;
  font-size: 65px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  justify-content: ${(props) => (props.openNav ? "center" : "space-between")};
  .line1 {
    border: 1px solid black;
    ${(props) => {
      if (props.openNav) {
        return `
          display: none;
      `;
      }
    }}
  }
  .line2 {
    border: 1px solid black;
    ${(props) => {
      if (props.openNav) {
        return `
          margin-top: 23px;
          margin-left: 5px;
          position: absolute;
          width: 40px;
          transform-origin: left;
          transition: all 0.2s ease;
          transform: rotate(-45deg);
          z-index: 2;
      `;
      }
    }}
  }
  .line3 {
    border: 1px solid black;
    ${(props) => {
      if (props.openNav) {
        return `
          margin-bottom: 35px;
          margin-left: 5px;
          position: absolute;
          width: 40px;
          transform-origin: left;
          transition: all 0.2s ease;
          transform: rotate(45deg);
          z-index: 1;
      `;
      }
    }}
  }
  // animation below
  /* animation-name: open;
  animation-duration: 0.7s;
  @keyframes open {
    0% {
      transform: ${(props) => (props.openNav ? "none" : "rotate(0);")};
    }
    100% {
      transform: ${(props) => (props.openNav ? "none" : "rotate(360deg);")};
    }
  } */
  @media (min-width: 700px) {
    display: none;
  }
`;
export const NavbarMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1;
  padding: 20px;
  @media (min-width: 700px) {
    display: none;
  }
`;
