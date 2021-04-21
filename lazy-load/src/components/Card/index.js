import React from "react";
import { MainCard, ImgCover } from "./style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ src, alt }) => {
  return (
    <MainCard>
      <LazyLoadImage effect="blur" src={src} alt={alt} />
    </MainCard>
  );
};

export default Card;
