import * as actionName from "../types";
const initialState = {
  newsDataIna: [],
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_DATA_NEWS:
      return { ...state, newsDataIna: action.payload };

    default:
      return state;
  }
};

export default DataReducer;
