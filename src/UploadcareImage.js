import React from "react";
import styled from "styled-components/macro";
import { device } from "./mediaquery";

const StyledImage = styled.img`
  padding-bottom: 20px;
  width: 100%;
  height: width;
  filter: brightness(90%);
  max-width: 250px;
  max-height: 300px;

  @media ${device.desktop} {
    padding-bottom: 20px;
    width: 100%;
    max-width: 300px;
    max-height: 250px;
    filter: brightness(90%);
  }
`;

const UploadcareImage = ({ uuid, alt }) => {
  return (
    <picture>
      <source
        srcset={`https://ucarecdn.com/${uuid}/-/preview/-/format/webp/`}
        type="image/webp"
        loading="lazy"
      />
      <StyledImage
        alt={alt}
        src={`https://ucarecdn.com/${uuid}/-/preview/-/format/auto/`}
        loading="lazy"
      ></StyledImage>
    </picture>
  );
};

export default UploadcareImage;
