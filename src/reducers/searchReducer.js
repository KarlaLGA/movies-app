const initState = {
  search: [],
  error: "no error"
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SEARCH": {
      return {
        ...state,
        search: action.payload
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
