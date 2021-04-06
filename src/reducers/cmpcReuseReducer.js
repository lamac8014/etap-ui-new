import React from 'react';
import {
    LIST_CMPC_DETAILS,
    CHANGE_CMPC_MORE_MODAL_STATUS,
    SET_CMPC_EDIT_MODE,
    TRANSFORM_SITE_REQUIREMENTS
} from '../actions/types';

const initialState = {

    isAddComponentMsg: false,
    isEditMode: false,
    isLoading: false

};

export default function (state = initialState, action) {
    switch (action.type) {

        case LIST_CMPC_DETAILS:
            return {
                ...state,
                cmpcList: action.payload
            }
        case CHANGE_CMPC_MORE_MODAL_STATUS:
            return {
                ...state,
                showCmpcViewMoreModel: action.payload
            }

        case SET_CMPC_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.payload,
            };

            case TRANSFORM_SITE_REQUIREMENTS:
                return { ...state, transformedSiteReq: action.payload };
        default:
            return state;
    }
}
