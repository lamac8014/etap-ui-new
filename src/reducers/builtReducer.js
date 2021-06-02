import { act } from 'react-dom/test-utils';
import {

     SET_BUILT_EDIT_MODE,
     LIST_BUILT_DETAILS, 
     CHANGE_BUILT_MORE_MODAL_STATUS, 
     CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
     GET_AS_BUILD_STRUCTURE
} from '../actions/types';

const initialState = {

    isAddComponentMsg: false,
    isEditMode: false,
    isLoading: false,
    isError: false,
    message: "",
    asBuildStructure:[]

};

export default function (state = initialState, action) {
    switch (action.type) {

        case LIST_BUILT_DETAILS:
            return {
                ...state,
                builtTypeList: action.payload
            }
        case CHANGE_BUILT_MORE_MODAL_STATUS:
            return {
                ...state,
                showBuiltViewMoreModal: action.payload
            }
        case CHANGE_BUILT_EDIT_MORE_MODAL_STATUS:
            return {
                ...state,
                showBuiltEditMoreModal: action.payload
            }


        case SET_BUILT_EDIT_MODE:
            return {
                ...state,
                isEditMode: action.payload,
            };
        case `${GET_AS_BUILD_STRUCTURE}_PENDING`:
            return { 
                ...state, 
                isloading: true };
        case `${GET_AS_BUILD_STRUCTURE}_REJECTED`:
            return {
              ...state,
              isloading: false,
              isError: true,
              message: action.payload.response.data.message,
            };
        case `${GET_AS_BUILD_STRUCTURE}_FULFILLED`:
            return {
              ...state,
              isloading: false,
              isError: false,
              asBuildStructure: action.payload.data,
            };

        default:
            return state;
    }
}
