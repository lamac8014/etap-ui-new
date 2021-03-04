import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import windowSize from "react-window-size";
import {
  navContentLeave,
  navUpdateText,
} from "../../../../actions/navigationActions";
import { onItemClick } from "../../../../actions/templateConfigActions";
import NavIcon from "../navicon";
import NavBadge from "../navbadge";

class NavItem extends Component {
  render() {
    let itemTitle = this.props.item.title;
    if (this.props.item.icon) {
      itemTitle = <span className="pcoded-mtext">{this.props.item.title}</span>;
    }

    let itemTarget = "";
    if (this.props.item.target) {
      itemTarget = "_blank";
    }

    let subContent;
    if (this.props.item.external) {
      subContent = (
        <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
          <NavIcon items={this.props.item} />
          {itemTitle}
          <NavBadge layout={this.props.layout} items={this.props.item} />
        </a>
      );
    } else {
      subContent = (
        <NavLink
          onClick={() => this.props.navUpdateText(itemTitle)}
          to={this.props.item.url}
          className={this.props.LiClassA ? this.props.LiClassA : null}
          exact={true}
          target={itemTarget}
        >
          <NavIcon items={this.props.item} />
          {itemTitle}
          <NavBadge layout={this.props.layout} items={this.props.item} />
        </NavLink>
      );
    }
    let mainContent;
    if (this.props.layout === "horizontal") {
      mainContent = (
        <li onClick={() => this.props.navContentLeave()}>{subContent}</li>
      );
    } else {
      if (this.props.windowWidth < 992) {
        mainContent = (
          <li
            className={this.props.LiClass ? this.props.LiClass : null}
            onClick={() => this.props.onItemClick()}
          >
            {subContent}
          </li>
        );
      } else {
        mainContent = (
          <li className={this.props.LiClass ? this.props.LiClass : null}>
            {subContent}
          </li>
        );
      }
    }

    return mainContent;
  }
}

const mapDispatchToProps = {
  navContentLeave,
  onItemClick,
  navUpdateText,
};

export default withRouter(
  connect(null, mapDispatchToProps)(windowSize(NavItem))
);