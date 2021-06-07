import { connect } from "react-redux";
import store from "../../store";
import {
	usersList,
	userFetch,
	getProjectDetails,
	getRolesList,
	projectCodesList,
	getVendorCodeList,
} from "../../actions/usersAction";

import {
	COMPONENT_TYPE,
	RESET_STRUCTURE_FORM,
	CHANGE_ADD_USERS_MODAL_STATUS,
	SHOW_ADD_USERS_MSG,
	SET_COMPONENT_EDIT_MODE,
	COMPONENT_TYPE_STATUS,
	USER_EDIT_PAGE,
	USER_STATUS,
} from "../../actions/types";
import ViewUsers from "../../pages/users/ViewUsers";

const mapDispatchToProps = (dispatch) => {
	return {
		usersList() {
			dispatch(usersList());
			dispatch(getVendorCodeList());
		},
		showAddUsersModal() {
			dispatch({
				type: CHANGE_ADD_USERS_MODAL_STATUS,
				payload: true,
			});
			dispatch({
				type: SHOW_ADD_USERS_MSG,
				payload: false,
			});
			dispatch(projectCodesList());
			dispatch(getRolesList());
		},
		handleEdit(id) {
			dispatch(projectCodesList());
			dispatch(getRolesList());
			dispatch(userFetch(id)).then(() => {
				dispatch(getProjectDetails());
				dispatch({
					type: USER_EDIT_PAGE,
					payload: true,
				});
				dispatch({
					type: CHANGE_ADD_USERS_MODAL_STATUS,
					payload: true,
				});
			});
		},
		handleUserStatus(value) {
			dispatch({
			  type:USER_STATUS,
			  payload: value,
			});
		  },
	};
};

const mapStateToProps = (state) => {
	const users = store.getState().users;
	return {
		users,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers);
