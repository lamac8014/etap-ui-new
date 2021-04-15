import { CMPC_UPDATE_STRUCTURE, LIST_CMPC_DETAILS } from "./types";
import store from "../store";
import config from "../config";
import axios from "axios";

export const getCmpcList = () => {
	return {
		type: LIST_CMPC_DETAILS,
		payload: axios.get(
			`${config.BASE_URL}/api/SiteDispatchReuse/GetDispatchStructureForCMPC?id=1`
		),
	};
};

export const updateDispatchStructure = () => {
	let cmpc = store.getState().cmpcReuse;
	let isModification = cmpc.isModification;
	let data = [];

	cmpc.selectedItems.map((item) => {
		let tempObj = {
			dispreqId: item.dispatchRequirementId,
			projStructId: item.projectStructureId,
			isModification,
			dispatchRequirementId: item.dispatchRequirementId,
		};
		data.push(tempObj);
	});

	return {
		type: CMPC_UPDATE_STRUCTURE,
		payload: axios.put(
			`${config.BASE_URL}/api/SiteDispatchReuse/UpdatestructureModify`,
			data
		),
	};
};
