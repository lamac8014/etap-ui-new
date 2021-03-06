import React from 'react';
import {
    LIST_SCRAP_DETAILS,
    CHANGE_SCRAP_MORE_MODAL_STATUS,
    SET_SCRAP_EDIT_MODE

} from '../actions/types';

const initialState = {

    isAddComponentMsg: false,
    isEditMode: false,
    isLoading: false

};

export default function (state = initialState, action) {
    switch (action.type) {

        case LIST_SCRAP_DETAILS:
            return {
                ...state,
                scrapList: action.payload
            }
        case CHANGE_SCRAP_MORE_MODAL_STATUS:
            return {
                ...state,
                showScrapViewMoreModel: action.payload
            }

        case SET_SCRAP_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.payload,
            };


        default:
            return state;
    }
}
