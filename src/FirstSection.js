import { React } from "react";
import {
  StyledFirstSection,
  StyledHeadline,
} from "./styles/FirstSection.style";
import ResponsiveVideoPlayer from "./ResponsiveVideoPlayer";

export default function FirstSection() {
  return (
    <StyledFirstSection>
      <StyledHeadline data-testid="first-section-headline-test-id">
        <p>
          Curious about how to brush your teeth? So were we! We asked the
          experts so you don't have to.
        </p>
      </StyledHeadline>
      <ResponsiveVideoPlayer
        url={
          "https://www.youtube.com/embed/aTCwpiYdJqs?&autoplay=1;controls=0&amp;start=130"
        }
      />
    </StyledFirstSection>
  );
}
