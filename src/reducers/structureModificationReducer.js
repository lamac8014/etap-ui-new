import {
    DISPATCHED_FROM,
    RECEIVED_AT,
    STRUCTURE_FAMILY,
    STRUCTURE_ID,
    COMPONENT_NAME,
    COMPONENT_ID,
    DRAWING_NO,
    LENGTH,
    WIDTH,
    HEIGHT,
    BREADTH,
    WEIGHT,
    ADDITIONAL_PLATES,
    REMARKS,
    RESET_STRUCTURE_FORM,
} from '../actions/types';

const initialState = {
    dispatchedFrom: '',
    receivedAt: '',
    structureFamily: '',
    structuredId: '',
    componentName: '',
    componentId: '',
    drawingNumber: '',
    dimensionLength: '',
    dimensionWidth: '',
    dimensionHeight: '',
    dimensionBreadth: '',
    dimensionWeight: '',
    length: '',
    width: '',
    height: '',
    breadth: '',
    weight: '',
    additionalPlates: '',
    remarks: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DISPATCHED_FROM:
            return {
                ...state,
                dispatchedFrom: action.payload,
            };
        case RECEIVED_AT:
            return {
                ...state,
                receivedAt: action.payload,
            };
        case STRUCTURE_FAMILY:
            return {
                ...state,
                structureFamily: action.payload,
            };
        case STRUCTURE_ID:
            return {
                ...state,
                structuredId: action.payload,
            };
        case COMPONENT_NAME:
            return {
                ...state,
                componentName: action.payload,
            };
        case COMPONENT_ID:
            return {
                ...state,
                componentId: action.payload,
            };
        case DRAWING_NO:
            return {
                ...state,
                drawingNumber: action.payload,
            };
        case LENGTH:
            return {
                ...state,
                dimensionLength: action.payload,
            };
        case WIDTH:
            return {
                ...state,
                dimensionWidth: action.payload,
            };
        case HEIGHT:
            return {
                ...state,
                dimensionHeight: action.payload,
            };
        case BREADTH:
            return {
                ...state,
                dimensionBreadth: action.payload,
            };
        case WEIGHT:
            return {
                ...state,
                dimensionWeight: action.payload,
            };
        case LENGTH:
            return {
                ...state,
                length: action.payload,
            };
        case WIDTH:
            return {
                ...state,
                width: action.payload,
            };
        case HEIGHT:
            return {
                ...state,
                height: action.payload,
            };
        case BREADTH:
            return {
                ...state,
                breadth: action.payload,
            };
        case WEIGHT:
            return {
                ...state,
                weight: action.payload,
            };
        case ADDITIONAL_PLATES:
            return {
                ...state,
                additionalPlates: action.payload,
            };
        case REMARKS:
            return {
                ...state,
                remarks: action.payload,
            };
        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                dispatchedFrom: '',
                receivedAt: '',
                structureFamily: '',
                structuredId: '',
                componentName: '',
                componentId: '',
                drawingNumber: '',
                dimensionLength: '',
                dimensionWidth: '',
                dimensionHeight: '',
                dimensionBreadth: '',
                dimensionWeight: '',
                length: '',
                width: '',
                height: '',
                breadth: '',
                weight: '',
                additionalPlates: '',
                remarks: '',
            };
        default:
            return state;
    }
}
