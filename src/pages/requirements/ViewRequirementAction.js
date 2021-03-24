import React, { Component } from "react";

import ConfirmModal from "../../common/forms/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import {
  listViewRequirementsMetaData,
  transformViewRequirementList,
  tableRowStyles,
} from "./utils";
import CustomDataTable from "../../common/DataTable";
import RequirementsViewMore from "../../containers/requirement/requirementsViewMore";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class ViewRequirementAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      showApproveModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.getRequirementsList();
  }

  render() {
    return (
      <PageContainer>
        {this.props.requirement.isAddComponentMsg && (
          <CustomAlert
            variant="success"
            message={this.props.requirement.message}
          />
        )}
        {this.props.requirement.requirementViewMore
          .siteRequirementStructures && (
          <RequirementsViewMore
            showAddComponentModal={
              this.props.requirement.showrequirementMoreModal
            }
          />
        )}
        {/* {this.props.requirement.requirementsList && ( */}

        {this.state.showApproveModal && (
          <ConfirmModal
            closeAction={() =>
              this.setState({ showApproveModal: false, activeId: null })
            }
            title="Approve Requirement"
            deleteAction={() => {
              this.props.handleApprove(this.state.activeId);
              this.setState({ showApproveModal: false, activeId: null });
            }}
            frontText="Are you sure you want to Approve the Requirement?"
            confirmText="Requirement Approved"
            cancelText="Canceled!"
          />
        )}
        {/* )} */}
        {/* {this.props.requirement.requirementsList && ( */}

        {this.state.showDeleteModal && (
          <ConfirmModal
            closeAction={() =>
              this.setState({ showDeleteModal: false, activeId: null })
            }
            title="Reject Requirement"
            deleteAction={() => {
              this.props.handleReject(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
            frontText="Are you sure you want to Reject the Requirement?"
            confirmText="Requirement Rejected"
            cancelText="Rejected!"
          />
        )}

        {/* )} */}
        <SimpleCard>
          {this.props.requirement.requirementsList && (
            <CustomDataTable
              rowStyle={tableRowStyles}
              metaData={listViewRequirementsMetaData(
                (id) => this.props.handleMore(id),
                (id) => this.setState({ activeId: id, showApproveModal: true }),
                (id) => this.setState({ activeId: id, showDeleteModal: true })
              )}
              bodyData={transformViewRequirementList(
                this.props.requirement.requirementsList
              )}
              // bodyData={[{ mrNo: "mr001" }]}
            />
          )}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewRequirementAction;
