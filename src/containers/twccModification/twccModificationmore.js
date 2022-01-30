import { connect } from "react-redux";
import store from "../../store";

import {
	SET_EDIT_MODAL_FLAG,
	SET_CURRENT_STRUCTURE,
	SET_IS_SITE,
	SET_IS_VENDOR,
	SET_VENDOR_CODE,
} from "../../actions/types";
import {
	getVendorCodeList,
	updateComponentHistory,
} from "../../actions/twccModificationAction";
import swal from "sweetalert";

import ViewMoretwccModification from "../../pages/twccModification/TwccModificationmore";

const mapDispatchToProps = (dispatch) => {
	return {
		getVendorCodeList() {
			dispatch(getVendorCodeList());
		},
		closeEditModal() {
			dispatch({
				type: SET_EDIT_MODAL_FLAG,
				payload: false,
			});
			dispatch({
				type: SET_CURRENT_STRUCTURE,
				payload: {},
			});
		},
		setIsSite(value) {
			dispatch({
				type: SET_IS_SITE,
				payload: !value,
			});
			dispatch({
				type: SET_IS_VENDOR,
				payload: value,
			});
			dispatch({
				type: SET_VENDOR_CODE,
				payload: 0,
			});
		},
		setIsVendor(value) {
			dispatch({
				type: SET_IS_VENDOR,
				payload: !value,
			});
			dispatch({
				type: SET_IS_SITE,
				payload: value,
			});
		},
		setVendorVode(object) {
			dispatch({
				type: SET_VENDOR_CODE,
				payload: object.value,
			});
		},
		updateComponentHistory() {
			dispatch(updateComponentHistory())
				.then((response) => {
					swal("Structure updated successfully", {
						icon: "success",
					});
					dispatch({
						type: SET_EDIT_MODAL_FLAG,
						payload: false,
					});
					dispatch({
						type: SET_CURRENT_STRUCTURE,
						payload: {},
					});
				})
				.catch((err) => {
					swal("Failed", {
						icon: "error",
					});
				});
		},
	};
};

const mapStateToProps = (state) => {
	const twcc = store.getState().twcc;
	return {
		twcc,
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewMoretwccModification);
