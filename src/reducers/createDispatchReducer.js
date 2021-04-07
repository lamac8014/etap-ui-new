import {
  SET_SELECTED_ITEMS,
  GET_SITE_REQ_DETAILS,
  GET_SITE_REQ_DETAILS_BY_ID,
  RESET_MESSAGE,
  CD_SET_ACTIVE_ITEM,
  SET_MODAL_DATA,
  RESET_SELECTION,
  CD_SET_SERVICE_TYPE_ID,
  SET_DISPATCH_ERROR,
  CREATE_DISPATCH,
  TWCC_DISPATCH_MORE_PAGE,
  CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS,
  SET_SHOW_ATTRIBUTE_MODAL,
  SET_CURRENT_ATTRIBUTE_MODAL_DATA,
  SET_STRUCTURES_FOR_REUSE,
  DISABLE_SITE_REQUIREMENTS,
  TRANSFORM_SITE_REQUIREMENTS,
  SET_SHOW_QUANTITY_MODAL_FLAG,
  SET_QUANTITY,
  SET_NOTES,
  SET_CONFIRMATION_MODAL_FLAG,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  showModal: false,
  showAttributeModal: false,
  dispatchError: false,
  dispatchErrMsg: "",
  modalMessage: "",
  message: "",
  activeItem: {},
  currentAttributeData: null,
  serviceTypeId: 0,
  quantity: "",
  notes: "",
  siteReqDetails: [],
  transformedSiteReq: [],
  siteReqDetailsById: [],
  selectedItems: [],
  lstStructforDispatch: [],
  dispatchStructures: [],
  disableReuse: true,
  disableFabrication: false,
  disableOutSourcing: false,
  showTwccDispatchMoreModal: false,
  showGetQuantityModal: false,
  showConfirmationModal: false,
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
    case CD_SET_ACTIVE_ITEM:
      console.log("inside createDiaptchREducer.....");
      let tempActiveItem = state.siteReqDetails.filter((item) => {
        return (
          item.structureId === action.payload.structId &&
          item.siteRequirementId === action.payload.siteReqId
        );
      });
      return {
        ...state,
        activeItem: tempActiveItem[0],
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
        selectedItems: action.payload ? action.payload : state.selectedItems,
        lstStructforDispatch: action.structureList,
        disableReuse: action.reuseResult,
        disableFabrication: action.fabOutResult,
        disableOutSourcing: action.fabOutResult,
      };

    case CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS:
      return {
        ...state,
        showTwccDispatchMoreModal: action.payload,
      };

    case RESET_MESSAGE:
      return { ...state, message: "", isSuccess: false, isError: false };
    case RESET_SELECTION:
      return {
        ...state,
        modalMessage: "",
        showModal: false,
        selectedItems: [],
      };
    case CD_SET_SERVICE_TYPE_ID:
      return { ...state, serviceTypeId: action.payload };
    case SET_DISPATCH_ERROR:
      return {
        ...state,
        dispatchError: action.payload.flag,
        dispatchErrMsg: action.payload.message,
      };
    case SET_CURRENT_ATTRIBUTE_MODAL_DATA:
      return { ...state, currentAttributeData: action.payload };
    case SET_SHOW_ATTRIBUTE_MODAL:
      return { ...state, showAttributeModal: action.payload };
    case SET_STRUCTURES_FOR_REUSE:
      return {
        ...state,
        dispatchStructures: action.payload,
      };
    case DISABLE_SITE_REQUIREMENTS:
      return { ...state, transformedSiteReq: action.payload };
    case TRANSFORM_SITE_REQUIREMENTS:
      return { ...state, transformedSiteReq: action.payload };
    case SET_SHOW_QUANTITY_MODAL_FLAG:
      return { ...state, showGetQuantityModal: action.payload };
    case SET_QUANTITY:
      return { ...state, quantity: action.payload };
    case SET_NOTES:
      return { ...state, notes: action.payload };
    case SET_CONFIRMATION_MODAL_FLAG:
      return { ...state, showConfirmationModal: action.payload };
    default:
      return state;
  }
};
