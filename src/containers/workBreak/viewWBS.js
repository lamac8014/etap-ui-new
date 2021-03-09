import { connect } from 'react-redux';
import store from '../../store';
import {wbsList} from '../../actions/wbsActions';
import ViewWBS from '../../pages/workBreak/ViewWBS';

const mapDispatchToProps = dispatch => {
  return {
    wbsList() {
      dispatch(wbsList());
    },
  };
};

const mapStateToProps = state => {
  const wbs = store.getState().wbs;
  return {
    wbs,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewWBS);
