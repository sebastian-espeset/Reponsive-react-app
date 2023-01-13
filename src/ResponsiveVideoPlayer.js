import React from "react";
import { EmbedContainer } from "./styles/ResponsiveVideoPlayer.style";

export default function ResponsiveVideoPlayer({ url }) {
  console.log(url);
  return (
    <EmbedContainer id="iframeParent">
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </EmbedContainer>
  );
}
