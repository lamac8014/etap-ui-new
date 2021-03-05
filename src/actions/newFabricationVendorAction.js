import axios from "axios";
import store from "../store";
import config from "../config";
import {
    SET_NEW_FABRICATION_VENDOR_DETAILS,
    SET_VENDOR_CODE_LIST,
    UPDATE_VENDOR_DETAILS,
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getVendorDetails = () => {
    const roleName = getUserDetails().roleName;
    return {
        type: SET_NEW_FABRICATION_VENDOR_DETAILS,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getSiteDispatchDetails?role_name=${roleName}`
        ),
    };
};

export const getVendorList = (id, heirarchy) => {
    return {
        type: SET_VENDOR_CODE_LIST,
        payload: axios.get(
            `${config.BASE_URL}/api/SiteDispatch/getStructureListCode?dispReqId=${id}&role_hierarchy=${heirarchy}`
        ),
    };
};

export const updateNewFabricationVendor = () => {
    const newFabricationVendor = store.getState().newFabricationVendor;
    const headers = {
        "Content-Type": "multipart/form-data",
    };
    const data = new FormData();
    data.append(
        "dispatchRequestSubContractorId",
        newFabricationVendor.activeItem.dispatchRequestSubContractorId
    );
    data.append("workOrderNumber", newFabricationVendor.workOrderNumber);
    data.append("dispatchDate", newFabricationVendor.dispatchDate);
    data.append("updatedBy", 1);
    data.append("structureId", newFabricationVendor.structureId.split("R")[1]);
    data.append("uploadDocs", newFabricationVendor.uploadedFile);

    return {
        type: UPDATE_VENDOR_DETAILS,
        payload: axios.put(
            `${config.BASE_URL}/api/SiteDispatch/UpdateSiteDispatch`,
            data,
            headers
        ),
    };
};
