import { connect } from "react-redux";
import {
  getSiteReqDetails,
  twccDispatchDataFetch,
} from "../../actions/createDispatchActions";
import { RESET_MESSAGE,TWCC_DISPATCH_MORE_PAGE,CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS } from "../../actions/types";
import CreateDispatch from "../../pages/createDispatch/CreateDispatch";

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSiteReqDetails() {
      dispatch(getSiteReqDetails());
    },
    redirectToDispatchStructure(id) {
      props.history.push(
        `/etrack/dispatch/createDispatch/dispatchStructure/${window.btoa(id)}`
      );
    },

    
    handleMore(id){
      dispatch(twccDispatchDataFetch(id));
        dispatch({
          type: TWCC_DISPATCH_MORE_PAGE,
          payload: true,
        });
        dispatch({
          type: CHANGE_TWCC_DISPATCH_MORE_MODAL_STATUS,
          payload: true,
        })
    },
    
  
    resetMessage() {
      dispatch({
        type: RESET_MESSAGE,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const createDispatch = state.createDispatch;
  return {
    createDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDispatch);
