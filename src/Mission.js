import React from 'react'
import { StyledMissionBody, StyledMissionContainer,
          StyledMissionHeadline,
          StyledToothBrushImageContainer,
          StyledToothGlassesImageContainer
      } from './styles/Mission.style'
import brush from './assets/brush.png';
import glasses from './assets/glasses.png';

export default function Mission() {
  return (
    <StyledMissionContainer>
      <StyledToothBrushImageContainer>
        <img src={brush} alt="toothbrush"/>
      </StyledToothBrushImageContainer>
      <StyledMissionHeadline data-testid = 'mission-headline-test-id'>
        Our Mission & Vision
      </StyledMissionHeadline>
      <div>────────</div>
      <StyledMissionBody>
      Beam Dental was founded on the idea that everyone deserves access to dental care, centering our mission around closing the gap of the 100 million Americans who don't. By blending innovative technology with traditional insurance policies, we've been able to bring incredible value to the employee benefits market—both disrupting insurance forever and delivering on our mission.<br></br><br></br> Beam’s vision is to deliver a fundamentally unique approach to coverage by incorporating dental hygiene behavior into policy pricing at renewal.
      </StyledMissionBody>
      <StyledToothGlassesImageContainer>  
      <img src={glasses} alt="eye glasses"/>
      </StyledToothGlassesImageContainer>
    </StyledMissionContainer>
  )
}
