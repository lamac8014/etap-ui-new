import {
    GET_PHYSICAL_VERIFICATION_STRUCTURE,
} from "../actions/types";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    phyVerificationApproveStruct: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${GET_PHYSICAL_VERIFICATION_STRUCTURE}_PENDING`:
            return {
                ...state,
                isloading: true,
            };
        case `${GET_PHYSICAL_VERIFICATION_STRUCTURE}_REJECTED`:
            return {
                ...state,
                isloading: false,
                isError: true,
                message: action.payload.response.data.message,
            };
        case `${GET_PHYSICAL_VERIFICATION_STRUCTURE}_FULFILLED`:
            return {
                ...state,
                isloading: false,
                isError: false,
                phyVerificationApproveStruct : action.payload.data,
            };
        default:
            return state;
    }
};