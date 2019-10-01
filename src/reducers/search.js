export default (state = "dota 2", action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return action.payload;
    default:
      return state;
  }
};
