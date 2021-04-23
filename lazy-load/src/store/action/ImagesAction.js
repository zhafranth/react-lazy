import Axios from "axios";
import * as actionName from "../types";

export const SetImage = () => async (dispatch) => {
  const res = await Axios.get(
    "https://api.unsplash.com/photos/random?client_id=HY3bA7YKl4ymtkMR6RpaDV0pXD7HIYFtLoG396lTFY4",
    {
      params: {
        count: 30,
        orientation: "portrait",
      },
    }
  );
  const data = await res.data;
  dispatch({
    type: actionName.SET_IMAGES,
    payload: data,
  });
};
