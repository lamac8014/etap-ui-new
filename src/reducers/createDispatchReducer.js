import {
  SET_SELECTED_ITEMS,
  GET_SITE_REQ_DETAILS,
  GET_SITE_REQ_DETAILS_BY_ID,
  RESET_MESSAGE,
  SET_ACTIVE_ITEM,
  SET_MODAL_DATA,
  RESET_SELECTION,
  SET_SERVICE_TYPE_ID,
  SET_DISPATCH_ERROR,
  CREATE_DISPATCH,
  TWCC_DISPATCH_MORE_PAGE,
  CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  showModal: false,
  dispatchError: false,
  dispatchErrMsg: "",
  modalMessage: "",
  message: "",
  activeItem: {},
  serviceTypeId: 0,
  siteReqDetails: [],
  siteReqDetailsById: [],
  selectedItems: [],
  lstStructforDispatch: [],
  disableReuse: true,
  disableFabrication: true,
  disableOutSourcing: true,
  showTwccDispatchMoreModal:false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SITE_REQ_DETAILS}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SITE_REQ_DETAILS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${GET_SITE_REQ_DETAILS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        siteReqDetails: action.payload.data,
      };
    case `${GET_SITE_REQ_DETAILS_BY_ID}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_SITE_REQ_DETAILS_BY_ID}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${GET_SITE_REQ_DETAILS_BY_ID}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        siteReqDetailsById: action.payload.data,
      };
    case `${CREATE_DISPATCH}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_DISPATCH}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${CREATE_DISPATCH}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: action.payload.data.message,
      };
    case `${SET_ACTIVE_ITEM}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${SET_ACTIVE_ITEM}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${SET_ACTIVE_ITEM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        activeItem: action.payload.data,
      };
    case SET_MODAL_DATA:
      return {
        ...state,
        showModal: action.payload.flag,
        modalMessage: action.payload.message,
      };
    case SET_SELECTED_ITEMS:

      return {
        ...state,
        selectedItems: action.payload,
        lstStructforDispatch: action.structureList,
        disableReuse: action.reuseResult,
        disableFabrication: action.fabOutResult,
        disableOutSourcing: action.fabOutResult
      };

   
    case CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS:
      return {
        ...state,
        showTwccDispatchMoreModal: action.payload
      }


    case RESET_MESSAGE:
      return { ...state, message: "", isSuccess: false, isError: false };
    case RESET_SELECTION:
      return {
        ...state,
        modalMessage: "",
        showModal: false,
        selectedItems: [],
      };
    case SET_SERVICE_TYPE_ID:
      return { ...state, serviceTypeId: action.payload };
    case SET_DISPATCH_ERROR:
      return {
        ...state,
        dispatchError: action.payload.flag,
        dispatchErrMsg: action.payload.message,
      };
    default:
      return state;
  }
};
