import {
  SET_FABRICATION_COST,
  SET_FABCOST_MODAL_FLAG,
  FABCOST_VIEWMORE_FLAG,
  SET_UPLOAD_DATA,
  HANDLE_WO_UPLOAD,
  RESET_FABCOST_MODAL,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  viewMoreFlag: false,
  fabCostModalflag: false,
  message: "",
  uploadData: [],
  woFile: {},
  fabCost: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FABCOST_MODAL_FLAG:
      return { ...state, fabCostModalflag: action.payload };
    case FABCOST_VIEWMORE_FLAG:
      return { ...state, viewMoreFlag: action.payload };
    case SET_UPLOAD_DATA:
      return { ...state, uploadData: action.payload };
    case SET_FABRICATION_COST:
      return { ...state, fabCost: action.payload };
    case HANDLE_WO_UPLOAD:
      return { ...state, woFile: action.payload };
    case RESET_FABCOST_MODAL:
      return { ...state, fabCost: "", woFile: {} };
    default:
      return state;
  }
};
