import {
    VENDOR_NAME,
    VENDOR_CODE,
    VENDOR_EMAIL,
    VENDOR_CONTACT_NUMBER,
    RESET_STRUCTURE_FORM,


} from '../actions/types';

const initialState = {
    vendorName: '',
    vendorCode: '',
    vendorEmail: '',
    contactNumber: '',

};

export default function (state = initialState, action) {
    switch (action.type) {
        case VENDOR_NAME:
            return {
                ...state,
                vendorName: action.payload,
            };
        case VENDOR_CODE:
            return {
                ...state,
                vendorCode: action.payload,
            };
        case VENDOR_EMAIL:
            return {
                ...state,
                vendorEmail: action.payload,
            };
        case VENDOR_CONTACT_NUMBER:
            return {
                ...state,
                contactNumber: action.payload,
            };

        case RESET_STRUCTURE_FORM:
            return {
                ...state,
                vendorName: '',
                vendorCode: '',
                vendorEmail: '',
                contactNumber: '',
            };
        default:
            return state;
    }
}
