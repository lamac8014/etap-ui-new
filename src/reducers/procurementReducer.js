import {
  SET_SHOW_EDIT_MODAL_FLAG,
  SET_SITE_DISPATCH_DETAILS,
  PR_SET_ACTIVE_ITEM,
  SET_STRUCTURE_LIST_CODE,
  SET_FABRICATION_COST,
  SET_PLANNED_RELEASE_DATE,
  SET_ACTUAL_START_DATE,
  SET_EXPECTED_RELEASE_DATE,
  SET_MONTHLY_RENT,
  SET_CONTRACT_YEARS,
  SET_VENDOR_STRUCTURES,
  POST_ASSIGN_VENDOR,
  RESET_ASSIGN_VENDOR_MODAL,
  SET_VENDOR,
  SET_VENDOR_CODE_LIST,
  SET_SHOW_TABLE_FLAG,
  SET_SELECTED_STRUCTURES,
  RESET_MESSAGE,
  PROC_SET_SHOW_VIEW_MORE,
} from "../actions/types";

const initialState = {
  isLoading: false,
  showEditModalFlag: false,
  showTableFlag: false,
  isError: false,
  isSuccess: false,
  showViewMore: false,
  message: "",
  siteDispatchDetails: [],
  structureListCode: [],
  vendorCodeList: [],
  activeItem: {},
  selectedStructures: [],
  vendorStructures: [],
  vendor: {},
  fabricationCost: [],
  plannedReleaseDate: "",
  actualStartDate: "",
  expectedReleaseDate: "",
  monthlyRent: 0,
  contractYears: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case `${SET_SITE_DISPATCH_DETAILS}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${SET_SITE_DISPATCH_DETAILS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.response.data.message,
      };
    case `${SET_SITE_DISPATCH_DETAILS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        siteDispatchDetails: action.payload.data,
      };
    case `${SET_STRUCTURE_LIST_CODE}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${SET_STRUCTURE_LIST_CODE}_REJECTED`:
      const errorObj = action.payload.errors;
      const errors = Object.keys(errorObj)[0];
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: errors[0],
      };
    case `${SET_STRUCTURE_LIST_CODE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        structureListCode: action.payload.data,
      };
    case `${SET_VENDOR_CODE_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${SET_VENDOR_CODE_LIST}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.error,
      };
    case `${SET_VENDOR_CODE_LIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        vendorCodeList: action.payload.data,
      };
    case RESET_MESSAGE:
      return { ...state, message: "", isSuccess: false, isError: false };
    case PR_SET_ACTIVE_ITEM:
      const activeItem = state.siteDispatchDetails.filter((item) => {
        return item.dispatchId === action.payload;
      })[0];
      return { ...state, activeItem: activeItem };
    case SET_FABRICATION_COST:
      let tempFabricationCost = state.fabricationCost;
      tempFabricationCost.map((structure) => {
        if (structure.structureId === action.id) {
          structure.cost = action.payload;
        }
      });
      return {
        ...state,
        fabricationCost: tempFabricationCost,
      };
    case SET_ACTUAL_START_DATE:
      return { ...state, actualStartDate: action.payload };
    case SET_PLANNED_RELEASE_DATE:
      return { ...state, plannedReleaseDate: action.payload };
    case SET_EXPECTED_RELEASE_DATE:
      return { ...state, expectedReleaseDate: action.payload };
    case SET_MONTHLY_RENT:
      return { ...state, monthlyRent: action.payload };
    case SET_CONTRACT_YEARS:
      return { ...state, contractYears: action.payload };
    case SET_SELECTED_STRUCTURES:
      let tempArr = [];
      if (state.activeItem.serviceType === "Fabrication") {
        action.payload.map((structure) => {
          let structureObj = {
            structureId: structure.value,
            cost: 0,
          };

          tempArr.push(structureObj);
        });
      }

      return {
        ...state,
        selectedStructures: action.payload,
        fabricationCost: tempArr,
      };
    case SET_VENDOR:
      return { ...state, vendor: action.payload };
    case SET_SHOW_EDIT_MODAL_FLAG:
      return { ...state, showEditModalFlag: action.payload };
    case SET_SHOW_TABLE_FLAG:
      return { ...state, showTableFlag: action.payload };
    case SET_VENDOR_STRUCTURES:
      return { ...state, vendorStructures: action.payload };
    case `${POST_ASSIGN_VENDOR}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${POST_ASSIGN_VENDOR}_REJECTED`:
      const errorObject = action.payload.response.data.errors;
      const error = Object.keys(errorObject)[0];
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: errorObject[error][0],
      };
    case `${POST_ASSIGN_VENDOR}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: action.payload.data.message,
      };
    case RESET_ASSIGN_VENDOR_MODAL:
      return {
        ...state,
        isLoading: false,
        activeItem: {},
        structureListCode: [],
        vendorStructures: [],
        selectedStructures: [],
        vendor: {},
        // vendorCodeList: [],
        showTableFlag: false,
        fabricationCost: [],
        plannedReleaseDate: "",
        actualStartDate: "",
        expectedReleaseDate: "",
        monthlyRent: 0,
        contractYears: 0,
      };
    case PROC_SET_SHOW_VIEW_MORE:
      return { ...state, showViewMore: action.payload };
    default:
      return state;
  }
};
