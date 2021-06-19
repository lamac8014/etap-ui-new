import { connect } from "react-redux";
import store from "../../store";

import {
  SET_FABRICATION_COST,
  SET_FABCOST_MODAL_FLAG,
  FABCOST_VIEWMORE_FLAG,
  SET_UPLOAD_DATA,
  HANDLE_WO_UPLOAD,
  RESET_FABCOST_MODAL,
  GET_AS_BUILD_STRUCTURE_COST,
  ADD_STRUCTURE_COST,
  GET_COMPONENT_DETAILS_COST,
} from "../../actions/types";
import {buildStructureCost,addStructCost,getCompDetails} from "../../actions/fabricationCostActions";

import FabricationCost from "../../pages/fabricationCost/FabricationCost";

const mapDispatchToProps = (dispatch) => {
  return {
    buildStructureCost(){
      dispatch(buildStructureCost());
    },
    getCompDetails(){
      dispatch(getCompDetails());
    },
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
    addStructCost() {
			dispatch(addStructCost()).then(() => {
				dispatch({ 
          type: ADD_STRUCTURE_COST,
          payload:false,
        });
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
