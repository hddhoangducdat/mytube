export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TUBES":
      return action.payload;
    default:
      return state;
  }
};
