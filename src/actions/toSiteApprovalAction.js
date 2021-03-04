import axios from "axios";
import store from "../store";
import config from "../config";
import {

    GET_TO_SITE_APPROVAL_DATA_SINGLE,
    SET_TO_SITE_APPROVAL_DETAILS,
    ACTION_SITE_APPROVAL,
    ACTION_SITE_DECLINE

} from "../actions/types";


import { getUserDetails } from "../utils/auth";

export const getToSiteApprovalDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_TO_SITE_APPROVAL_DETAILS,
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

export const singleToSiteApprovalFetch = (id) => {
    const toSiteApproval = store.getState().toSiteApproval;
    const data = toSiteApproval.toSiteApprovalList[id];
    return {
        type: GET_TO_SITE_APPROVAL_DATA_SINGLE,
        payload: data,
    };
}