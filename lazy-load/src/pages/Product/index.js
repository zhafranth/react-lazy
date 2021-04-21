import React, { useState, useEffect } from "react";
import { Layout, Card } from "../../components";
import Axios from "axios";
import { WrapperContent } from "./style";
const Product = () => {
  const [images, setImages] = useState([]);

  const getDataImages = () => {
    Axios.get(
      "https://api.unsplash.com/photos/random?client_id=HY3bA7YKl4ymtkMR6RpaDV0pXD7HIYFtLoG396lTFY4",
      {
        params: {
          count: 30,
          orientation: "portrait",
        },
      }
    )
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataImages();
  }, []);
  console.log(images);
  return (
    <Layout>
      <WrapperContent>
        {images?.map((item) => (
          <Card
            key={item.id}
            alt={item.alt_description}
            src={item.urls.thumb}
          />
        ))}
      </WrapperContent>
    </Layout>
  );
};

export default Product;
