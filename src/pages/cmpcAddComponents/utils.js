import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const cmpcViewPageMetaData = (redirectToAddComponents) => {
	return [
		{
			text: "DC No",
			dataField: "dispatchNo",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Structure",
			dataField: "structrueName",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Structure ID",
			dataField: "structureCode",
			style: {verticalAlign:"middle"},
			formatter: (cell, row) => {
				return (
					<>
						{
							<a
								href="#"
								onClick={() => {
									redirectToAddComponents(
										row.projectStructureId,
										row.dispReqStructId
									);
								}}
							>
								{row.structureCode}
							</a>
						}
					</>
				);
			},
		},
		{
			text: "Project",
			dataField: "projectName",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Quantity",
			style: {verticalAlign:"middle",paddingTop:"25px"},
			formatter: (cell, row) => {
				return (
					<p>
						{row.currentComponentsCount}/{row.requiredComponenentCount}
					</p>
				);
			},
		},
		{
			text: "Status",
			dataField: "status",
			style: {verticalAlign:"middle"},
		},
		// {
		//   name: "Created Date",
		//   selector: "createdDateTime",
		//   sortable: false,
		// },
		// {
		// 	text: "Actions",
		// 	center: true,
		// 	formatter: (cell, row) => {
		// 		return (
		// 			<>
		// 				<IconButton
		// 					id={row.dispatchId}
		// 					iconname="faList"
		// 					onClick={() => {}}
		// 				/>
		// 			</>
		// 		);
		// 	},
		// },
	];
};

export const assignVendorTableMetaData = (handleDelete) => {
	return [
		{
			formatter: (cell, row) => {
				return (
					<>
						<IconButton
							iconname="faTimes"
							className={"table-delete-icon"}
							onClick={() => handleDelete(row.structureId)}
							size="lg"
							iconColor="red"
							noBg
						/>
					</>
				);
			},
			style: { width: "1%" },
		},
		{
			text: "Structure Name",
			dataField: "structureName",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Vendor Name",
			dataField: "vendorName",
			style: {verticalAlign:"middle"},
		},
	];
};

export const outSourcingTableMetaData = (handleDelete) => {
	return [
		{
			formatter: (cell, row) => {
				return (
					<>
						<IconButton
							iconName="faTimes"
							className={"table-delete-icon"}
							onClick={() => handleDelete(row.structureId)}
						/>
					</>
				);
			},
		},
		{
			text: "Structure Name",
			dataField: "structureName",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Vendor Name",
			dataField: "vendorName",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Monthly Rent",
			dataField: "monthlyRent",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Contract Years",
			dataField: "contractYears",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Planned Release Date",
			dataField: "plannedReleaseDate",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Actual Start Date",
			dataField: "actualStartDate",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Expected Release Date",
			dataField: "expectedReleaseDate",
			style: {verticalAlign:"middle"},
		},
	];
};

export const componentsMetaData = (onChangeValue) => {
	return [
		{
			text: "Component",
			dataField: "component",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Component Type",
			dataField: "compType",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Component ID",
			dataField: "compId",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Component No",
			dataField: "compNum",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Group",
			dataField: "group",
			style: {verticalAlign:"middle"},
		},

		{
			text: "Drawing No",
			dataField: "drawingNum",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Length",
			dataField: "length",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Breadth",
			dataField: "breadth",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Height",
			dataField: "height",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Thickness",
			dataField: "thickness",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Weight",
			dataField: "weight",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Type",
			dataField: "type",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Tag",
			dataField: "tag",
			style: {verticalAlign:"middle"},
		},
		{
			text: "QR Code",
			dataField: "qrCode",
			style: {verticalAlign:"middle"},
		},
	];
};

export const getComponentTableData = (scr) => {
	let tmpArr = [];
	let data = scr.uploadData;
	data &&
		data.map((data) => {
			tmpArr.push({
				compType: data.compTypeName,
				component: data.componentName,
				group: data.isGroup,
				compId: data.compId,
				compNum: data.componentNo,
				drawingNum: data.drawingNo,
				length: data.leng,
				breadth: data.breath,
				height: data.height,
				thickness: data.thickness,
				weight: data.weight,
				type: data.makeType,
				tag: data.isTag,
				qrCode: data.qrCode,
			});
		});
	return tmpArr;
};
export const getExcelData = (scr) => {
	let data = scr.uploadData;
	let dataArr = [];
	dataArr.push(getAssignExcelHeaders());
	if (data && data.length > 0) {
		data.map((dt, i) => {
			let tmpArr = [];
			tmpArr.push(dt.componentName);
			tmpArr.push(dt.compTypeName);
			tmpArr.push(dt.compId);
			tmpArr.push(dt.componentNo);
			tmpArr.push(dt.isGroup);
			tmpArr.push(dt.drawingNo);
			tmpArr.push(dt.leng);
			tmpArr.push(dt.breath);
			tmpArr.push(dt.height);
			tmpArr.push(dt.thickness);
			tmpArr.push(dt.weight);
			tmpArr.push(dt.makeType);
			tmpArr.push(dt.isTag);
			tmpArr.push(dt.qrCode);
			dataArr.push(tmpArr);
		});
	} else {
		let tmpArr = [];
		// tmpArr.push(scr.ic);
		// tmpArr.push(scr.bu);
		// tmpArr.push(scr.projName.label);
		// tmpArr.push(scr.strcutureType);
		// tmpArr.push(scr.structName.label);
		// tmpArr.push(scr.structName.value);
		dataArr.push(tmpArr);
	}
	return dataArr;
};
export const getAssignExcelHeaders = () => {
	const headers = [
		"Component",
		"Component Type",
		"Component ID",
		"Component No",
		"Group",
		"Drawing Number",
		"Length",
		"Breadth",
		"Height",
		"Thickness",
		"Weight",
		"Type",
		"Tag",
		"QR Code",
	];
	return headers;
};
export const transformStructureListData = (structureListCode) => {
	let tempArr = [];
	structureListCode.map((item) => {
		tempArr.push({
			value: item.id,
			label: item.structureName,
		});
	});

	return tempArr;
};

export const transformVendorCodeListData = (vendorCodeList) => {
	let tempArr = [];
	vendorCodeList.map((item) => {
		tempArr.push({
			value: item.id,
			label: item.name,
		});
	});

	return tempArr;
};
