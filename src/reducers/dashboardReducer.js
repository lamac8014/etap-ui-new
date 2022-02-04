import { GET_DASHBOARD_DATA } from "../actions/types"

const initialState = {
    isLoading: false,
    errorMessage: "",
    dashBoardDetails: {}
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
      default:
        return state;
    }

}