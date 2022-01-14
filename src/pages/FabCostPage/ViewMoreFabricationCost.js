import React, { Component } from "react";
import SimpleRow from "../../common/forms/SimpleRow";
import TextInput from "../../common/forms/TextInput";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
class ViewMoreFabricationCost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                title={`Fabrication Cost - Details`}
                showModal={this.props.fabCost.showViewMoreModal}
                handleClose={this.props.closeFabCostViewMoreModal}
                size="lg"
                isShowFooter={false}
            >
                {console.log("isLoading", this.props.isLoading)}
                {this.props.isLoading && <Loader />}
                <SimpleRow>
          <TextInput
            disabled
            size="col-md-4"
            label="Quantity"
            name="quantity"
            id="quantity"
            // onChange={e =>
            //   this.props.handleChangeStructureName(e.target.value)
            // }
            value={this.props.fabCost.currentStructure.quantity}
          />
        </SimpleRow>
        <h4>Structure Attributes :</h4>
        <table className="table my-3">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Attributes</th>
              <th scope="col">UOM</th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.fabCost.currentStructure.structureAttValue &&
              JSON.parse(
                this.props.fabCost.currentStructure.structureAttValue
              ).map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.uom}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
          </tbody>
        </table>                
            </Modal>
        );
    }
}

export default ViewMoreFabricationCost;
