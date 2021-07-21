import { connect } from "react-redux";
import Summary from "../../pages/dashBoard/Summary";
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const mapStateToProps = (state) => {
    const summary = state.summary;
    return {
        summary,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Summary);