import React, { useState, useEffect } from "react";
import { Layout } from "../../components";
import HeroImage from "../../assets/images/home.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  ImgCover,
  ImgWrapper,
  Title,
  WrapperContent,
  LoadingPage,
  LoadingText,
} from "./style";
const Home = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    setLoadingPage(false);
  }, []);
  if (loadingPage) {
    return (
      <LoadingPage>
        <LoadingText>Loading...</LoadingText>
      </LoadingPage>
    );
  }
  return (
    <Layout>
      <WrapperContent className="wrapper-content">
        <ImgWrapper>
          <LazyLoadImage src={HeroImage} alt="Hero home page" effect="blur" />
        </ImgWrapper>
        <Title>Testing React Lazy Components</Title>
      </WrapperContent>
    </Layout>
  );
};

export default Home;
