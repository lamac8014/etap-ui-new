import {
    SET_OUT_SOURCING_SITE_APPROVAL_DETAILS,
    RESET_UPDATE_SITE_APPROVAL_MODAL,
    SET_SHOW_EDIT_MODAL_FLAG,
    SET_ACTIVE_ITEM,
    SET_SHOW_MORE_MODAL_FLAG,
    ACTION_SITE_APPROVAL,
    ACTION_SITE_DECLINE,
} from "../actions/types";
const initialState = {
    isLoading: false,
    showEditModalFlag: false,
    showMoreModalFlag: false,
    isError: false,
    isSuccess: false,
    message: "",
    outSourcingSiteApprovalDetails: [],
    activeItem: {},


};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${SET_OUT_SOURCING_SITE_APPROVAL_DETAILS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${SET_OUT_SOURCING_SITE_APPROVAL_DETAILS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.error,
            };
        case `${SET_OUT_SOURCING_SITE_APPROVAL_DETAILS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                outSourcingSiteApprovalDetails: action.payload.data,
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
            const activeItem = state.outSourcingSiteApprovalDetails.filter((item) => {
                return item.dispatchId === action.payload;
            })[0];
            return { ...state, activeItem: activeItem };
        case SET_SHOW_EDIT_MODAL_FLAG:
            return { ...state, showEditModalFlag: action.payload };
        case SET_SHOW_MORE_MODAL_FLAG:
            return { ...state, showMoreModalFlag: action.payload };

        case RESET_UPDATE_SITE_APPROVAL_MODAL:
            return {
                ...state,
                isLoading: false,
                showEditModalFlag: false,
                showMoreModalFlag: false,
                isError: false,
                isSuccess: false,
                message: "",
                activeItem: {},

            };
        default:
            return state;
    }
};
