import * as actionName from "../types";
import Axios from "axios";

export const SetDataNews = () => (dispatch) => {
  Axios.get(
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=acded96c4c6149b6b8906b5001992449"
  ).then((res) => {
    dispatch({
      type: actionName.SET_DATA_NEWS,
      payload: res.data.articles,
    });
  });
};
