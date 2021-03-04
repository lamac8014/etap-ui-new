import { connect } from "react-redux";
import Navbar from "../../common/navbar";
import { collapseMenu } from "../../actions/templateConfigActions";
import { navContentLeave } from "../../actions/navigationActions";

const mapStateToProps = (state) => ({
  layout: state.config.layout,
  layoutType: state.config.layoutType,
  meunCol: state.config.collapseMenu,
  iconColor: state.config.iconColor,
  menuFixed: state.config.menuFixed,
  dropdownIconMenu: state.config.menuDropdownIcon,
  menuListIcon: state.config.menuListIcon,
  activeColor: state.config.menuActiveColor,
  titleColor: state.config.menuTitleColor,
  captionHide: state.config.hideCaption,
  headerBreadcrumbHide: state.config.headerBreadcrumbHide,
  bgBrand: state.config.brandBg,
  menuBg: state.config.menuBg,
  menuBgGradient: state.config.menuBgGradient,
  menuBgPattern: state.config.menuBgPattern,
  menuBgImage: state.config.menuBgImage,
  resMenu: state.config.resMenu,
  prebuildLayout: state.config.prebuildLayout,
});

const mapDispatchToProps = {
  collapseMenu,
  navContentLeave,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
