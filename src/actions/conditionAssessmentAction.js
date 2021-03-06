import axios from "axios";
import store from "../store";
import config from "../config";
import {

    GET_CONDITION_ASSESSMENT_DATA_SINGLE,
    SET_CONDITION_ASSESSMENT_DETAILS,
    ACTION_CONDITION_ASSESSMENT,
    ACTION_SITE_DECLINE,
    ACTION_SITE_APPROVAL,

} from "../actions/types";


import { getUserDetails } from "../utils/auth";

export const getConditionAssessmentDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_CONDITION_ASSESSMENT_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};
export const cmpcList = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_CONDITION_ASSESSMENT_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

// export const conditionAssessmentAction = (id, action) => {
//     const ROLE_NAME = getUserDetails().roleName;
//     let conditionAssessmentList = store.getState().conditionAssessment.conditionAssessmentList;
//     let singleConditionAssessment = conditionAssessmentList[id];
//     const body = {
//         "siteReqId": singleConditionAssessment.id,
//         "mode": action,
//         "role_name": ROLE_NAME,
//     }

//     return {
//         type: ACTION_CONDITION_ASSESSMENT,
//         payload: axios.post(config.BASE_URL + '​/api​/SiteRequirement​/WorkflowManagement', body)
//     }
// }

export const siteApprovalAction = (singleSiteApproval, action) => {
    // const ROLE_NAME = getUserDetails().roleName;
    const { roleId, roleName } = getUserDetails();
    const body = {
        "dispReqId": singleSiteApproval.dispatchId,
        "roleName": roleName,
        "roleId": roleId,
        "serviceTypeId": singleSiteApproval.serviceTypeId,
        
    }

    return {
        type: ACTION_SITE_APPROVAL,
        payload: axios.post(`${config.BASE_URL}​/api/SiteDispatch/SiteDispatchApproval`, body)
    }
}
export const siteDeclineAction = (singleSiteApproval, action) => {
    const { roleId, roleName } = getUserDetails();

    const body = {
        "dispReqId": singleSiteApproval.dispatchId,
        "roleName": roleName,
        "roleId": roleId,
        "serviceTypeId": singleSiteApproval.serviceTypeId,
        
    }

    return {
        type: ACTION_SITE_DECLINE,
        payload: axios.post(`${config.BASE_URL}/api/SiteDispatch/SiteDispatchRejection`, body)
    }
}





export const singleConditionAssessmentFetch = (id) => {
    const conditionAssessment = store.getState().conditionAssessment;
    const data = conditionAssessment.conditionAssessmentList[id];
    return {
        type: GET_CONDITION_ASSESSMENT_DATA_SINGLE,
        payload: data,
    };
}