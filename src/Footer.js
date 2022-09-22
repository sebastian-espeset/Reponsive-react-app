import React from 'react';
import { StyledFooterContainer, StyledFooterImageContainer, StyledFooterTextContainer } from './styles/Footer.style';
import logo from './assets/logo.png';
// small typo found in figma re: "Im 'a' Employer"
export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooterImageContainer>
        <img src={logo} alt="beam logo" data-testid='beam-logo-footer-test-id'/>
      </StyledFooterImageContainer>
      <StyledFooterTextContainer>
        <h3>Explore</h3>
        <h4>I'm a Broker</h4>
        <h4>I'm a Member</h4>
        <h4>I'm an Employer</h4>
        <h4>I'm a Provider</h4>
      </StyledFooterTextContainer>
      <StyledFooterTextContainer>
        <h3>Learn</h3>
        <h4>FAQs</h4>
        <h4>Company Blog</h4>
        <h4>Product Blog</h4>
      </StyledFooterTextContainer>
      <StyledFooterTextContainer>
        <h3>Company</h3>
        <h4>About</h4>
        <h4>Careers</h4>
        <h4>Terms</h4>
        <h4>Privacy</h4>
      </StyledFooterTextContainer>
      <StyledFooterTextContainer>
        <h3>Resources</h3>
        <h4>Find a Dentist</h4>
        <h4>Contact Us</h4>
        <h4>Get a Quote</h4>
        <h4>Paper Claims</h4>
      </StyledFooterTextContainer>
      <StyledFooterTextContainer>
        <h3>Connect</h3>
        <h4>LinkedIn</h4>
        <h4>Twitter</h4>
        <h4>Facebook</h4>
        <h4>Instagram</h4>
      </StyledFooterTextContainer>
    </StyledFooterContainer>
  )
}
