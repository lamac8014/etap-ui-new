import {
  GET_STRUCTURE_TABLE_DATA,
  GET_COMPONENT_DATA,
  SHOW_EDIT_COMPONENT_MODAL,
  RESET_EDIT_COMPONENT_FORM,
  MODIFY_BREADTH,
  MODIFY_HEIGHT,
  MODIFY_LENGTH,
  MODIFY_WEIGHT,
  MODIFY_WIDTH,
} from "../actions/types";

const initialState = {
  structureData: [],
  componentData: [],
  isError: false,
  message: "",
  showEditComponentModal: false,
  modifiedData: {
    length: "",
    breadth: "",
    width: "",
    height: "",
    weight: "",
  },
};

const reducerFn = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EDIT_COMPONENT_MODAL:
      return { ...state, showEditComponentModal: action.payload };
    case RESET_EDIT_COMPONENT_FORM:
      return { ...state, modifiedData: {} };
    case MODIFY_BREADTH:
    case MODIFY_HEIGHT:
    case MODIFY_WEIGHT:
    case MODIFY_LENGTH:
    case MODIFY_WIDTH:
      return { ...state, modifiedData: action.payload };
    default:
      return state;
  }
};

export default reducerFn;
