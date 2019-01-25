import { LOAD_DATA, SELECT_TUTORIAL, SELECT_VIDEO } from "../actions/types";
const MAIN_STATE = {
	data: [],
	selected_tutorial: {},
	selected_video: null
};

const MainReducer = (state = MAIN_STATE, action) => {
	var newstate = Object.assign({}, state);

	if (action.type == SELECT_VIDEO) {
		newstate.selected_video = action.data;
		return newstate;
	}
	if (action.type == LOAD_DATA) {
		newstate.data = action.data;
		return newstate;
	}
	if (action.type == SELECT_TUTORIAL) {
		let data = newstate.data.find(item => item.key == action.data);
		newstate.selected_tutorial = data;
		return newstate;
	}
	return newstate;
};
export default MainReducer;
