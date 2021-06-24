import { connect } from 'react-redux';
import store from '../../store';
import { assignStructureList, assignStructureFetch } from '../../actions/assignStructureAction';

import {
  CHANGE_ADD_STRUCTURE_MODAL_STATUS,
  SHOW_ADD_STRUCTURE_MSG,
  STRUCTURE_EDIT_PAGE,
  ASSIGN_STRUCTURE_MORE_PAGE,
  CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
  STRUCTURE_ATTRIBUTE_LIST,
} from '../../actions/types';
import AssignStructureViewMore from '../../pages/assignStructure/AssignStructureViewMore';

const mapDispatchToProps = dispatch => {
  return {
    closeAssignStructureViewMoreModal() {
      dispatch({
        type: CHANGE_ASSIGN_STRUCTURE_MORE_MODAL_STATUS,
        payload: false,
      })
    },
    onNameChange(value, i) {
      const assignStructure = store.getState().assignStructure;
      const attributeList = [...assignStructure.attributeList];
      attributeList[i].name = value;
      dispatch({
        type: STRUCTURE_ATTRIBUTE_LIST,
        payload: attributeList,
      });
    },
    onTypeOfInputChange(value, i) {
      const assignStructure = store.getState().assignStructure;
      const attributeList = [...assignStructure.attributeList];
      attributeList[i].typeOfInput = { id: value, label: value };
      dispatch({
        type: STRUCTURE_ATTRIBUTE_LIST,
        payload: attributeList,
      });
    },
    onUoMChange(value, i) {
      const assignStructure = store.getState().assignStructure;
      const attributeList = [...assignStructure.attributeList];
      attributeList[i].uom = value;
      dispatch({
        type: STRUCTURE_ATTRIBUTE_LIST,
        payload: attributeList,
      });
    },
    onAttributeRemove(i) {
			const assignStructure = store.getState().assignStructure;
			const attributeList = [...assignStructure.attributeList];
			attributeList.splice(i, 1);
			dispatch({
				type: STRUCTURE_ATTRIBUTE_LIST,
				payload: attributeList,
			});
		},
  };
};

const mapStateToProps = state => {
  const assignStructure = store.getState().assignStructure;
  return {
    assignStructure,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignStructureViewMore);
