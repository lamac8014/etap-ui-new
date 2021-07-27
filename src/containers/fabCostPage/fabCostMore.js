import { connect } from "react-redux";
import FabCostMore from "../../pages/FabCostPage/FabCostMore";
import {getFabricationCost} from "../../actions/fabCostActions";
const mapDispatchToProps = (dispatch, props) => {
    return {
        // redirectToFabCostMoreDetails(id) {
        //     props.history.push(
        //       `/etrack/fabCostPage/fabCostMore${window.btoa(id)}`
        //     );
        // },
        getFabricationCost(){
            dispatch(getFabricationCost());
        },

    }
}
const mapStateToProps = (state) => {
    const fabCost = state.fabricationCost;
    return {
        fabCost,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FabCostMore);