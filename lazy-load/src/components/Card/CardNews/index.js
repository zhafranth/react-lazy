import React from "react";
import {
  MainCard,
  WrapperImage,
  ImgCover,
  MetaWrapper,
  TitleNews,
  DescNews,
  DateNews,
} from "./style.js";
import DefaultImg from "../../../assets/images/default-news-card.jpg";

const CardNews = ({ title, desc, date, srcImg = DefaultImg }) => {
  return (
    <MainCard>
      <WrapperImage>
        <ImgCover src={srcImg} alt={title} />
      </WrapperImage>
      <MetaWrapper>
        <TitleNews>{title}</TitleNews>
        <DescNews>{desc}</DescNews>
        <DateNews>{date}</DateNews>
      </MetaWrapper>
    </MainCard>
  );
};

export default CardNews;
