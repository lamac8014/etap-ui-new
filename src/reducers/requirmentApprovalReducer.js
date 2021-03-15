import { act } from 'react-dom/test-utils';
import {
    CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS,
    LIST_REQUIRMENT_APPROVAL_DETAILS
} from '../actions/types';

const initialState = {

    isAddComponentMsg: false,
    isEditMode: false,

};

export default function (state = initialState, action) {
    switch (action.type) {

        case LIST_REQUIRMENT_APPROVAL_DETAILS:
            return {
                ...state,
                requirmentApprovalList: action.payload
            }
        case CHANGE_REQUIRMENT_APPROVAL_MORE_MODAL_STATUS:
            return {
                ...state,
                showRequirmentViewMoreModal: action.payload
            }

        default:
            return state;
    }
}
