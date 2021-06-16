import { connect } from "react-redux";
import store from "../../store";
import {
  assignStructureList,
  assignStructureFetch,
} from "../../actions/assignStructureAction";

import {
  CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS,
  SET_CURRENT_STRUCTURE_ATTRIBUTES,
  SET_CURRENT_STRUCTURE_ATTRIBUTE_VALUE,
  SET_EDIT_ATTRIBUTES,
} from "../../actions/types";
import ViewRequirementViewMore from "../../pages/requirements/ViewRequirementViewMore";
import {
  saveAttributeValues,
  singleRequirementFetch,
} from "../../actions/requirementAction";
import swal from "sweetalert";

const mapDispatchToProps = (dispatch) => {
  return {
    closeRequirementViewMoreModal() {
      dispatch({
        type: CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS,
        payload: false,
      });
    },
    handleChangeAttributeValue(e, strId, name, uom) {
      let requirement = store.getState().requirement;
      let requirementViewMore = JSON.parse(
        JSON.stringify(requirement.requirementViewMore)
      );
      requirementViewMore.siteRequirementStructures.map((item) => {
        if (item.id === strId) {
          item.structureAttributesVal.map((attribute) => {
            if (attribute.name === name && attribute.uom === uom) {
              attribute.value = e.target.value;
            }
          });
        }
      });
      dispatch({
        type: SET_CURRENT_STRUCTURE_ATTRIBUTE_VALUE,
        payload: requirementViewMore,
      });
    },
    enableEditAttributes(structId, attributes) {
      let tempObj = {
        structId,
        attributes: attributes,
      };
      dispatch({
        type: SET_CURRENT_STRUCTURE_ATTRIBUTES,
        payload: tempObj,
      });
      dispatch({
        type: SET_EDIT_ATTRIBUTES,
        payload: true,
      });
    },
    handleSaveAttributes() {
      dispatch(saveAttributeValues())
        .then((response) => {
          const requirement = store.getState().requirement;
          let { id } = requirement.requirementViewMore;
          dispatch(singleRequirementFetch(id)).then((response) => {
            const requirement = store.getState().requirement;
            const requirementsViewMore = JSON.parse(
              JSON.stringify(requirement.requirementViewMore)
            );
            requirementsViewMore.siteRequirementStructures.map((item) => {
              item.structureAttributesVal = JSON.parse(
                item.structureAttributesVal
              );
            });
            dispatch({
              type: SET_CURRENT_STRUCTURE_ATTRIBUTE_VALUE,
              payload: requirementsViewMore,
            });
            dispatch({
              type: SET_CURRENT_STRUCTURE_ATTRIBUTES,
              payload: {},
            });
            dispatch({
              type: SET_EDIT_ATTRIBUTES,
              payload: false,
            });
          });
        })
        .catch((err) => {
          swal("Attribute value update failed", {
            icon: "error",
          });
        });
    },
    handleCancelAttributeSave() {
      let requirement = store.getState().requirement;
      let requirementViewMore = JSON.parse(
        JSON.stringify(requirement.requirementViewMore)
      );
      let currentStructureAttributes = JSON.parse(
        JSON.stringify(requirement.currentStructureAttributes)
      );
      requirementViewMore.siteRequirementStructures.map((structure) => {
        if (structure.id === currentStructureAttributes.structId) {
          structure.structureAttributesVal = [
            ...currentStructureAttributes.attributes,
          ];
        }
      });
      dispatch({
        type: SET_CURRENT_STRUCTURE_ATTRIBUTE_VALUE,
        payload: requirementViewMore,
      });
      dispatch({
        type: SET_CURRENT_STRUCTURE_ATTRIBUTES,
        payload: {},
      });
      dispatch({
        type: SET_EDIT_ATTRIBUTES,
        payload: false,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const requirement = store.getState().requirement;
  return {
    requirement,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRequirementViewMore);
