import { connect } from "react-redux";
import BvDprMore from "../../pages/depreciation/BvDprMore";
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
    const bvDprMore = state.bvDprMore;
    return {
        bvDprMore,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BvDprMore);