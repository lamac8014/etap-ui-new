import { connect } from "react-redux";
import FabCost from "../../pages/FabCostPage/FabCost";
import {
    FAB_MORE_MODAL,
    FAB_MORE_PAGE,
    FAB_EDIT_MORE_MODAL,
} from "../../actions/types";
const mapDispatchToProps = (dispatch, props) => {
    return {
        // redirectToFabCostMoreDetails(structureCode) {
        //     props.history.push(
        //       `/etrack/fabCostPage/fabCostMore${window.btoa(structureCode)}`
        //     );
        // },
        handleAddCost(id) {
            dispatch({
                type: FAB_MORE_MODAL,
                payload: true,
            })

        },
        closeFabEditModal() {
            dispatch ({
                type: FAB_MORE_MODAL,
                payload: false,
            })
        },
        showFabCostEditModal() {
            dispatch({
                type: FAB_EDIT_MORE_MODAL,
                payload: false,
            })
        },

    }
}
const mapStateToProps = (state) => {
    const fabCost = state.fabCost;
    return {
        fabCost,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FabCost);