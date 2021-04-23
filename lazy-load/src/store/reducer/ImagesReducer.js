import * as actionName from "../types";

const initialState = {
  image: [],
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_IMAGES:
      return { ...state, image: action.payload };

    default:
      return state;
  }
};

export default ImageReducer;
