import {
  BUSINESS_UNIT,
  BU_NAME,
  GET_BU_LIST,
  GET_IC_LIST,
  GET_SINGLE_ICBU,
  IC_NAME,
  INDEPENDENT_COMPANY,
  LIST_ICBU,
  RESET_ICBU_FORM,
  RESET_PROJECT_FORM,
  RESET_STRUCTURE_FORM,
  SET_EDIT_MODE,
  SHOW_ADD_ICBU_MODAL,
  SHOW_ERR_MSG,
  IC_DESCRIPTION,
  RESET_IC_FORM,
  IC_STATUS,
} from "../actions/types";

const initialState = {
  icName: "",
  icDescription: "",
  icbuList: [],
  isIcbuMsg: "",
  isEditMode: false,
  showAddIcbuModal: false,
  singleIcbu: {},
  buList: [],
  icList: [],
  icID: "",
  icStatus:"",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IC_NAME:
      return {
        ...state,
        icName: action.payload,
      };
    case IC_DESCRIPTION:
      return {
        ...state,
        icDescription: action.payload,
      };

    case BUSINESS_UNIT:
      return {
        ...state,
        bu: action.payload,
      };
    case INDEPENDENT_COMPANY:
      return {
        ...state,
        ic: action.payload,
      };
    case RESET_STRUCTURE_FORM:
      return {
        ...state,
        icId: "",
        lstBussUnit: {},
      };
    case `${LIST_ICBU}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${LIST_ICBU}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${LIST_ICBU}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        icbuList: action.payload.data,
      };
    case SHOW_ADD_ICBU_MODAL:
      return {
        ...state,
        showAddIcbuModal: action.payload,
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        isEditMode: action.payload,
      };
    case `${GET_SINGLE_ICBU}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SINGLE_ICBU}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_SINGLE_ICBU}_FULFILLED`:
      const data = action.payload.data;
      return {
        ...state,
        isLoading: false,
        icName: data.name,
        icDescription: data.description,
        icID: data.id,
        icStatus:data.isActive ? {"label": "Active", "value": "Active"} : {"label": "InActive", "value": "InActive"},
      };
    case `${GET_IC_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_IC_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_IC_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        icList: action.payload.data,
      };

    case `${GET_BU_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_BU_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_BU_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        buList: action.payload.data,
      };
    case RESET_IC_FORM:
      return {
        ...state,
        isLoading: false,
        icName: "",
        icDescription: "",
        icStatus:"",
        isEditMode: false
      };
    case SHOW_ERR_MSG:
      return {
        ...state,
        isIcbuMsg: action.payload,
      };
    case RESET_ICBU_FORM:
      return { ...state, icName: "" };
    case IC_STATUS:
        return {
          ...state,
          icStatus: action.payload
        }
    default:
      return state;
  }
}
