import {
  PROJECT_NAME,
  STRUCTURE_NAME,
  STRUCTURE_ID,
  NUMBER_OF_COMPONENTS,
  DRAWING_NO,
  QUANTITY,
  REQUIRED_FOR_WORK_BREAK,
  REQUIRED_BY,
  ACTUAL_WORK_BREAK,
  PLANNED_START_DATE,
  ACTUAL_START_DATE_OF_USAGE,
  PLANNED_RELEASE_DATE,
  EXPECTED_RELEASE_DATE,
  MR_NUMBER,
  REMARKS,
  RESET_REQUIREMENT_FORM,
  LIST_PROJECT_CODES,
  LIST_WBS_CODES,
  SITE_REQUIRMENT_LIST,
  ADD_REQUIREMENT,
  LIST_STRUCTURE_PROJECT_DATA,
  LIST_REQUIREMENTS,
  ACTION_REQUIREMENT,
  VIEW_REQUIREMENTS_MORE_PAGE,
  CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS,
  GET_REQUIREMENT_DATA_SINGLE,
  SHOW_MODAL,
  SET_ACTIVE_ITEM,
  RESET_REQUIREMENT_MODAL,
  SAVE_REQUIREMENT_MODAL_VALUES,
  SET_ATTRIBUTE_VALUE,
  REQUIREMENT_VIEW_MORE,
  WBS_CODE_LIST,
  WBS_SEGMENT_LIST,
  WBS_SUBSEGMENT_LIST,
  WBS_ELEMENT_LIST,
  SET_WBS_ELEMENT,
  SET_WBS_SEGMENT,
  SET_WBS_SUBSEGMENT,
} from "../actions/types";

const initialState = {
  vendorName: "",
  vendorCode: "",
  vendorEmail: "",
  contactNumber: "",
  siteRequirementList: [],
  savedRequirementList: [],
  structureProjectList: [],
  structureList: [],
  wbsList: [],
  segmentList: [],
  subSegmentList: [],
  elementList: [],
  activeItem: {},
  showrequirementMoreModal: false,
  requirementViewMore: [],
  projectCodesList: {},
  showModal: false,
  showViewMoreModal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROJECT_NAME:
      return {
        ...state,
        projectName: action.payload,
      };
    case REQUIRED_FOR_WORK_BREAK:
    case SET_WBS_SEGMENT:
    case SET_WBS_SUBSEGMENT:
    case SET_WBS_ELEMENT:
      return {
        ...state,
        activeItem: action.payload,
      };
    case ACTUAL_WORK_BREAK:
      return {
        ...state,
        actualWorkBreak: action.payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case PLANNED_START_DATE:
      return {
        ...state,
        activeItem: action.payload,
      };
    case ACTUAL_START_DATE_OF_USAGE:
      return {
        ...state,
        actualStartDateOfUsage: action.payload,
      };
    case PLANNED_RELEASE_DATE:
      return {
        ...state,
        activeItem: action.payload,
      };
    case REQUIRED_BY:
      return {
        ...state,
        activeItem: action.payload,
      };
    case EXPECTED_RELEASE_DATE:
      return {
        ...state,
        expectedReleaseDate: action.payload,
      };
    case SET_ATTRIBUTE_VALUE:
      return { ...state, activeItem: action.payload };
    case REMARKS:
      return {
        ...state,
        remarks: action.payload,
      };
    // case `${LIST_PROJECT_CODES}_PENDING`:
    //     return {
    //       ...state,
    //       isLoading: true,
    //       isError: false,
    //       isSuccess: false,
    //     };
    // case `${LIST_PROJECT_CODES}_REJECTED`:
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: true,
    //       isSuccess: false,
    //     };
    case `${LIST_PROJECT_CODES}`:
      console.log("In Reducer");
      console.log(`List project Code: ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        projectCodesList: [action.payload],
      };
    case `${LIST_WBS_CODES}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${LIST_WBS_CODES}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${LIST_WBS_CODES}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        wbsCodesList: action.payload.data,
      };
    case `${LIST_STRUCTURE_PROJECT_DATA}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${LIST_STRUCTURE_PROJECT_DATA}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${LIST_STRUCTURE_PROJECT_DATA}_FULFILLED`:
      console.log(`Project Name: ${state.projectName}`);
      let structureListData = action.payload.data.map((ele) => {
        return { id: ele.id, name: ele.name };
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        structureProjectList: action.payload.data,
        structureList: structureListData,
      };
    case SITE_REQUIRMENT_LIST:
      return {
        ...state,
        siteRequirementList: action.payload,
      };
    case `${ADD_REQUIREMENT}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${ADD_REQUIREMENT}_REJECTED`:
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
    case `${ADD_REQUIREMENT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case `${ACTION_REQUIREMENT}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${ACTION_REQUIREMENT}_REJECTED`:
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
    case `${ACTION_REQUIREMENT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: action.payload.data.message,
      };
    case `${GET_REQUIREMENT_DATA_SINGLE}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_REQUIREMENT_DATA_SINGLE}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.data.message,
      };
    case `${GET_REQUIREMENT_DATA_SINGLE}_FULFILLED`:
      return {
        ...state,
        requirementViewMore: action.payload.data,
      };
    case VIEW_REQUIREMENTS_MORE_PAGE:
      return {
        ...state,
        showViewMore: action.payload,
      };
    case CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS:
      return {
        ...state,
        showrequirementMoreModal: action.payload,
      };
    case RESET_REQUIREMENT_MODAL:
      return { ...state, viewMoreActiveItem: {}, activeItem: {} };
    case RESET_REQUIREMENT_FORM:
      return {
        ...state,
        projectId: {},
        remarks: "",
        status: "",
        siteRequirementStructures: [],
        actualStartDateOfUsage: "",
        actualWorkBreak: {},
        expectedReleaseDate: "",
        planedStartDate: "",
        plannedReleaseDate: "",
        projectName: {},
        requiredWorkBreak: {},
        siteRequirementList: [],
        savedRequirementList: [],
        activeItem: {},
        viewMoreActiveItem: {},
      };
    case `${LIST_REQUIREMENTS}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case `${LIST_REQUIREMENTS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case `${LIST_REQUIREMENTS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        requirementsList: action.payload.data,
      };
    case SET_ACTIVE_ITEM:
      let temp = state.siteRequirementList.filter((item) => {
        return item.itemId === action.payload;
      });
      return { ...state, activeItem: JSON.parse(JSON.stringify(temp[0])) };
    case SAVE_REQUIREMENT_MODAL_VALUES:
      return {
        ...state,
        savedRequirementList: action.payload.savedReqList,
        siteRequirementList: action.payload.siteReqList,
      };
    case REQUIREMENT_VIEW_MORE:
      let tempActiveItem = state.savedRequirementList.filter((item) => {
        return item.id === action.payload.id;
      });
      return {
        ...state,
        showViewMoreModal: action.payload.flag,
        viewMoreActiveItem: tempActiveItem ? tempActiveItem[0] : {},
      };
    case WBS_CODE_LIST:
      return { ...state, wbsList: action.payload };
    case WBS_SEGMENT_LIST:
      return { ...state, segmentList: action.payload };
    case WBS_SUBSEGMENT_LIST:
      return { ...state, subSegmentList: action.payload };
    case WBS_ELEMENT_LIST:
      return { ...state, elementList: action.payload };
    default:
      return state;
  }
}
