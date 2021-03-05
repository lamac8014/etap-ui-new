import {
    MR_NUMBER,
    STRUCTURE_FAMILY,
    COMPONENT_TYPE,
    STRUCTURE_ID,
    COMPONENT_ID,
    QUANTITY_REQUESTED,
    FROM_SITE,
    TO_SITE,
    DISPATCH_ADVICE_NUMBER,
    DISPATCHED_ON,
    QUANTITY_DISPATCHED,
    TRANSFER_PRICE,
    RESET_STRUCTURE_FORM,
    STRUCTURE_NAME


} from '../actions/types';

const initialState = {
    isEditMode:false,
    mrNumber: '',
    structureFamily: '',
    componentType: '',
    structureId: '',
    structureName: '',
    componentId: '',
    quantityRequested: '',
    fromSite: '',
    toSite: '',
    dispatchAdviceNumber: '',
    dispatchedOn: '',
    quantityDispatched: '',
    transferPrice: '',
    

};

export default function (state = initialState, action) {
    switch (action.type) {
        case MR_NUMBER:
            return {
                ...state,
                mrNumber: action.payload,
            };
        case STRUCTURE_FAMILY:
            return {
                ...state,
                structureFamily: action.payload,
            };
        case COMPONENT_TYPE:
            return {
                ...state,
                componentType: action.payload,
            };
        case STRUCTURE_ID:
            return {
                ...state,
                structureId: action.payload,
            };
        case STRUCTURE_NAME:
            return {
                ...state,
                structureName: action.payload,
            };
        case QUANTITY_REQUESTED:
            return {
                ...state,
                quantityRequested: action.payload,
            };
        case FROM_SITE:
            return {
                ...state,
                fromSite: action.payload,
            };
        case TO_SITE:
            return {
                ...state,
                toSite: action.payload,
            };
        case DISPATCH_ADVICE_NUMBER:
            return {
                ...state,
                dispatchAdviceNumber: action.payload,
            };
        case DISPATCHED_ON:
            return {
                ...state,
                dispatchedOn: action.payload,
            };
        case QUANTITY_DISPATCHED:
            return {
                ...state,
                quantityDispatched: action.payload,
            };
        case TRANSFER_PRICE:
            return {
                ...state,
                transferPrice: action.payload,
            };

        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                mrNumber: '',
                structureFamily: '',
                componentType: '',
                structureId: '',
                structureName: '',
                componentId: '',
                quantityRequested: '',
                fromSite: '',
                toSite: '',
                dispatchAdviceNumber: '',
                dispatchedOn: '',
                quantityDispatched: '',
                transferPrice: '',
            };
        default:
            return state;
    }
}
