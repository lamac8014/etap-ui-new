import React from "react";
import FaIcon from "../../../FaIcon";
import FeatherIcon from "../../../FeatherIcon";

const navIcon = (props) => {
  let navIcons = false;
  if (props.items.icon) {
    if (props.items.icon.includes("feather ")) {
      navIcons = (
        <span className="pcoded-micon">
          <i className={props.items.icon} />
        </span>
      );
    } else if (props.items.icon[0] === "f") {
      navIcons = (
        <FaIcon
          iconname={props.items.icon}
          size="sm"
          className="pcoded-micon"
        />
      );
    } else {
      navIcons = (
        <FeatherIcon
          iconname={props.items.icon}
          size={18}
          className="pcoded-micon"
          style={{ marginBottom: "5px" }}
        />
      );
    }
  }
  return navIcons;
};

export default navIcon;
