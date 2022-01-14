import {GET_FABRICATION_COST_LIST, SET_SHOW_VIEWMORE_MODAL, SET_PAGE_PARAMS, GET_COST_HIRING, TRANSFORM_COST_HIRING ,BVDPR_SET_CURRENT_STRUCTURE} from "../actions/types"

const initialState = {
    isLoading: false,
    errorMessage: "",
    fabricationCostList: [],
    showViewMore: false,
    hiringCost: [],
    params: {},
    currentStructure: {}
}

export default function(state = initialState, action){
    switch (action.type){
        case `${GET_FABRICATION_COST_LIST}_PENDING`: {
            return {...state, isLoading: true}
        }
        case `${GET_FABRICATION_COST_LIST}_FULFILLED`: {
            return {...state, isLoading: false, fabricationCostList: action.payload.data}
        }
        case `${GET_FABRICATION_COST_LIST}_REJECTED`: {
            return {...state, isLoading: false, errorMessage: action.payload.data.message}
        }
        case `${GET_COST_HIRING}_PENDING`: {
            return {...state, isLoading: true}
        }
        case `${GET_COST_HIRING}_FULFILLED`: {
            return {...state, isLoading: false, hiringCost: action.payload.data}
        }
        case `${GET_COST_HIRING}_REJECTED`: {
            return {...state, isLoading: false, errorMessage: action.payload.data.message}
        }
        case SET_SHOW_VIEWMORE_MODAL: {
            return {...state, showViewMore: action.payload}
        }
        case TRANSFORM_COST_HIRING:
            return {...state, hiringCost: action.payload}
        case SET_PAGE_PARAMS:
            return {...state, params: action.payload}
        case BVDPR_SET_CURRENT_STRUCTURE:
            return {...state, currentStructure: action.payload}
        default:
            return  state
    }
}