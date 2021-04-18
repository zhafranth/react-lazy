import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    Axios.get("https://api.unsplash.com/photos/random", {
      params: {
        count: 30,
      },
      headers: {
        Authorization: "Client-ID HY3bA7YKl4ymtkMR6RpaDV0pXD7HIYFtLoG396lTFY4",
      },
    }).then((res) => setImages(res.data));
  }, []);
  console.log(images);
  return (
    <div className="App">
      {images?.map((item) => {
        return (
          <LazyLoadImage
            effect="blur"
            key={item.id}
            src={item.urls.regular}
            alt={item.alt_description}
            width="700px"
            height="800px"
          />
        );
      })}
    </div>
  );
}

export default App;
