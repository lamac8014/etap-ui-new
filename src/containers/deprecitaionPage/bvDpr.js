import { connect } from "react-redux";
import BvDpr from "../../pages/depreciation/BvDpr";
const mapDispatchToProps = (dispatch,props) => {
    return {
        // redirectToFabCostMoreDetails(structureCode) {
        //     props.history.push(
        //       `/etrack/fabCostPage/fabCostMore${window.btoa(structureCode)}`
        //     );
        // },
    }
}
const mapStateToProps = (state) => {
    const bvDpr = state.bvDpr;
    return {
        bvDpr,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BvDpr);