import {
    GET_FABRICATIONCOST_APPROVAL_DATA,
    SET_FABCOST_APPROVAL_VIEW_MORE,
    SET_APPROVE_FLAG,
    SET_SHOW_APPROVE_MODAL,
    SET_SHOW_REJECT_MODAL,
    FABAPPROVE_SET_CURRENT_STRUCTURE,
    APPROVE_FABRICATION_STRUCTURE,
    RESET_MODAL_FLAGS
} from "../actions/types"

const initialstate = {
    isLoading: false,
    errorMessage: "",
    fabCostApproveData: [],
    showApproveModal: false,
    showRejectModal: false,
    showViewMoreModal: false,
    currentStructure: {},
    approveMode: ""
}

export default (state = initialstate, action) => {
    switch (action.type) {
        case `${GET_FABRICATIONCOST_APPROVAL_DATA}_PENDING`:
            return { ...state, isLoading: true }
        case `${GET_FABRICATIONCOST_APPROVAL_DATA}_REJECTED`:
            return { ...state, isLoading: false, errorMessage: action.payload.response.data.message }
        case `${GET_FABRICATIONCOST_APPROVAL_DATA}_FULFILLED`:
            return { ...state, isLoading: false, fabCostApproveData: action.payload.data }
        case SET_SHOW_APPROVE_MODAL:
            return { ...state, showApproveModal: true, showRejectModal: false }
        case SET_SHOW_REJECT_MODAL:
            return { ...state, showApproveModal: false, showRejectModal: true }
        case FABAPPROVE_SET_CURRENT_STRUCTURE:
            return { ...state, currentStructure: action.payload }
        case SET_FABCOST_APPROVAL_VIEW_MORE:
            return { ...state, showViewMoreModal: action.payload }
        case RESET_MODAL_FLAGS:
            return {...state, showApproveModal: false, showRejectModal: false, approveMode: ""}
        case SET_APPROVE_FLAG:
            return {...state, approveMode: action.payload}
        default:
            return state
    }
} 