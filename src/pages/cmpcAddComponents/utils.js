import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const cmpcViewPageMetaData = (redirectToAddComponents) => {
	return [
		{
			text: "DC No",
			dataField: "dispatchNo",
		},
		{
			text: "Structure",
			dataField: "structrueName",
		},
		{
			text: "Structure ID",
			dataField: "structureCode",
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
		},
		{
			text: "Quantity",
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
		},
		{
			text: "Vendor Name",
			dataField: "vendorName",
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
		},
		{
			text: "Vendor Name",
			dataField: "vendorName",
		},
		{
			text: "Monthly Rent",
			dataField: "monthlyRent",
		},
		{
			text: "Contract Years",
			dataField: "contractYears",
		},
		{
			text: "Planned Release Date",
			dataField: "plannedReleaseDate",
		},
		{
			text: "Actual Start Date",
			dataField: "actualStartDate",
		},
		{
			text: "Expected Release Date",
			dataField: "expectedReleaseDate",
		},
	];
};

export const componentsMetaData = (onChangeValue) => {
	return [
		{
			text: "Component",
			dataField: "component",
		},
		{
			text: "Component Type",
			dataField: "compType",
		},
		{
			text: "Component ID",
			dataField: "compId",
		},
		{
			text: "Component No",
			dataField: "compNum",
		},
		{
			text: "Group",
			dataField: "group",
		},

		{
			text: "Drawing No",
			dataField: "drawingNum",
		},
		{
			text: "Length",
			dataField: "length",
		},
		{
			text: "Breadth",
			dataField: "breadth",
		},
		{
			text: "Height",
			dataField: "height",
		},
		{
			text: "Thickness",
			dataField: "thickness",
		},
		{
			text: "Weight",
			dataField: "weight",
		},
		{
			text: "Type",
			dataField: "type",
		},
		{
			text: "Tag",
			dataField: "tag",
		},
		{
			text: "QR Code",
			dataField: "qrCode",
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
