import { LOAD_DATA, SELECT_TUTORIAL, SELECT_VIDEO } from "./types";
import { mainData } from "./main-data";
export const LoadData = () => ({ type: LOAD_DATA, data: mainData() });
export const SelectTutorial = key => ({ type: SELECT_TUTORIAL, data: key });
export const SelectVideo = id => ({ type: SELECT_VIDEO, data: id });
