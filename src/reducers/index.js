import { combineReducers } from "redux";
import search from "./search";
import tube from "./tube";
import video from "./video";

export default combineReducers({
  search: search,
  tube: tube,
  video: video
});
