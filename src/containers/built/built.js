import { connect } from 'react-redux';
import store from '../../store';
import { builtList } from '../../actions/builtAction';
import {buildStructure} from "../../actions/builtAction";
import {
  CHANGE_BUILT_MORE_MODAL_STATUS,
  BUILT_MORE_PAGE,
  CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
  BUILT_EDIT_MORE_PAGE,
  GET_AS_BUILD_STRUCTURE,
  BUILT_VIEW_PAGE,
  BUILT_VIEW_MODAL,
  SET_CURRENT_BUILT_INFO,
} from '../../actions/types';
import ViewAsBuilt from '../../pages/built/ViewAsBuilt';

const mapDispatchToProps = (dispatch,props) => {
  return {
    builtList() {
      dispatch(builtList());
    },

    redirectToBuiltMoreDetails(id) {
      props.history.push(
        `/etrack/built/asBuiltDetails/${window.btoa(id)}`
      );
    },
    buildStructure() {
      dispatch(buildStructure());
    },

    handleMore(id) {
      dispatch({
        type: BUILT_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_BUILT_MORE_MODAL_STATUS,
        payload: true,
      })
    },
    handleEdit(id) {
      dispatch({
        type: BUILT_EDIT_MORE_PAGE,
        payload: true,
      });
      dispatch({
        type: CHANGE_BUILT_EDIT_MORE_MODAL_STATUS,
        payload: true,
      })
    },
    handleViewMore(id){
      dispatch({
				type: BUILT_VIEW_PAGE,
				payload: true,
			});
			dispatch({
				type: BUILT_VIEW_MODAL,
				payload: true,
			});
    }
  };
};

const mapStateToProps = state => {
  const built = store.getState().built;
  return {
    built,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAsBuilt);
