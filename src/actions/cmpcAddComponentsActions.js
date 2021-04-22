import {
	GET_DISPATCH_STRUCTURE_DATA,
	GET_ASSIGNED_STRUCTURE_DETAILS,
	UPDATE_STRUCTURE_MODIFY,
	UPDATE_DISPATCH_STRUCTURE,
} from "./types";
import store from "../store";
import axios from "axios";
import config from "../config";

export const getDispatchStructureData = () => {
	return {
		type: GET_DISPATCH_STRUCTURE_DATA,
		payload: axios.get(
			`${config.BASE_URL}/api/SiteDispatch/GetDispatchStructureForCMPC`
		),
	};
};

export const getAssignedStructureData = (projStructId) => {
	return {
		type: GET_ASSIGNED_STRUCTURE_DETAILS,
		payload: axios.get(
			`${config.BASE_URL}/api/StructureComponent/GetAssignedStructureDetailsByProjStructId?projStructId=${projStructId}`
		),
	};
};

export const updateDispatchStructure = () => {
	let cmpcAdd = store.getState().cmpcAdd;
	let headers = {
		"Content-Type": "multipart/form-data",
	};
	let data = new FormData();
	data.append("projStructureId", parseInt(cmpcAdd.projStructId));
	data.append("drawingNo", cmpcAdd.drNo);
	data.append("estimatedWeight", cmpcAdd.estWeight);
	data.append("compCount", parseInt(cmpcAdd.noOfComp));
	data.append("uploadDocs", cmpcAdd.files);
	data.append("remove_docs_filename", cmpcAdd.removeFiles);
	data.append("dispStructureId", parseInt(cmpcAdd.dispStructId));
	data.append(
		"structureAttValue",
		cmpcAdd.assignedStructureDetails.structureAttributes
	);
	data.append("structrueName", cmpcAdd.assignedStructureDetails.structrueName);

	return {
		type: UPDATE_DISPATCH_STRUCTURE,
		payload: axios.post(
			`${config.BASE_URL}/api/SiteDispatch/CMPCStructureUpdate`,
			data,
			headers
		),
	};
};

export const updateStructureModify = () => {
	let cmpcAdd = store.getState().cmpcAdd;
	let uploadData = cmpcAdd.uploadData;
	let components = [];

	uploadData &&
		uploadData.map((item) => {
			let tempObj = {
				compId: item.compId,
				compTypeName: item.compTypeName,
				componentName: item.componentName,
				drawingNo: item.drawingNo,
				componentNo: parseInt(item.componentNo),
				isGroup: item.isGroup === "Yes" ? "true" : "false",
				leng: item.leng,
				breath: item.breath,
				height: item.height,
				thickness: item.thickness,
				weight: item.weight,
				makeType: item.makeType,
				isTag: item.isTag,
				qrCode: item.qrCode,
				isDelete: false,
				isActive: "",
				compStatus: "",
			};

			components.push(tempObj);
		});
	let data = {
		components,
		dispStructureId: cmpcAdd.dispStructId,
	};

	// console.log(data);

	return {
		type: UPDATE_STRUCTURE_MODIFY,
		payload: axios.post(
			`${config.BASE_URL}/api/SiteDispatch/AddComponentsForDispatch`,
			data
		),
	};
};
