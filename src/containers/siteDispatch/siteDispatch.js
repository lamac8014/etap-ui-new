import { connect } from "react-redux";
import store from "../../store";
import { getSiteDispatchDetails } from "../../actions/siteDispatch";

import SiteDispatch from "../../pages/siteDispatch/SiteDispatch";
import { SET_SHOW_VIEW_MORE } from "../../actions/types";

const mapDispatchToProps = (dispatch, props) => {
	return {
		getSiteDispatchDetails() {
			dispatch(getSiteDispatchDetails());
		},

		redirectToComponentPage(dispStrId, subContId, count, name, code) {
			props.history.push(
				`/etrack/dispatch/vendorComp/${window.btoa(dispStrId)}/${window.btoa(
					subContId
				)}/${window.btoa(count)}/${window.btoa(name)}/${window.btoa(code)}`
			);
		},
		openViewMoreModal(id) {
			let siteDispatch = store.getState().siteDispatch;
			let siteDispatchDetails = JSON.parse(
				JSON.stringify(siteDispatch.siteDispatchDetails)
			);
			let currentStructure = siteDispatchDetails.filter((item) => {
				return item.dispSubContractorId === id;
			});
			dispatch({
				type: SET_SHOW_VIEW_MORE,
				payload: {
					viewMoreFlag: true,
					currentStr: currentStructure[0],
				},
			});
		},
		closeViewMoreModal() {
			dispatch({
				type: SET_SHOW_VIEW_MORE,
				payload: {
					viewMoreFlag: false,
					currentStr: {},
				},
			});
		},
	};
};

const mapStateToProps = (state) => {
	const siteDispatch = store.getState().siteDispatch;
	return {
		siteDispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteDispatch);
