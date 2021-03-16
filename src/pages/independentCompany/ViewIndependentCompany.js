import React, { Component } from "react";

import ConfirmModal from "../../common/forms/ConfirmModal";
// import CustomAlert from "../../common/forms/customAlert";
import { icbuMetaData, icbuList } from "./utils";
import Button from "../../common/forms/Button";
// import AddIndependentCompany from "./AddIndependentCompany";
import CustomDataTable from "../../common/DataTable";
// import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";
import AddIndependentCompany from "../../containers/independentCompany/independentCompany";
import SimpleCard from "../../common/cards/SimpleCard";
import PageContainer from "../../common/forms/PageContainer";

class ViewIndependentCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.icbuList();
  }

  filteredItems = (data) => {
    return (
      data &&
      data.filter(
        (item) =>
          item.name &&
          item.name.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    return (
      <PageContainer>
        <SimpleCard>
          <AddIndependentCompany {...this.props} />
          {this.props.icbu.icbuList && (
            <CustomDataTable
              metaData={icbuMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id)
              )}
              bodyData={icbuList(this.props.icbu.icbuList)}
              showButton={true}
              btnText="Add Independent Company"
              onClick={this.props.showAddIcbuModal}
            />
          )}
          {/* {this.props.icbu.isLoading && <Loader />} */}
          {/* {this.props.icbu.isIcbuMsg && (
          <CustomAlert variant="success" message={this.props.icbu.message} />
        )} */}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewIndependentCompany;
