import React, { Component, Fragment } from "react";
import Navbar from "../../containers/templateConfig/navbar";
import Header from "../../containers/templateConfig/header";
import ContentWrapper from "./contentWrapper";
import Footer from "../footer/footer";

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header {...this.props} />
        <ContentWrapper {...this.props} />
        {/* <Footer /> */}
      </Fragment>
      // <div style={{ maxHeight: "100% !important" }}>
      //   <Navbar />
      //   <Header />
      //   <ContentWrapper {...this.props} />
      // </div>
    );
  }
}

export default MainLayout;
