import axios from "axios";
import store from "../store";
import config from "../config";
import {
    SET_SITE_APPROVAL_DETAILS,
    ACTION_SITE_APPROVAL,
    ACTION_SITE_DECLINE,
    SET_SITE_APPROVAL_MORE_DETAILS
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getSiteApprovalDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_SITE_APPROVAL_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}&role_hierarchy=4`
        ),
    };
};
export const getSiteApprovalMoreDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_SITE_APPROVAL_MORE_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}&role_hierarchy=4`
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
        "roleHierarchy": 0
    }
console.log(`SiteApproval Data: ${body}`)
    return {
        type: ACTION_SITE_APPROVAL,
        // payload: axios.post(config.BASE_URL + '​/api/SiteDispatch/SiteDispatchApproval', body)
        payload: axios.post(`${config.BASE_URL }/api/siteDispatch/siteDispatchApproval`, body)
    }
}
export const siteDeclineAction = (singleSiteApproval, action) => {
    const { roleId, roleName } = getUserDetails();

    const body = {
        "dispReqId": singleSiteApproval.dispatchId,
        "roleName": roleName,
        "roleId": roleId,
        "serviceTypeId": singleSiteApproval.serviceTypeId,
        "roleHierarchy": 0
    }

    return {
        type: ACTION_SITE_DECLINE,
        payload: axios.post(`${config.BASE_URL}/api/SiteDispatch/SiteDispatchRejection`, body)
    }
}
