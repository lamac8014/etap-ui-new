import {
  GET_SGB_DATA,
  SET_SBG_NAME,
  SET_EDIT_MODE,
  SHOW_ADD_SBG_MODAL,
  RESET_SBG_FORM,
} from "../actions/types";

const intialState = {
  sbgData: [],
  isEditMode: false,
  showModal: false,
  isError: false,
  message: "",
  sbgName: "",
};
const reducerFn = (state = intialState, action) => {
  switch (action.type) {
    case SET_SBG_NAME:
      return { ...state, sbgName: action.payload };
    case SET_EDIT_MODE:
      return { ...state, isEditMode: action.payload };
    case SHOW_ADD_SBG_MODAL:
      return { ...state, showModal: action.payload };
    case RESET_SBG_FORM:
      return { ...state, sbgName: "" };
    default:
      return state;
  }
};

export default reducerFn;
