import { connect } from "react-redux";
import Header from "../../common/header";
import { collapseMenuRes } from "../../actions/templateConfigActions";

const mapStateToProps = (state) => ({
  headerFixed: state.config.headerFixed,
  bgHeader: state.config.headerBg,
  resMenu: state.config.resMenu,
  layout: state.config.layout,
});

const mapDispatchToProps = {
  collapseMenuRes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
