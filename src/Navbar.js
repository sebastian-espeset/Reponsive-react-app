import { React, useState } from "react";
import {
  StyledNavbar,
  StyledLogoContainer,
  StyledLogo,
  LinksContainer,
  NavbarInner,
  LinksInnerContainer,
  Link,
  OpenLink,
  LinksHamburgerButton,
  FindButton,
  LoginButton,
  OpenFindButtonLink,
  OpenLoginButtonLink,
  NavbarMobileContainer,
} from "./styles/Navbar.style";

import Dropdown from "./Dropdown";

import toothbrush from "./assets/toothbrush.webp";
import Arrow from "./assets/Arrow.png";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [buttonState, setButtonState] = useState({
    findButton: false,
    loginButton: false,
    openFindButton: false,
    openLoginButton: false,
  });
  const [open, setIsOpen] = useState({
    explore: false,
    company: false,
    resources: false,
  });
  console.log(open);
  const handleOpen = (navItem) => {
    console.log(navItem);
    setIsOpen({
      ...open,
      [navItem]: !open[navItem],
    });
  };
  return (
    <StyledNavbar openNav={openNav}>
      <NavbarInner>
        <StyledLogoContainer>
          <StyledLogo
            src={toothbrush}
            alt="dental company logo"
            data-testid="logo-test-id"
          />
        </StyledLogoContainer>
        <LinksContainer>
          <LinksInnerContainer>
            <Link>
              Explore
              <img
                src={Arrow}
                onClick={() => handleOpen("explore")}
                alt="downward arrow"
              />
              {open.explore ? (
                <Dropdown
                  dropdownItems={[
                    "page 1",
                    "page 2",
                    "page 3",
                    "page 4",
                    "page 5",
                  ]}
                />
              ) : null}
            </Link>
            <Link>
              Company{" "}
              <img
                src={Arrow}
                onClick={() => handleOpen("company")}
                alt="downward arrow"
              />
              {open.company ? (
                <Dropdown
                  dropdownItems={[
                    "page 1",
                    "page 2",
                    "page 3",
                    "page 4",
                    "page 5",
                  ]}
                />
              ) : null}
            </Link>
            <Link>
              Resources{" "}
              <img
                src={Arrow}
                onClick={() => handleOpen("resources")}
                alt="downward arrow"
              />
              {open.resources ? (
                <Dropdown
                  dropdownItems={[
                    "page 1",
                    "page 2",
                    "page 3",
                    "page 4",
                    "page 5",
                  ]}
                />
              ) : null}
            </Link>
            <FindButton
              findButton={buttonState.findButton}
              onClick={() => {
                setButtonState({
                  ...buttonState,
                  findButton: !buttonState.findButton,
                });
              }}
            >
              Find a dentist
            </FindButton>

            <LoginButton
              loginButton={buttonState.loginButton}
              onClick={() => {
                setButtonState({
                  ...buttonState,
                  loginButton: !buttonState.loginButton,
                });
              }}
            >
              Login
            </LoginButton>
            <LinksHamburgerButton
              onClick={() => {
                setOpenNav((val) => !val);
              }}
            >
              {openNav ? <> &#10005;</> : <> &#8801;</>}
            </LinksHamburgerButton>
          </LinksInnerContainer>
        </LinksContainer>
      </NavbarInner>
      {openNav && (
        <NavbarMobileContainer>
          <OpenLink>Explore</OpenLink>
          <OpenLink>Company</OpenLink>
          <OpenLink>Resources</OpenLink>
          <OpenFindButtonLink
            openFindButton={buttonState.openFindButton}
            onClick={() => {
              setButtonState({
                ...buttonState,
                openFindButton: !buttonState.openFindButton,
              });
            }}
          >
            Find a dentist
          </OpenFindButtonLink>
          <OpenLoginButtonLink
            openLoginButton={buttonState.openLoginButton}
            onClick={() => {
              setButtonState({
                ...buttonState,
                openLoginButton: !buttonState.openLoginButton,
              });
            }}
          >
            Login
          </OpenLoginButtonLink>
        </NavbarMobileContainer>
      )}
    </StyledNavbar>
  );
}
