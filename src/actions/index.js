import youtube from "../apis/youtube";

export const fetchSearch = text => {
  return { type: "FETCH_SEARCH", payload: text };
};

export const fetchTube = text => async dispatch => {
  const response = await youtube.get("/search", {
    params: {
      q: text
    }
  });
  dispatch({ type: "FETCH_TUBES", payload: response.data });
  getTube(response.data.items[0]);
};

export const getTube = data => {
  return { type: "GET_TUBE", payload: data };
};
