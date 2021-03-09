import { connect } from 'react-redux';
import store from '../../store';
import {assignStructureList,assignStructureFetch} from '../../actions/assignStructureAction';

import {
  CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS
} from '../../actions/types';
import ViewRequirementViewMore from '../../pages/requirements/ViewRequirementViewMore';

const mapDispatchToProps = dispatch => {
  return {
    closeRequirementViewMoreModal(){
      dispatch({
              type: CHANGE_VIEW_REQUIREMENTS_MORE_MODAL_STATUS,
              payload: false,
            })
          }
  };
};

const mapStateToProps = state => {
  const requirement = store.getState().requirement;
  return {
    requirement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRequirementViewMore);
