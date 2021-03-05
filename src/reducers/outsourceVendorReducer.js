
import {
    DC_NUMBER,
    QUANTITY_REQUESTED,
    VENDOR,
    DISPATCHED_DATE,
    TO_SITE,
    QUANTITY_DISPATCHED,
    WORK_ORDER,
    RESET_STRUCTURE_FORM,
    MONTHLY_HIRE_CHARGES

} from '../actions/types';

const initialState = {
    dcNumber: '',
    quantityRequested: '',
    vendor: '',
    toSite: '',
    dispatchedDate: '',
    monthlyHireCharges: '',
    quantityDispatched: '',
    workOrderNumber: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DC_NUMBER:
            return {
                ...state,
                dcNumber: action.payload,
            };
        case QUANTITY_REQUESTED:
            return {
                ...state,
                quantityRequested: action.payload,
            };
        case VENDOR:
            return {
                ...state,
                vendor: action.payload,
            };
        case TO_SITE:
            return {
                ...state,
                toSite: action.payload,
            };
        case DISPATCHED_DATE:
            return {
                ...state,
                dispatchedDate: action.payload,
            };
        case MONTHLY_HIRE_CHARGES:
            return {
                ...state,
                monthlyHireCharges: action.payload,
            };
        case QUANTITY_DISPATCHED:
            return {
                ...state,
                quantityDispatched: action.payload,
            };
        case WORK_ORDER:
            return {
                ...state,
                workOrderNumber: action.payload,
            };
        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                dcNumber: '',
                quantityRequested: '',
                vendor: '',
                toSite: '',
                dispatchedDate: '',
                monthlyHireCharges: '',
                quantityDispatched: '',
                workOrderNumber: ''
            };
        default:
            return state;
    }
}
