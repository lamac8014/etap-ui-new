import { connect } from "react-redux";
import FabCost from "../../pages/FabCostPage/FabCost";
import {
    FAB_MORE_MODAL,
    FAB_MORE_PAGE,
    FAB_EDIT_MORE_MODAL,
    GET_FABRICATION_STRUCTURE,
} from "../../actions/types";
import {fabricationStructure} from "../../actions/fabCostActions";

const mapDispatchToProps = (dispatch) => {
    return {
        // redirectToFabCostMoreDetails(structureCode) {
        //     props.history.push(
        //       `/etrack/fabCostPage/fabCostMore${window.btoa(structureCode)}`
        //     );
        // },
        fabricationStructure(){
            dispatch(fabricationStructure());
        },
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
    const fabCost = state.fabricationCost;
    return {
        fabCost,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FabCost);