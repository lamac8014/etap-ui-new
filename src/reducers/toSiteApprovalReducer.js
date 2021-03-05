import {
    SET_TO_SITE_APPROVAL_DETAILS,
    SET_ACTIVE_ITEM,
    RESET_UPDATE_TO_SITE_APPROVAL_MODAL,
    ACTION_SITE_APPROVAL,
    ACTION_SITE_DECLINE

} from "../actions/types";
const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    toSiteApprovalDetails: [],
    activeItem: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${SET_TO_SITE_APPROVAL_DETAILS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${SET_TO_SITE_APPROVAL_DETAILS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.error,
            };
        case `${SET_TO_SITE_APPROVAL_DETAILS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                toSiteApprovalDetails: action.payload.data,
            };
        case `${ACTION_SITE_APPROVAL}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${ACTION_SITE_APPROVAL}_REJECTED`:
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
        case `${ACTION_SITE_APPROVAL}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                message: action.payload.data.message
            };
        case `${ACTION_SITE_DECLINE}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${ACTION_SITE_DECLINE}_REJECTED`:
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
        case `${ACTION_SITE_DECLINE}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                message: action.payload.data.message
            };

        case SET_ACTIVE_ITEM:
            const activeItem = state.toSiteApprovalDetails.filter((item) => {
                return item.dispatchId === action.payload;
            })[0];
            return { ...state, activeItem: activeItem };

        case RESET_UPDATE_TO_SITE_APPROVAL_MODAL:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: false,
                message: "",
                activeItem: {},

            };
        default:
            return state;
    }
};
