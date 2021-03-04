import axios from "axios";
import store from "../store";
import config from "../config";
import {
    ACTION_SITE_APPROVAL,
    ACTION_SITE_DECLINE,
    GET_SITE_APPROVAL_DATA_SINGLE,
    SET_OUT_SOURCING_SITE_APPROVAL_DETAILS
} from "../actions/types";


import { getUserDetails } from "../utils/auth";

export const getOutSourcingSiteApprovalDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_OUT_SOURCING_SITE_APPROVAL_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

export const siteApprovalAction = (singleSiteApproval, action) => {

    const { roleId, roleName } = getUserDetails();

    const body = {
        "dispReqId": singleSiteApproval.dispatchId,
        "roleName": roleName,
        "roleId": roleId,
        "serviceTypeId": singleSiteApproval.serviceTypeId,
        "roleHierarchy": 3
    }
    console.log(`SiteApproval Data: ${body}`)
    return {
        type: ACTION_SITE_APPROVAL,
        // payload: axios.post(config.BASE_URL + '​/api/SiteDispatch/SiteDispatchApproval', body)
        payload: axios.post(`${config.BASE_URL}/api/siteDispatch/siteDispatchApproval`, body)
    }
}
export const siteDeclineAction = (singleSiteApproval, action) => {
    const { roleId, roleName } = getUserDetails();

    const body = {
        "dispReqId": singleSiteApproval.dispatchId,
        "roleName": roleName,
        "roleId": roleId,
        "serviceTypeId": singleSiteApproval.serviceTypeId,
        "roleHierarchy": 3
    }

    return {
        type: ACTION_SITE_DECLINE,
        payload: axios.post(`${config.BASE_URL}/api/SiteDispatch/SiteDispatchRejection`, body)
    }
}

// export const singleSiteApprovalFetch = (id) => {
//     const siteApproval = store.getState().siteApproval;
//     const data = siteApproval.siteApprovalList[id];
//     return {
//         type: GET_SITE_APPROVAL_DATA_SINGLE,
//         payload: data,
//     };
// }