import React from 'react';
import {
    LIST_SURPLUS_DETAILS,
    CHANGE_SURPLUS_MORE_MODAL_STATUS,
    SET_SURPLUS_EDIT_MODE

} from '../actions/types';

const initialState = {

    isAddComponentMsg: false,
    isEditMode: false,
    isLoading: false

};

export default function (state = initialState, action) {
    switch (action.type) {

        case LIST_SURPLUS_DETAILS:
            return {
                ...state,
                surplusList: action.payload
            }
        case CHANGE_SURPLUS_MORE_MODAL_STATUS:
            return {
                ...state,
                showSurplusViewMoreModel: action.payload
            }

        case SET_SURPLUS_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.payload,
            };

        default:
            return state;
    }
}
