import {
    STRUCTURE_FAMILY,
    VENDOR,
    STRUCTURE_ID,
    FABRICATION_COST,
    QUANTITY_REQUESTED,
    RESET_STRUCTURE_FORM,
    PROJECT_NAME,
    NUMBER_OF_COMPONENTS,

} from '../actions/types';

const initialState = {
    structureFamily: '',
    vendor: '',
    structureId: '',
    project: '',
    numberOfComponents: '',
    fabricationCost: '',
    quantityRequested: '',

};

export default function (state = initialState, action) {
    switch (action.type) {
        case STRUCTURE_FAMILY:
            return {
                ...state,
                structureFamily: action.payload,
            };
        case VENDOR:
            return {
                ...state,
                vendor: action.payload,
            };
        case STRUCTURE_ID:
            return {
                ...state,
                structureId: action.payload,
            };
        case PROJECT_NAME:
            return {
                ...state,
                project: action.payload,
            };
        case NUMBER_OF_COMPONENTS:
            return {
                ...state,
                numberOfComponents: action.payload,
            };
        case FABRICATION_COST:
            return {
                ...state,
                fabricationCost: action.payload,
            };
        case QUANTITY_REQUESTED:
            return {
                ...state,
                quantityRequested: action.payload,
            };

        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                structureFamily: '',
                vendor: '',
                structureId: '',
                project: '',
                numberOfComponents: '',
                fabricationCost: '',
                quantityRequested: '',
            };
        default:
            return state;
    }
}
