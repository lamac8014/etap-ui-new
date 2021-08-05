import { connect } from "react-redux";
import TwccPhyVerificationApprove from "../../pages/PhysicalVerficationApprovePage/TwccPhyVerificationApprove";
import { getTwccPhyVerificationApproveData } from "../../actions/twccPhyVerificationApproveActions";

const mapDispatchToProps = (dispatch) => {
    return {
        getTwccPhyVerificationApproveData() {
            dispatch(getTwccPhyVerificationApproveData());
        },
    }
}
const mapStateToProps = (state) => {
    const twccPhyVerificationApprove = state.twccPhyVerificationApprove;
    return {
        twccPhyVerificationApprove,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TwccPhyVerificationApprove);