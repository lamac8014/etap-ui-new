import store from '../store';
import axios from 'axios';
import config from '../config';
import { getUserDetails } from "../utils/auth";

import { ACTION_REQUIREMENT, GET_REQUIREMENT_DATA_SINGLE, LIST_REQUIRMENT_APPROVAL_DETAILS } from './types';

export const requirmentApprovalList = () => {

    const userDetails = getUserDetails();
    let ROLE_NAME = userDetails.roleName;
    return {
        type: LIST_REQUIRMENT_APPROVAL_DETAILS,
        payload: axios.get(
            config.BASE_URL +
            `/api/SiteRequirement/getSiteReqDetails?role_name=${ROLE_NAME}`
        ),
    };
}

export const requirementAction = (id, action) => {
    let auth = store.getState().auth;
    const ROLE_NAME = auth.token.roleName;
    let requirementList = store.getState().requirement.requirementsList;
    let singleRequirement = requirementList[id];
    const body = {
      siteReqId: singleRequirement.id,
      mode: action,
      role_name: auth.token.roleName,
    };
  
    return {
      type: ACTION_REQUIREMENT,
      payload: axios.post(
        config.BASE_URL + "/api/SiteRequirement/WorkflowManagement",
        body
      ),
    };
  };

  export const singleRequirementFetch = (id) => {
    const requirement = store.getState().requirement;
    const data = requirement.requirementsList[id];
    console.log(`Single Requirement Data: ${JSON.stringify(data)}`);
    return {
      type: GET_REQUIREMENT_DATA_SINGLE,
      payload: data,
    };
  };