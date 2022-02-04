import { connect } from "react-redux";
import {getDashboardData } from "../../actions/dashboardActions"
import Summary from "../../pages/dashBoard/Summary";
const mapDispatchToProps = (dispatch) => {
    return {
        getDashBoardDetails(){
            dispatch(getDashboardData());
        }
    }
}
const mapStateToProps = (state) => {
    const dashboard = state.dashboard;
    return {
        dashboard,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Summary);