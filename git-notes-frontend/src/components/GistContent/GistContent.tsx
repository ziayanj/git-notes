import React from "react"

import { GistContentContainer, GistContentHeader, GistContentDetails } from "./GistContent.styles";
import { GistFileType } from "../../types/gistFile.type";

type GistContentProps = {
  gist: GistFileType;
}

const GistContent = ({ gist }: GistContentProps) => {
  return (
    <GistContentContainer>
      <GistContentHeader>{gist.filename}</GistContentHeader>
      <GistContentDetails>
        {gist.content}
      </GistContentDetails>
    </GistContentContainer>
  );
};

export default GistContent;
