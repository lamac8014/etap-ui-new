import { connect } from "react-redux";
import TwccApprove from "../../pages/TwccApprovePage/TwccApprove";
// import {fabricationStructure, getFabricationCost} from "../../actions/fabCostActions";

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
const mapStateToProps = (state) => {
    const twccApprove = state.twccApprove;
    return {
        twccApprove,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TwccApprove);