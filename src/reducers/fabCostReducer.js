import {
    GET_FABRICATION_STRUCTURE,
    GET_FABRICATION_COST,
} from "../actions/types";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    fabricationCost: [],
    fabricationComponentCost:[],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${GET_FABRICATION_STRUCTURE}_PENDING`:
            return {
                ...state,
                isloading: true
            };
        case `${GET_FABRICATION_STRUCTURE}_REJECTED`:
            return {
                ...state,
                isloading: false,
                isError: true,
                message: action.payload.response.data.message,
            };
        case `${GET_FABRICATION_STRUCTURE}_FULFILLED`:
            return {
                ...state,
                isloading: false,
                isError: false,
                fabricationCost: action.payload.data,
            };
        case `${GET_FABRICATION_COST}_PENDING`:
            return {
                ...state,
                isloading: true
            };
        case `${GET_FABRICATION_COST}_REJECTED`:
            return {
                ...state,
                isloading: false,
                isError: true,
                message: action.payload.response.data.message,
            };
        case `${GET_FABRICATION_COST}_FULFILLED`:
            return {
                ...state,
                isloading: false,
                isError: false,
                fabricationComponentCost: action.payload.data,
            };
        default:
            return state;
    }
};