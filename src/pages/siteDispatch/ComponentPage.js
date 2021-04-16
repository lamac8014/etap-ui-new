import React, { Component } from "react";
import { componentMetaData } from "./utils";
import CustomDataTable from "../../common/DataTable";
import PageContainer from "../../common/forms/PageContainer";
import SimpleCard from "../../common/cards/SimpleCard";
import SimpleRow from "../../common/forms/SimpleRow";
import Col6 from "../../common/forms/Col6";
import DateInput from "../../common/forms/DateInput";
import FileInput from "../../common/forms/FileInput";
import Button from "../../common/forms/Button";
import ButtonRow from "../../common/forms/ButtonRow";
import FaIcon from "../../common/FaIcon";
import InputGroupButton from "../../common/forms/InputGroupButton";

// import ModifyComponentsModal from "./ModifyComponentsModal";

class ComponentPage extends Component {
	constructor() {
		super();
		this.fileRef = React.createRef();
	}
	componentDidMount() {
		let dispStructId = window.atob(this.props.match.params.dispStrId);
		let dispSubContId = window.atob(this.props.match.params.subContId);
		let count = window.atob(this.props.match.params.count);
		let structName = window.atob(this.props.match.params.name);
		let structCode = window.atob(this.props.match.params.code);
		this.props.getComponentData(
			dispStructId,
			dispSubContId,
			count,
			structName,
			structCode
		);
	}

	render() {
		return (
			<PageContainer>
				<SimpleCard
					title={`${this.props.siteDispatch.structName} : ${this.props.siteDispatch.structCode}`}
				>
					{/* {this.props.assignStructure.isAddComponentMsg && (
            <CustomAlert
              variant="success"
              message={this.props.assignStructure.message}
            />
          )} */}
					<SimpleRow>
						<Col6 size="col-md-6 offset-md-6 text-right py-2">
							<h6 className="d-inline">No. of components : </h6>
							<h5 className="d-inline">{`${this.props.siteDispatch.compCount}/${this.props.siteDispatch.totalCompCount}`}</h5>
						</Col6>
					</SimpleRow>
					<CustomDataTable
						metaData={componentMetaData((row) =>
							this.props.setSelectedComponents(row)
						)}
						bodyData={this.props.siteDispatch.componentData}
					/>
					<SimpleRow>
						<DateInput
							size="col-md-6"
							labelSize="col-md-3 offset-md-1"
							fieldSize="col-md-6"
							label="Dispatch Date"
							name="dispatchDate"
							id="dispatchDate"
							onChange={(e) =>
								this.props.handleChangeDispatchDate(e.target.value)
							}
							// value={this.props.requirement.activeItem.planStartdate}
						/>
						<div style={{ display: "none" }}>
							<FileInput
								innerRef={this.fileRef}
								onChange={(e) => {
									this.props.handleChangeWoFileUpload(e.target.files[0]);
								}}
								accept="application/pdf"
							/>
						</div>
						<InputGroupButton
							label="Work Order File"
							size="col-md-6"
							labelSize="col-md-3 offset-md-1"
							fieldSize="col-md-6"
							value={
								this.props.siteDispatch.woFile
									? this.props.siteDispatch.woFile.name
									: ""
							}
							btnText={<FaIcon iconname="faFileUpload" />}
							onClick={() => this.fileRef.current.click()}
							disabled
						/>
					</SimpleRow>
					<hr />
					<ButtonRow>
						<Button
							type="primary"
							onClick={this.props.updateComponents}
							gradient
							btnText="Dispatch"
							disabled={
								this.props.siteDispatch.selectedComponents.length > 0 &&
								this.props.siteDispatch.dispatchDate &&
								this.props.siteDispatch.woFile
									? false
									: true
							}
						/>
						<Button
							type="danger"
							onClick={() => {}}
							gradient
							btnText="Cancel"
						/>
					</ButtonRow>
				</SimpleCard>
			</PageContainer>
		);
	}
}

export default ComponentPage;
