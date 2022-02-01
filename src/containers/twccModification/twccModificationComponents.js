import { connect } from "react-redux";
import {
  SHOW_EDIT_COMPONENT_MODAL,
  RESET_EDIT_COMPONENT_FORM,
  MODIFY_BREADTH,
  MODIFY_HEIGHT,
  MODIFY_LENGTH,
  MODIFY_WEIGHT,
  MODIFY_THICKNESS,
  SET_STRUCT_CODE,
  SET_STRUCT_NAME,
  SET_CURRENT_COMP,
  SET_PROJECT_NAME,
  SET_ADD_PLATE,
  CMPC_TRANSFORM_COMPONENT_DATA,
  SET_IDS,
  CMPC_SET_COMPONENT_DATA_FROM_EXCEL,
  REMOVE_EXCEL_DATA,
  TWCC_TRANSFORM_COMPONENT_DATA,
  TWCC_SET_STRUCT_NAME,
  TWCC_SET_STRUCT_CODE,
  TWCC_SET_PROJECT_NAME,
} from "../../actions/types";
import {
  getComponentData,
} from "../../actions/twccModificationAction";
import TwccModificationComponents from "../../pages/twccModification/TwccModificationComponents";
import store from "../../store";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getComponentData(
      dispStrId,
      name,
      code,
      proj,
    ) {
      dispatch(getComponentData(dispStrId)).then((response) => {
        const cmpc = store.getState().twcc;
        let componentData = JSON.parse(JSON.stringify(cmpc.componentData));
        componentData.map((item) => {
          if (item.modStageCompId !== null) {
            item.leng = item.modStageLength;
            item.breath = item.modStagebreath;
            item.height = item.modStageHeight;
            item.thickness = item.modStageThikness;
            item.weight = item.modStageWeight;
            item.alreadyModified= true
          }
        });
        dispatch({
          type: TWCC_TRANSFORM_COMPONENT_DATA,
          payload: componentData,
        });
      });
      dispatch({
        type: TWCC_SET_STRUCT_NAME,
        payload: name,
      });
      dispatch({
        type: TWCC_SET_STRUCT_CODE,
        payload: code,
      });
      dispatch({
        type: TWCC_SET_PROJECT_NAME,
        payload: proj,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const twcc = state.twcc;
  return { twcc };
};

export default connect(mapStateToProps, mapDispatchToProps)(TwccModificationComponents);
