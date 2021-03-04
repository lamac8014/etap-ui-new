import {
    MR_NUMBER,
    STRUCTURE_FAMILY,
    STRUCTURE_ID,
    QUANTITY,
    DISPATCH,
    RESET_STRUCTURE_FORM,
} from '../actions/types';

const initialState = {
    mrNumber: '',
    structureFamily: '',
    structureId: '',
    quantity: '',
    dispatch: '',

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
        case STRUCTURE_ID:
            return {
                ...state,
                structureId: action.payload,
            };
        case QUANTITY:
            return {
                ...state,
                quantity: action.payload,
            };
        case DISPATCH:
            return {
                ...state,
                dispatch: action.payload,
            };

        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                mrNumber: '',
                structureFamily: '',
                structureId: '',
                quantity: '',
                dispatch: '',

            };
        default:
            return state;
    }
}
