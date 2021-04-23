import React from "react";

import { MainCard, ImgCover } from "./style";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardImages = ({ src, alt }) => {
  return (
    <MainCard>
      <LazyLoadImage effect="blur" src={src} alt={alt} />
    </MainCard>
  );
};

export default CardImages;
