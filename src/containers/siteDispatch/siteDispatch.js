import { connect } from "react-redux";
import store from "../../store";
import { getSiteDispatchDetails } from "../../actions/siteDispatch";

import SiteDispatch from "../../pages/siteDispatch/SiteDispatch";

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
	};
};

const mapStateToProps = (state) => {
	const siteDispatch = store.getState().siteDispatch;
	return {
		siteDispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteDispatch);
