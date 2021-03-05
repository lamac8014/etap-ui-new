import axios from "axios";
import store from "../store";
import config from "../config";
import {
    SET_TRANSFER_PRICE_DETAILS,
    ADD_TRANSFER_PRICE
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getTransferPriceDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_TRANSFER_PRICE_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

export const addTransferPrice = () => {
    const { roleName } = getUserDetails();
    const transferPrice = store.getState().transferPrice;
    const data = {
        "dispReqId": transferPrice.dispReqId,
        "roleName": roleName,
        "transferPrice": transferPrice.transferPrice

    };
    return {
        type: ADD_TRANSFER_PRICE,
        payload: axios.post(`${config.BASE_URL}/api/SiteDispatch/DispatchTransferPrice`, data),
    };
};

