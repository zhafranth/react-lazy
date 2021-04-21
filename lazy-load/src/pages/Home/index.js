import React from "react";
import { Layout } from "../../components";
import HeroImage from "../../assets/images/home.jpg";

import { ImgCover, ImgWrapper, Title, WrapperContent } from "./style";
const Home = () => {
  return (
    <Layout>
      <WrapperContent className="wrapper-content">
        <ImgWrapper>
          <ImgCover src={HeroImage} alt="Hero home page" />
        </ImgWrapper>
        <Title>Testing React Lazy Components</Title>
      </WrapperContent>
    </Layout>
  );
};

export default Home;
