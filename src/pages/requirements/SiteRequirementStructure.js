import React, { Component } from "react";
import Col6 from "../../common/forms/Col6";
import FormRow from "../../common/forms/FormRow";
import IconButton from "../../common/forms/IconButton";
import SearchableDropDown from "../../common/forms/SearchableDropdown";
import SimpleRow from "../../common/forms/SimpleRow";
import { transformDropDownData } from "../../utils/dataTransformer";

class SiteRequirementStructure extends Component {
	componentDidMount() {
		this.props.requirement.siteRequirementList[
			this.props.index
		].id = this.props.index;
	}
	render() {
		return (
			<>
				<FormRow>
					<Col6 size="col-md-12">
						<SimpleRow>
							<SearchableDropDown
								size="col-sm-5"
								fieldSize="col-sm-12"
								placeholder="Structure"
								name="structureName"
								selectOptions={transformDropDownData(
									this.props.structureList,
									"id",
									"name"
								)}
								onChange={(obj) =>
									this.props.handleStructureNameChange(obj, this.props.index)
								}
								value={this.props.structureName}
							/>
							{/* <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder="No.of Comp"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.ondrawingNumberChange(e, this.props.index)
            }
            value={this.props.componentsCount}
            disabled
          />
        </div> */}
							{/* <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder="Str Family"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.onStructureIDChange(e, this.props.index)
            }
            value={this.props.structureFamily}
            disabled
          />
        </div>
        <div className="col-sm-2">
          <input
            type="text"
            className="form-control"
            placeholder="Dr Number"
            name={this.props.index}
            id={this.props.index}
            onChange={(e) =>
              this.props.ondrawingNumberChange(e, this.props.index)
            }
            value={this.props.drawingNumber}
            disabled
          />
        </div> */}
							<div className="col-sm-4">
								<input
									type="text"
									className="form-control"
									placeholder="Qty"
									name={this.props.index}
									id={this.props.index}
									onChange={(e) =>
										this.props.onQuantityChange(e, this.props.index)
									}
									value={this.props.quantity}
								/>
							</div>
							<div className="col-sm-1">
								<IconButton
									iconname="faEdit"
									index={this.props.index}
									rounded
									onClick={() =>
										this.props.requirement.siteRequirementList[this.props.index]
											.structId
											? this.props.showModalOpen(
													this.props.requirement.siteRequirementList[
														this.props.index
													].structId
											  )
											: alert("Select a structure first")
									}
								/>
							</div>
							<div className="col-sm-1">
								<IconButton
									iconname="faTimesCircle"
									index={this.props.index}
									rounded
									onClick={() =>
										this.props.onSiteRequirementRemove(this.props.index)
									}
								/>
							</div>
						</SimpleRow>
					</Col6>
				</FormRow>
			</>
		);
	}
}

export default SiteRequirementStructure;
