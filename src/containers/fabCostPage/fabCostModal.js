import { connect } from "react-redux";
import {
    FAB_MORE_MODAL,
    FAB_MORE_PAGE,
    FAB_EDIT_MORE_MODAL,
} from "../../actions/types";
import FabCostModal from "../../pages/FabCostPage/FabCostModal";
const mapDispatchToProps = (dispatch, props) => {
    return {
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
        handleAddCost(id) {
            dispatch({
                type: FAB_MORE_MODAL,
                payload: true,
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
export default connect(mapStateToProps, mapDispatchToProps)(FabCostModal);