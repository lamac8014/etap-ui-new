import React, { Component } from "react";

import CustomAlert from "../../common/forms/customAlert";
import CustomDataTable from "../../common/DataTable";
import { listUsersMetaData, transformUsersList } from "./utils";
import Button from "../../common/forms/Button";
import AddUser from "../../containers/users/addUsers";
import Col6 from "../../common/forms/Col6";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";

class ViewUsers extends Component {
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
    this.props.usersList();
  }


  filteredItems = (data) => {
    // return (
    //   data &&
    //   data.filter(
    //     (item) =>
    //       item.userName &&
    //       item.userName.toLowerCase().includes(this.state.filterText.toLowerCase())
    //   )
    // );
    if (data) {
      return data.filter((item) => {
        for (let key in item) {
          if (item[key] && item[key].toString().toLowerCase().includes(this.state.filterText.toLowerCase())) {
            return true;
          }
        }
      })
    }
  };

  render() {
    return (

      <PageContainer>

        <SimpleCard>

          {this.props.users.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.component.message}
            />
          )}
          <AddUser showAddComponentModal={this.props.users.showAddUsersModal} />

          {this.props.users.usersList && (
            <CustomDataTable
              metaData={listUsersMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEdit(id),
              )}
              bodyData={transformUsersList(
                this.filteredItems(this.props.users.usersList)
              )}
              showButton={true}
              btnText="Add User"
              onClick={this.props.showAddUsersModal}

            />
          )}

        </SimpleCard>
      </PageContainer>

    );
  }
}

export default ViewUsers;
