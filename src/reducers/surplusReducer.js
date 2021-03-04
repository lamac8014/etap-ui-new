import {
  SURPLUS_STRUCTURE_ID,
  SURPLUS_DATE,
  SURPLUS_UPLOAD,
  SURPLUS_LIST_STRUCTURE_PROJECT_DATA,
  LIST_PROJECT_CODES,
  SURPLUS_PROJECT_ID,
  ADD_SURPLUS,
  RESET_SURPLUS_FORM,
  SURPLUS_FILE,
  SURPLUS_STRUCTURE_FAMILY,
  SURPLUS_APPROVAL_LIST,
  CHANGE_VIEW_SURPLUS_MORE_MODAL_STATUS,
  GET_SURPLUS_DATA_SINGLE,
  VIEW_SURPLUS_MORE_PAGE,
  SURPLUS_STRUCTURE_CODE,
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

const initialState = {
  structureID: {},
  dateFrom: "",
  upload: [],
  structureProjectList: [],
  projectCodesList: [],
  structureList: [],
  projectID: {},
  structureFamily: "",
  surplusViewMore: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SURPLUS_STRUCTURE_ID:
      return {
        ...state,
        structureID: action.payload,
      };
    case SURPLUS_STRUCTURE_FAMILY:
      return {
        ...state,
        structureFamily: action.payload,
      };
    case SURPLUS_STRUCTURE_CODE:
      return {
        ...state,
        structureCode: action.payload,
      };
    case SURPLUS_FILE:
      return {
        ...state,
        surplusFile: action.payload,
      };
    case SURPLUS_PROJECT_ID:
      return {
        ...state,
        projectName: action.payload,
      };
    case SURPLUS_DATE:
      return {
        ...state,
        dateFrom: action.payload,
      };
    case SURPLUS_UPLOAD:
      return {
        ...state,
        upload: action.payload,
      };
    case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${SURPLUS_LIST_STRUCTURE_PROJECT_DATA}_FULFILLED`:
      const userDetails = getUserDetails();
     
      let structureListData = action.payload.data
        .filter((ele) => {
          if (ele.projectId === userDetails.projectId) {
            return { id: ele.structureId, name: ele.strcutureName };
          }
        })
        .map((ele) => {
          return { id: ele.structureId, name: ele.strcutureName };
        });
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        structureProjectList: action.payload.data,
        structureList: structureListData,
      };
    case `${LIST_PROJECT_CODES}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${LIST_PROJECT_CODES}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${LIST_PROJECT_CODES}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        projectCodesList: action.payload.data,
      };
    case `${SURPLUS_APPROVAL_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${SURPLUS_APPROVAL_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${SURPLUS_APPROVAL_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        surplusList: action.payload.data,
      };

    case `${ADD_SURPLUS}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${ADD_SURPLUS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message:
          action.payload.response && action.payload.response.data
            ? action.payload.response.data.message
            : "Please check your form data and retry",
      };
    case `${ADD_SURPLUS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case RESET_SURPLUS_FORM:
      return {
        ...state,
        structureID: {},
        projectName: {},
        dateFrom: "",
        structureFamily: "",
        structureCode: ""
      };
    case GET_SURPLUS_DATA_SINGLE:
      return {
        ...state,
        surplusViewMore: action.payload,
      };
    case VIEW_SURPLUS_MORE_PAGE:
      return {
        ...state,
        showViewMore: action.payload,
      };
    case CHANGE_VIEW_SURPLUS_MORE_MODAL_STATUS:
      return {
        ...state,
        showSurplusMoreModal: action.payload,
      };
    default:
      return state;
  }
}
