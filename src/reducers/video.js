export default (state = "undefinded", action) => {
  switch (action.type) {
    case "GET_TUBE":
      return action.payload;
    default:
      return state;
  }
};
