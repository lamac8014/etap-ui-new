import {

    SET_NEW_FABRICATION_VENDOR_DETAILS,
    SET_STRUCTURE,
    SET_TO_SITE,
    SET_QUANTITY_DISPATCHED,
    SET_WORK_ORDER,

    SET_ACTIVE_ITEM,
    
    SET_DISPATCH_DATE,

    SET_SHOW_DISPATCH_MODAL_FLAG,
    RESET_NEW_FABRICATION_VENDOR_MODAL,
    SET_VENDOR_CODE_LIST,
    SET_UPLOADED_FILE,

} from "../actions/types";
const initialState = {
    isLoading: false,
    showDispatchModalFlag: false,
    isError: false,
    isSuccess: false,
    message: "",
    newFabricationVendorDetails: [],
    activeItem: {},

    vendorList: [],
    structure: "",
    toSite: "",
    dipatchDate: "",
    quantityDispatched: "",
    workOrder: "",
    uploadedFile: null,




};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${SET_NEW_FABRICATION_VENDOR_DETAILS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            };
        case `${SET_NEW_FABRICATION_VENDOR_DETAILS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                message: action.payload.error,
            };
        case `${SET_NEW_FABRICATION_VENDOR_DETAILS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                newFabricationVendorDetails: action.payload.data,
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
                vendorList: action.payload.data,
            };


        case SET_STRUCTURE:
            return {
                ...state,
                structure: action.payload
            };
        case SET_TO_SITE:
            return {
                ...state,
                toSite: action.payload
            };
        case SET_DISPATCH_DATE:
            return {
                ...state,
                dipatchDate: action.payload
            };
        case SET_QUANTITY_DISPATCHED:
            return {
                ...state,
                quantityDispatched: action.payload
            };
        case SET_WORK_ORDER:
            return {
                ...state,
                workOrder: action.payload
            };
        case SET_UPLOADED_FILE:
            return { ...state, uploadedFile: action.payload };


        case SET_ACTIVE_ITEM:
            const activeItem = state.vendorList.filter((item) => {
                return item.dispatchId === action.payload;
            })[0];
            return { ...state, activeItem: activeItem };

        case SET_SHOW_DISPATCH_MODAL_FLAG:
            return { ...state, showDispatchModalFlag: action.payload };

        case RESET_NEW_FABRICATION_VENDOR_MODAL:
            return {
                ...state,
                isLoading: false,
                showDispatchModalFlag: false,
                isError: false,
                isSuccess: false,
                message: "",
                newFabricationVendorDetails: [],
                activeItem: {},

                vendor: "",
                structure: "",
                toSite: "",
                dipatchDate: "",
                quantityDispatched: "",
                workOrder: "",

            };
        default:
            return state;
    }
};
