import { GET_DASHBOARD_DATA, GET_PROJECT_LIST_DASHBOARD, GET_BU_LIST_DASHBOARD,
  TRANSFORM_PROJECT_DATA, SET_BU, SET_PROJECT } from "../actions/types"

const initialState = {
    isLoading: false,
    errorMessage: "",
    dashBoardDetails: {},
    projectList:[],
    buList:[],
    bu:{},
    project:{}
}

export default function (state = initialState, action){
    switch(action.type) {
        case `${GET_DASHBOARD_DATA}_PENDING`:
      return {
        ...state,
        isloading: true,
      };
    case `${GET_DASHBOARD_DATA}_REJECTED`:
      return {
        ...state,
        isloading: false,
        errorMessage: action.payload.response.data.message,
      };
    case `${GET_DASHBOARD_DATA}_FULFILLED`:
      return {
        ...state,
        isloading: false,
        dashBoardDetails: action.payload.data.length > 0 ? action.payload.data[0] : {},
      };
      case `${GET_BU_LIST_DASHBOARD}_PENDING`:
        return {
          ...state,
          isloading: true,
        };
      case `${GET_BU_LIST_DASHBOARD}_REJECTED`:
        return {
          ...state,
          isloading: false,
          errorMessage: action.payload.response.data.message,
        };
      case `${GET_BU_LIST_DASHBOARD}_FULFILLED`:
        return {
          ...state,
          isloading: false,
          buList: action.payload.data.length > 0 ? action.payload.data : [],
        };
      case `${GET_PROJECT_LIST_DASHBOARD}_PENDING`:
        return {
          ...state,
          isloading: true,
        };
      case `${GET_PROJECT_LIST_DASHBOARD}_REJECTED`:
        return {
          ...state,
          isloading: false,
          errorMessage: action.payload.response.data.message,
        };
      case `${GET_PROJECT_LIST_DASHBOARD}_FULFILLED`:
        return {
          ...state,
          isloading: false,
          projectList: action.payload.data.length > 0 ? action.payload.data : [],
        };
        case `${TRANSFORM_PROJECT_DATA}_FULFILLED`:
          return {
            ...state,
            isloading: false,
            projectList: action.payload.data.length > 0 ? action.payload.data : [],
          };
        case SET_BU:
          return {
            ...state,
            bu: action.payload
          };
        case SET_PROJECT:
          return {...state, project: action.project}
      default:
        return state;
    }

}