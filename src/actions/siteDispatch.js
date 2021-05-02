import axios from "axios";
import store from "../store";
import config from "../config";
import {
	SET_SITE_DISPATCH_DETAILS,
	SET_STRUCTURE_LIST_CODE,
	UPDATE_SITE_DISPATCH,
	GET_COMPONENT_DETAILS_VENDOR,
	GET_VENDOR_DETAILS,
} from "../actions/types";
import { getUserDetails } from "../utils/auth";

export const getSiteDispatchDetails = () => {
	const userDetails = getUserDetails();
	return {
		type: GET_VENDOR_DETAILS,
		payload: axios.get(
			`${config.BASE_URL}/api/SiteDispatch/getSubContractorDetails?vendorId=${userDetails.vendorId}`
		),
	};
};

export const getStructureListCode = (id) => {
	const roleName = getUserDetails().roleName;
	return {
		type: SET_STRUCTURE_LIST_CODE,
		payload: axios.get(
			`${config.BASE_URL}/api/SiteDispatch/getStructureListCode?dispReqId=${id}&role_hierarchy=${roleName}`
		),
	};
};

export const getComponentData = (dispStructureId) => {
	return {
		type: GET_COMPONENT_DETAILS_VENDOR,
		payload: axios.get(
			`${config.BASE_URL}/api/SiteDispatch/getSubContractorComponentDetails?dispStructureId=${dispStructureId}`
		),
	};
};

export const updateSiteDispatch = () => {
	const siteDispatch = store.getState().siteDispatch;
	const headers = {
		"Content-Type": "multipart/form-data",
	};
	let idString = "";
	siteDispatch.selectedComponents.map((item, index) => {
		console.log(item);
		idString = idString + item.toString();
		idString =
			index !== siteDispatch.selectedComponents.length - 1
				? idString + ","
				: idString + "";
		// console.log("*****************", idString);
	});
	const data = new FormData();
	data.append("dispSubContractorId", siteDispatch.subContId);
	data.append("dispatchReqSubContractorStructureIds", idString);
	data.append("componentCount", siteDispatch.selectedComponents.length);
	data.append("dispatchDate", siteDispatch.dispatchDate);
	data.append("uploadDocs", siteDispatch.woFile);

	// console.log([...data.entries()]);

	return {
		type: UPDATE_SITE_DISPATCH,
		payload: axios.put(
			`${config.BASE_URL}/api/SiteDispatch/uploadDispatchSubContractorComponents`,
			data,
			headers
		),
	};
};
