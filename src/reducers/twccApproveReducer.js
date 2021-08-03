import {
    GET_FABRICATION_STRUCTURE,
    GET_FABRICATION_COST,
} from "../actions/types";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    // fabricationCost: [],
    // fabricationComponentCost:[],
};

export default (state = initialState, action) => {
    switch (action.type) {
       
        default:
            return state;
    }
};