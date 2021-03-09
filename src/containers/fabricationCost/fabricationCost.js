import { connect } from "react-redux";
import store from "../../store";

import {
  SET_FABRICATION_COST,
  SET_FABCOST_MODAL_FLAG,
  FABCOST_VIEWMORE_FLAG,
  SET_UPLOAD_DATA,
  HANDLE_WO_UPLOAD,
  RESET_FABCOST_MODAL,
} from "../../actions/types";

import FabricationCost from "../../pages/fabricationCost/FabricationCost";

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeFabricationCost(value) {
      dispatch({
        type: SET_FABRICATION_COST,
        payload: value,
      });
    },
    setFabCostModalFlag(value) {
      dispatch({
        type: SET_FABCOST_MODAL_FLAG,
        payload: value,
      });
      if (!value) {
        this.resetModal();
      }
    },
    setViewMoreModalFlag(value) {
      dispatch({
        type: FABCOST_VIEWMORE_FLAG,
        payload: value,
      });
    },
    handleFileUpload(data) {
      console.log(data);
    },
    handleWoUpload(data) {
      dispatch({
        type: HANDLE_WO_UPLOAD,
        payload: data,
      });
    },
    resetModal() {
      dispatch({
        type: RESET_FABCOST_MODAL,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const fabCost = state.fabCost;
  return {
    fabCost,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FabricationCost);
