import { connect } from 'react-redux';
import store from '../../store';

import {
 
  CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS,
} from '../../actions/types';
import TwccDispatchViewMore from '../../pages/createDispatch/TwccDispatchViewMore';

const mapDispatchToProps = dispatch => {
  return {
    closeTwccDispatchViewMoreModal(){
      dispatch({
              type: CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS,
              payload: false,
            })
          }
  };
};

const mapStateToProps = state => {
  const createDispatch = store.getState().createDispatch;
  return {
    createDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TwccDispatchViewMore);
