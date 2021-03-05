import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import Button from "./forms/Button";

const { SearchBar } = Search;

const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange,
}) => {
  return (
    <UncontrolledDropdown className="d-inline-block m-l-5">
      <DropdownToggle caret color="light" className="border">
        {currSizePerPage}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((option) => (
          <DropdownItem
            key={option.text}
            onClick={() => onSizePerPageChange(option.page)}
          >
            {option.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);

class DataTable extends Component {
  render() {
    const options = {
      custom: true,
      totalSize: this.props.bodyData.length,
      sizePerPageRenderer,
      showTotal: true,
      paginationTotalRenderer: customTotal,
      prePageText: "Previous",
      nextPageText: "Next",
      withFirstAndLast: false,
      sizePerPageList: [
        { text: "5", value: 5 },
        { text: "10", value: 10 },
        { text: "15", value: 15 },
        { text: "20", value: 20 },
      ],
    };
    const contents = ({ paginationProps, paginationTableProps }) => (
      <Fragment>
        <ToolkitProvider
          keyField="id"
          columns={this.props.metaData}
          data={this.props.bodyData}
          search
        >
          {(toolkitprops) => (
            <Fragment>
              <Row>
                <Col sm={6}>
                  <label>
                    Show
                    <SizePerPageDropdownStandalone {...paginationProps} />{" "}
                    entries
                  </label>
                </Col>
                <Col sm={6} className="text-right">
                  <span>
                    <span className="p-r-5"> Search:</span>
                    <SearchBar {...toolkitprops.searchProps} />
                    {this.props.showButton && (
                      <Button
                        btnText={this.props.btnText}
                        className="ml-2 mr-0"
                        gradient
                        type="success"
                        onClick={this.props.onClick}
                      />
                    )}
                  </span>
                </Col>
              </Row>
              <BootstrapTable
                keyField="id"
                HeaderCell=""
                data={this.props.bodyData}
                columns={this.props.metaData}
                wrapperClasses="table-responsive"
                striped
                hover
                condensed
                {...toolkitprops.baseProps}
                {...paginationTableProps}
              />
            </Fragment>
          )}
        </ToolkitProvider>
        <PaginationTotalStandalone {...paginationProps} />
        <PaginationListStandalone {...paginationProps} />
      </Fragment>
    );

    return (
      <Card>
        {this.props.title && (
          <CardHeader>
            <h5>{this.props.title}</h5>
          </CardHeader>
        )}
        <CardBody>
          <PaginationProvider pagination={paginationFactory(options)}>
            {contents}
          </PaginationProvider>
        </CardBody>
      </Card>
    );
  }
}

export default DataTable;
