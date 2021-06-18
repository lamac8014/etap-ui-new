import React, { Component } from "react";
import { Card } from "reactstrap";
import DataTable from "../../common/DataTable";
import ButtonRow from "../../common/forms/ButtonRow";
import Button from "../../common/forms/Button";

class AttributeTable extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      currentStructureData: [],
    };
  }
  componentDidMount() {
    this.setState({
      userDetails: JSON.parse(localStorage.getItem("userDetails")),
    });
  }
  componentWillUnmount() {
    this.setState({ userDetails: {}, currentStructureData: [] });
  }
  render() {
    return (
      <Card>
        <div className="card-body">
          <>
            {this.state.userDetails.roleName === "CMPC" &&
              this.props.status === "BUAPPROVED" && (
                <ButtonRow>
                  {this.props.requirement.editAttributes ? (
                    <>
                      <Button
                        btnText="Save"
                        type="success"
                        gradient
                        onClick={() => {
                          this.props.handleSaveAttributes();
                        }}
                        className="mb-0"
                      />
                      <Button
                        className="mb-0"
                        btnText="Cancel"
                        type="secondary"
                        gradient
                        onClick={() => this.props.handleCancelAttributeSave()}
                      />
                    </>
                  ) : (
                    <Button
                      className="mb-0"
                      btnText="Edit"
                      type="primary"
                      gradient
                      onClick={() => {
                        this.props.enableEditAttributes(
                          this.props.strId,
                          this.props.attributesData
                        );
                      }}
                    />
                  )}
                </ButtonRow>
              )}
            <table className="table table-bordered my-3">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">UOM</th>
                  <th scope="col">value</th>
                </tr>
              </thead>
              <tbody>
                {typeof this.props.attributesData !== "string" &&
                  this.props.attributesData.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.uom}</td>
                      <td>
                        {this.props.requirement.editAttributes ? (
                          <input
                            type={
                              item.typeOfInput.id === "numeric"
                                ? "number"
                                : "text"
                            }
                            value={item.value}
                            onChange={(e) => {
                              this.props.handleChangeAttributeValue(
                                e,
                                this.props.strId,
                                item.name,
                                item.uom
                              );
                            }}
                          />
                        ) : (
                          item.value
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        </div>
      </Card>
    );
  }
}
export default AttributeTable;
