import {
    SET_SHOW_EDIT_MODAL_FLAG,
    SET_ACTIVE_ITEM,
    SET_SHOW_MORE_MODAL_FLAG,
    PROJECT_NAME,

    SET_PHYSICAL_VERIFICATION_DETAILS,
    FROM_DUE,
    TO_DUE,
    RESET_UPDATE_PHYSICAL_VERIFICATION_MODAL

} from "../actions/types";
const initialState = {
    isLoading: false,
    showEditModalFlag: false,
    showMoreModalFlag: false,
    isError: false,
    isSuccess: false,
    message: "",
    physicalVerificationDetails: [],
    activeItem: {},
    projectName: "",
    fromDue: "",
    toDue: "",

};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${SET_PHYSICAL_VERIFICATION_DETAILS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${SET_PHYSICAL_VERIFICATION_DETAILS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.error,
            };
        case `${SET_PHYSICAL_VERIFICATION_DETAILS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                physicalVerificationDetails: action.payload.data,
            };
        case PROJECT_NAME:
            return {
                ...state,
                projectName: action.payload
            };
        case FROM_DUE:
            return {
                ...state,
                fromDue: action.payload
            };
        case TO_DUE:
            return {
                ...state,
                toDue: action.payload
            };


        case SET_ACTIVE_ITEM:
            const activeItem = state.physicalVerificationDetails.filter((item) => {
                return item.dispatchId === action.payload;
            })[0];
            return { ...state, activeItem: activeItem };
        case SET_SHOW_EDIT_MODAL_FLAG:
            return { ...state, showEditModalFlag: action.payload };
        case SET_SHOW_MORE_MODAL_FLAG:
            return { ...state, showMoreModalFlag: action.payload };

        case RESET_UPDATE_PHYSICAL_VERIFICATION_MODAL:
            return {
                ...state,
                isLoading: false,
                showEditModalFlag: false,
                showMoreModalFlag: false,
                isError: false,
                isSuccess: false,
                message: "",
                activeItem: {},
                fromDue: "",
                toDue: "",

            };
        default:
            return state;
    }
};
