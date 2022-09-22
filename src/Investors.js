import React from 'react';
import { StyledInvestorsContainer, StyledInvestorsHeadline, StyledInvestorsLogoContainer } from './styles/Investors.style';
import drivecapital from './assets/drivecapital.png';
import georgianpartners from './assets/georgianpartners.png';
import kleinerperkins from './assets/kleinerperkins.png';
import lewisandclark from './assets/lewisandclarkventures.png';

export default function Investors() {
  return (
    <StyledInvestorsContainer>
      <StyledInvestorsHeadline data-testid='investors-headline-test-id'>Our Investors</StyledInvestorsHeadline>
      <div>────────</div>
      <StyledInvestorsLogoContainer>
        <img src={drivecapital} alt="drive captial logo"></img>
        <img src={georgianpartners} alt="georgian partners logo"></img>
        <img src={kleinerperkins} alt="kleiner perkins logo"></img>
        <img src={lewisandclark} alt="lewis and clark ventures logo"></img>
      </StyledInvestorsLogoContainer>
    </StyledInvestorsContainer>
  )
}
