import React, { useEffect, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import LazyLoad from "react-lazyload";
import { useDispatch, useSelector } from "react-redux";
import { SetDataNews } from "../../store/action/DataAction.js";
import { Layout } from "../../components";
import { WrapperListNews } from "./style";
import LoadNews from "../../components/Loading/LoadNews";
import { CardNews } from "../../components/Card";
const News = () => {
  const DataNews = useSelector((state) => state.DataReducer.newsDataIna);
  const scroll = window.pageYOffset;
  const [limitData, setLimitdata] = useState(6);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetDataNews(limitData));
  }, []);
  console.log(scroll);
  return (
    <Layout>
      <WrapperListNews>
        {DataNews.length !== 0
          ? DataNews.map((item) => (
              <LazyLoadComponent placeholder={<LoadNews />}>
                <CardNews
                  title={item.title}
                  desc={item.description}
                  date={item.publishedAt}
                  srcImg={item.urlToImage}
                />
              </LazyLoadComponent>
            ))
          : [1, 2, 3].map((item) => <LoadNews />)}
      </WrapperListNews>
    </Layout>
  );
};

export default News;
