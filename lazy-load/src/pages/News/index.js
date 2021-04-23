import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetDataNews } from "../../store/action/DataAction.js";
import { Layout } from "../../components";

const News = () => {
  const DataNews = useSelector((state) => state.DataReducer.newsDataIna);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetDataNews());
  }, []);
  console.log(DataNews);
  return (
    <Layout>
      <h2>Hello from News...</h2>
    </Layout>
  );
};

export default News;
