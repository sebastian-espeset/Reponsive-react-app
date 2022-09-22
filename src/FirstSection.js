import { React, useState, useEffect } from 'react'
import { StyledFirstSection,
        StyledHeadline,
        StyledVideoContainer
      } from './styles/FirstSection.style'
import axios from 'axios';
//Familar Pro Light font
export default function FirstSection() {
  const [videoState, setVideoState]=useState({
    videoLink:""
  });
  useEffect(() => {
    axios.get("https://vimeo.com/api/oembed.json?url=https://vimeo.com/327864855")
        .then(res => {
          const parser = new DOMParser();
          let videoLinkSource = parser.parseFromString(res.data.html,'text/html')
            setVideoState({
              videoLink:videoLinkSource.body.innerHTML
            });
        })
},[]);
  return (
    <StyledFirstSection>
      <StyledHeadline data-testid='first-section-headline-test-id'>
        <p>Dental benefits that reward you for brushing your teeth.</p>
      </StyledHeadline>
      <StyledVideoContainer>
      {videoState.videoLink.length > 1 ? <div dangerouslySetInnerHTML={{__html:videoState.videoLink}}/> : <div>Video loading...</div>}
      </StyledVideoContainer>
    </StyledFirstSection>
  )
}


