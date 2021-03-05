import {
  SCRAP_STRUCTURE_ID,
  SCRAP_DATE,
  SCRAP_UPLOAD,
  SCRAP_LIST_STRUCTURE_PROJECT_DATA,
  LIST_PROJECT_CODES,
  SCRAP_PROJECT_ID,
  ADD_SCRAP,
  RESET_SCRAP_FORM,
  SCRAP_FILE,
  SCRAP_STRUCTURE_FAMILY,
  SCRAP_APPROVAL_LIST,
  CHANGE_VIEW_SCRAP_MORE_MODAL_STATUS,
  GET_SCRAP_DATA_SINGLE,
  VIEW_SCRAP_MORE_PAGE,
  SCRAP_STRUCTURE_CODE,
  LIST_SCRAP_CODES,
  SCRAP_AUCTION_ID,
  SCRAP_RATE,
  SCRAP_VENDOR
} from "../actions/types";

const initialState = {
  structureID: {},
  dateFrom: "",
  upload: [],
  structureProjectList: [],
  projectCodesList: [],
  structureList: [],
  projectID: {},
  structureFamily: "",
  SCRAPViewMore: [],
  vendorCodesList:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SCRAP_STRUCTURE_ID:
      return {
        ...state,
        structureID: action.payload,
      };
    case SCRAP_AUCTION_ID:
      return {
        ...state,
        auctionID: action.payload,
      };
    case SCRAP_RATE:
        return {
          ...state,
          scrapRate: action.payload,
        };
    case SCRAP_STRUCTURE_FAMILY:
      return {
        ...state,
        structureFamily: action.payload,
      };
    case SCRAP_STRUCTURE_CODE:
      return {
        ...state,
        structureCode: action.payload,
      };
    case SCRAP_VENDOR:
      return {
          ...state,
          scrapVendor: action.payload,
      };
    case SCRAP_FILE:
      return {
        ...state,
        scrapFile: action.payload,
      };

    case SCRAP_PROJECT_ID:
      return {
        ...state,
        projectName: action.payload,
      };
    case SCRAP_DATE:
      return {
        ...state,
        dateFrom: action.payload,
      };
    case SCRAP_UPLOAD:
      return {
        ...state,
        upload: action.payload,
      };
    case `${SCRAP_LIST_STRUCTURE_PROJECT_DATA}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${SCRAP_LIST_STRUCTURE_PROJECT_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${SCRAP_LIST_STRUCTURE_PROJECT_DATA}_FULFILLED`:
      let structureListData = action.payload.data
        .filter((ele) => {
          if (ele.projectId === state.projectName.value) {
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
      case `${LIST_SCRAP_CODES}_PENDING`:
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
        };
      case `${LIST_SCRAP_CODES}_REJECTED`:
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
        };
      case `${LIST_SCRAP_CODES}_FULFILLED`:
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: false,
          vendorCodesList: action.payload.data,
        };
      
    case `${SCRAP_APPROVAL_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${SCRAP_APPROVAL_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${SCRAP_APPROVAL_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        SCRAPList: action.payload.data,
      };

    case `${ADD_SCRAP}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${ADD_SCRAP}_REJECTED`:
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
    case `${ADD_SCRAP}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case RESET_SCRAP_FORM:
      return {
        ...state,
        projectName: {},
        vendor: {},
        structureID: {},
        structureFamily: "",
        structureCode:"",
        scrapRate: "",
        auctionID:"",
        scrapFile: []
      };
    case GET_SCRAP_DATA_SINGLE:
      return {
        ...state,
        SCRAPViewMore: action.payload,
      };
    case VIEW_SCRAP_MORE_PAGE:
      return {
        ...state,
        showViewMore: action.payload,
      };
    case CHANGE_VIEW_SCRAP_MORE_MODAL_STATUS:
      return {
        ...state,
        showSCRAPMoreModal: action.payload,
      };
    default:
      return state;
  }
}
