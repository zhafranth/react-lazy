import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetImage } from "../../store/action/ImagesAction";
import { Layout } from "../../components";
import { CardImages } from "../../components/Card";
import { WrapperContent } from "./style";
import { ImagesLoad } from "../../components/Loading";

const Product = () => {
  const imagesData = useSelector((state) => state.ImagesReducer.image);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetImage());
  }, []);
  return (
    <Layout>
      <WrapperContent>
        {imagesData.length !== 0
          ? imagesData.map((item) => (
              <CardImages
                key={item.id}
                alt={item.alt_description}
                src={item.urls.thumb}
              />
            ))
          : [1, 2, 3, 4].map((item) => <ImagesLoad />)}
      </WrapperContent>
    </Layout>
  );
};

export default Product;
