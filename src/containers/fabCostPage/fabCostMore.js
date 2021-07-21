import { connect } from "react-redux";
import FabCostMore from "../../pages/FabCostPage/FabCostMore";
const mapDispatchToProps = (dispatch, props) => {
    return {
        // redirectToFabCostMoreDetails(id) {
        //     props.history.push(
        //       `/etrack/fabCostPage/fabCostMore${window.btoa(id)}`
        //     );
        // },
    }
}
const mapStateToProps = (state) => {
    const fabCost = state.fabCost;
    return {
        fabCost,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FabCostMore);