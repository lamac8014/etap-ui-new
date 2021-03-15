import React, { Component } from "react";

import ConfirmModal from "../../common/forms/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listViewRequirementsMetaData, transformViewRequirementList } from "./utils";
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
        <RequirementsViewMore showAddComponentModal={this.props.requirement.showrequirementMoreModal} />
        {/* <ConfirmModal
          showModal={this.state.showApproveModal}
          handleClose={() => {
            this.setState({ showApproveModal: false, activeId: null })
          }

          }
          title="Approve Requirement"
          handleConfirm={() => {
            this.props.handleApprove(this.state.activeId);
            this.setState({ showApproveModal: false, activeId: null });
          }}
        >
          <h6 className="text-danger">
            Are you sure you want to Approve this request?
            </h6>
        </ConfirmModal>

        <ConfirmModal
          showModal={this.state.showDeleteModal}
          handleClose={() => {
            this.setState({ showDeleteModal: false, activeId: null })
          }
          }
          title="Reject Requirement"
          handleConfirm={() => {
            this.props.handleReject(this.state.activeId);
            this.setState({ showDeleteModal: false, activeId: null });
          }}
        >
          <h6 className="text-danger">
            Are you sure you want to Reject this request?
            </h6>
        </ConfirmModal> */}
        <SimpleCard>
          {this.props.requirement.requirementsList && (
            <CustomDataTable
              metaData={listViewRequirementsMetaData(
                id => this.setState({ activeId: id, showApproveModal: true }),
                id => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleMore(id),

              )}
              bodyData={transformViewRequirementList(
                this.props.requirement.requirementsList
              )}


            />
          )}
        </SimpleCard>
      </PageContainer>
    );
  }
}

export default ViewRequirementAction;
