import store from '../store';
import axios from 'axios';
import config from '../config';

import{LIST_REQUIRMENT_APPROVAL_DETAILS} from './types';

export const requirmentApprovalList = () => {
    return {
        type: LIST_REQUIRMENT_APPROVAL_DETAILS,
        payload: axios.get(config.BASE_URL + '/api/SiteRequirement/getSiteReqDetails')
    }
}