import store from "../store";
import axios from "axios";
import config from "../config";
import {
	LIST_USERS,
	LIST_PROJECT_CODES,
	GET_PROJECT_DETAILS,
	GET_ROLES_LIST,
	ADD_USER,
	GET_USER_SINGLE,
	UPDATE_USER,
	GET_VENDOR_CODE_LIST,
} from "./types";

export const addUser = () => {
	const users = store.getState().users;
	const body = {
		firstName: users.firstName,
		lastName: users.lastName,
		userName: users.psNo,
		email: users.email,
		mobileNo: "00000",
		projectId: users.project.value,
		icId: users.icId,
		buId: users.buId,
		segmentId: users.segmentId,
		userId: 0,
		roleId: users.role.value,
		vendorId: users.vendor.value,
	};
	return {
		type: ADD_USER,
		payload: axios.post(config.BASE_URL + "/api/User/adduser", body),
	};
};
export const getVendorCodeList = () => {
	return {
		type: GET_VENDOR_CODE_LIST,
		payload: axios.get(`${config.BASE_URL}/api/Vendor/vendorCodeList`),
	};
};

export const usersList = () => {
	return {
		type: LIST_USERS,
		payload: axios.get(config.BASE_URL + "/api/User/getuser"),
	};
};

export const projectCodesList = () => {
	return {
		type: LIST_PROJECT_CODES,
		payload: axios.get(config.BASE_URL + "/api/Project/projCodeList"),
	};
};

export const getProjectDetails = () => {
	const { project } = store.getState().users;
	return {
		type: GET_PROJECT_DETAILS,
		payload: axios.get(
			config.BASE_URL + "/api/Project/getProjDetailsById/" + project.value
		),
	};
};

export const getRolesList = () => {
	const { project } = store.getState().users;
	return {
		type: GET_ROLES_LIST,
		payload: axios.get(config.BASE_URL + "/api/PageAccess/getroles"),
	};
};

export const userFetch = (id) => {
	return {
		type: GET_USER_SINGLE,
		payload: axios.get(config.BASE_URL + "/api/User/getuser/" + id),
	};
};

export const updateUser = () => {
	const users = store.getState().users;
	const body = {
		firstName: users.firstName,
		lastName: users.lastName,
		userName: users.psNo,
		email: users.email,
		mobileNo: "00000",
		projectId: users.project.value,
		icId: users.icId,
		buId: users.buId,
		segmentId: users.segmentId,
		userId: users.userId,
		roleId: users.role.value,
		vendorId: users.vendor.value,
	};
	return {
		type: UPDATE_USER,
		payload: axios.put(
			config.BASE_URL + "/api/User/updateuser/" + users.userId,
			body
		),
	};
};
