import { connect } from "react-redux";
import FabricationCostApproval from "../../pages/fabCostApproval/FabricationCostApproval";
import { getFabricationCostApprovalData, approveFabrication } from "../../actions/fabCostActions";
import {
    SET_FABCOST_APPROVAL_VIEW_MORE,
    SET_APPROVE_FLAG,
    SET_SHOW_APPROVE_MODAL,
    SET_SHOW_REJECT_MODAL,
    FABAPPROVE_SET_CURRENT_STRUCTURE,
    RESET_MODAL_FLAGS
} from "../../actions/types"
import store from "../../store";
import swal from "sweetalert"

const mapDispatchToProps = (dispatch) => {
    return {
        getFabricationCostApprovalData() {
            dispatch(getFabricationCostApprovalData());
        },
        openViewMoreModal(id) {
            const fabCostApprove = store.getState().fabCostApprove
            let fabCostApproveData = JSON.parse(JSON.stringify(fabCostApprove.fabCostApproveData))
            let currentStructure = fabCostApproveData.filter(item => { return item.id === id })
            dispatch({
                type: FABAPPROVE_SET_CURRENT_STRUCTURE,
                payload: currentStructure.length !== 0 ? currentStructure[0] : {}
            })
            dispatch({
                type: SET_FABCOST_APPROVAL_VIEW_MORE,
                payload: true
            })
        },
        closeViewMoreModal() {
            dispatch({
                type: FABAPPROVE_SET_CURRENT_STRUCTURE,
                payload: {}
            })
            dispatch({
                type: SET_FABCOST_APPROVAL_VIEW_MORE,
                payload: false
            })
        },
        showApproveModal(id) {
            const fabCostApprove = store.getState().fabCostApprove
            let fabCostApproveData = JSON.parse(JSON.stringify(fabCostApprove.fabCostApproveData))
            let currentStructure = fabCostApproveData.filter(item => { return item.id === id })
            dispatch({
                type: FABAPPROVE_SET_CURRENT_STRUCTURE,
                payload: currentStructure.length !== 0 ? currentStructure[0] : {}
            })
            dispatch({
                type: SET_SHOW_APPROVE_MODAL
            })
            dispatch({
                type: SET_APPROVE_FLAG,
                payload: "Approval"
            })
        },
        showRejectModal(id) {
            const fabCostApprove = store.getState().fabCostApprove
            let fabCostApproveData = JSON.parse(JSON.stringify(fabCostApprove.fabCostApproveData))
            let currentStructure = fabCostApproveData.filter(item => { return item.id === id })
            dispatch({
                type: FABAPPROVE_SET_CURRENT_STRUCTURE,
                payload: currentStructure.length !== 0 ? currentStructure[0] : {}
            })
            dispatch({
                type: SET_SHOW_REJECT_MODAL
            })
            dispatch({
                type: SET_APPROVE_FLAG,
                payload: "Rejection"
            })
        },
        approveStructure() {
            dispatch(approveFabrication())
                .then(() => {
                    dispatch(getFabricationCostApprovalData());
                    swal("Structure Approved", {
                        icon: "success",
                    });
                    dispatch({
                        type: FABAPPROVE_SET_CURRENT_STRUCTURE,
                        payload: {}
                    })
                    dispatch({
                        type: RESET_MODAL_FLAGS
                    })
                    dispatch({
                        type: SET_APPROVE_FLAG,
                        payload: ""
                    })
                })
                .catch((err) => {
                    swal("Approve failed", {
                        icon: "error",
                    });
                    dispatch({
                        type: FABAPPROVE_SET_CURRENT_STRUCTURE,
                        payload: {}
                    })
                    dispatch({
                        type: RESET_MODAL_FLAGS
                    })
                    dispatch({
                        type: SET_APPROVE_FLAG,
                        payload: ""
                    })
                });
        },
        closeApproveRejectModal() {
            dispatch({
                type: FABAPPROVE_SET_CURRENT_STRUCTURE,
                payload: {}
            })
            dispatch({
                type: RESET_MODAL_FLAGS
            })
            dispatch({
                type: SET_APPROVE_FLAG,
                payload: ""
            })
        }
    }
}
const mapStateToProps = (state) => {
    const fabCostApprove = state.fabCostApprove;
    return {
        fabCostApprove,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FabricationCostApproval);