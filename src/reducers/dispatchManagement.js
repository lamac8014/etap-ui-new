import {
    MR_NUMBER,
    SITE_NAME,
    DATE_OF_REQUEST,
    REQUEST_RAISED_BY,
    STRUCTURE_FAMILY,
    STRUCTURE_ID,
    QUANTITY_REQUESTED,
    DISPATCH_ADVICE_NUMBER,
    RESET_STRUCTURE_FORM

} from '../actions/types';

const initialState = {
    mrNumber: '',
    siteName: '',
    dateOfRequest: '',
    requestRaisedBy: '',
    structureFamily: '',
    structureId: '',
    quantityRequested: '',
    dispatchAdviceNumber: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MR_NUMBER:
            return {
                ...state,
                mrNumber: action.payload,
            };
        case SITE_NAME:
            return {
                ...state,
                siteName: action.payload,
            };
        case DATE_OF_REQUEST:
            return {
                ...state,
                dateOfRequest: action.payload,
            };
        case REQUEST_RAISED_BY:
            return {
                ...state,
                requestRaisedBy: action.payload,
            };
        case STRUCTURE_FAMILY:
            return {
                ...state,
                structureFamily: action.payload,
            };
        case STRUCTURE_ID:
            return {
                ...state,
                structureId: action.payload,
            };
        case QUANTITY_REQUESTED:
            return {
                ...state,
                quantityRequested: action.payload,
            };
        case DISPATCH_ADVICE_NUMBER:
            return {
                ...state,
                dispatchAdviceNumber: action.payload,
            };
        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                mrNumber: '',
                siteName: '',
                dateOfRequest: '',
                requestRaisedBy: '',
                structureFamily: '',
                structureId: '',
                quantityRequested: '',
                dispatchAdviceNumber: ''
            };
        default:
            return state;
    }
}
