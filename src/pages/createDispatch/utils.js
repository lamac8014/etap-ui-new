import React from "react";
import IconButton from "../../common/forms/IconButton";
import CheckBox from "../../common/forms/Checkbox";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";

export const createDispatchMetaData = (handleEditIconPress) => {
	return [
		{
			text: "MR Number",
			dataField: "mrNo",
		},

		{
			text: "Project",
			dataField: "projectName",
		},
		{
			text: "Project ID",
			dataField: "projectId",
		},
		{
			text: "Status",
			dataField: "status",
		},
		{
			text: "Actions",

			formatter: (row) => {
				return (
					<>
						<IconButton
							id={row.id}
							iconname="faEdit"
							onClick={() => handleEditIconPress(row.id)}
						/>
					</>
				);
			},
		},
	];
};
export const twccDispatchMetaData = (
	redirectToDispatchStructure,
	handleMore
) => {
	return [
		{
			text: "MR Number",
			dataField: "mrNumber",
		},

		{
			text: "Structure Name",
			// dataField: "structureName",
			formatter: (cell, row) => {
				return (
					<a
						href="#"
						onClick={() => {
							redirectToDispatchStructure(
								row.structureId,
								row.siteRequirementId
							);
						}}
					>
						{row.structureName}
					</a>
					// <Link
					//   to={`/etrack/dispatch/dispatchStrt/${
					//     window.btoa(row.structureId) / window.btoa(row.siteRequirementId)
					//   }`}
					// >
					//   {row.structureName}
					// </Link>
				);
			},
		},
		{
			text: "Req By",
			dataField: "requestBy",
		},
		{
			text: "Raised By",
			dataField: "raisedBy",
		},
		{
			text: "Status",
			dataField: "requestStatus",
		},
		{
			text: "Actions",

			formatter: (cell, row) => {
				return (
					<>
						<IconButton
							iconname="faList"
							onClick={() => handleMore(row.structureId, row.siteRequirementId)}
						/>
					</>
				);
			},
		},
	];
};

export const transformDropDownData = (data, valueKey, labelKey) => {
	let tmpArr = [];
	data &&
		data.map((dt) => {
			tmpArr.push({
				label: dt[labelKey],
				value: dt[valueKey],
			});
		});
	return tmpArr;
};

export const twccdispatchStructureMetaData = (
	setSelectedStructures,
	handleMore
) => {
	return [
		{
			formatter: (cell, row) => {
				return (
					<>
						<Input
							key={row.id}
							type="checkbox"
							style={{ marginLeft: 0 }}
							disabled={row.disabled}
							checked={row.checked}
							onChange={() => setSelectedStructures(row)}
						/>
					</>
				);
			},
			width: "2%",
		},
		{
			text: "Availability",
			dataField: "availability",
		},
		{
			text: "Avail.Site",
			dataField: "projectName",
		},
		{
			text: "Avail.Dt",
			dataField: "availDate",
		},
		{
			text: "Actions",
			formatter: (cell, row) => {
				return (
					<>
						<IconButton
							iconname="faList"
							onClick={() => handleMore(row.structureCode)}
						/>
					</>
				);
			},
		},
	];
};

export const lstVerifyStructureQtyMetaData = () => {
	return [
		{
			text: "Structure Name",
			dataField: "structureName",
		},
		{
			text: "Quantity",
			dataField: "quantity",
		},
	];
};

export const transformdispatchStructure = (dispatchStructure) => {
	let tmpArr = [];
	let availability = "-",
		availDate = "-",
		disabled = false,
		checked = false;
	let currentDate = new Date();
	dispatchStructure &&
		dispatchStructure.map((structure) => {
			if (structure.surPlusFromDate) {
				let surplusDate = new Date(structure.surPlusFromDate);
				if (currentDate.getTime() > surplusDate.getTime()) {
					availability = "YES";
					availDate = structure.surPlusFromDate.split("T")[0];
					// disabled = false;
				}
			} else {
				availability = "-";
				availDate = "-";
				// disabled = true;
			}
			let tmpObj = {
				...structure,
				availability,
				availDate,
				disabled,
				checked,
			};
			tmpArr.push(tmpObj);
		});
	return tmpArr;
};

export const dispatchTableMetaData = (handleDelete) => {
	return [
		{
			formatter: (cell, row) => {
				return (
					<IconButton
						iconname="faTimes"
						className={"table-delete-icon"}
						onClick={() => handleDelete(row)}
						size="lg"
						iconColor="red"
						noBg
					/>
				);
			},
			style: { width: "1%" },
		},
		{ text: "Structure", dataField: "structureName" },
		{ text: "Quantity", dataField: "quantity" },
		{ text: "Service Type", dataField: "serviceType" },
	];
};

export const transformDispatchTableData = (data) => {
	let tempArr = [];
	data &&
		data.map((item) => {
			let tempObj = {
				structureName: JSON.parse(
					localStorage.getItem("currentRequirementInfo")
				).structureName,
				quantity: item.quantity
					? item.quantity
					: data.filter((struct) => {
							return struct.serviceTypeId === item.serviceTypeId;
					  }).length,
				serviceType:
					item.serviceTypeId === 4
						? "Reuse"
						: item.serviceTypeId === 1
						? "Fabrication"
						: "Outsourcing",
			};

			tempArr.push(tempObj);
		});

	return tempArr;
};

export const transformAttributeFilterValues = (stringifiedData) => {
	let attrData = JSON.parse(stringifiedData);
	let optionsArr = [];
	attrData &&
		attrData.map((item) => {
			let tempObj = {
				label: item.name,
				value: item.name,
			};
			optionsArr.push(tempObj);
		});
	return optionsArr;
};

export const sortstructuresBasedOnAttributes = (data, sortField) => {
	// console.log("inside the function...", data, sortField);
	let first, second;
	for (let index = 0; index < data.length; index++) {
		first = data[index];
		for (let jIndex = index + 1; jIndex < data.length; jIndex++) {
			second = data[jIndex];
			// console.log(first[sortField], second[sortField]);
			if (
				first[sortField] < second[sortField] ||
				first[sortField] === undefined ||
				second[sortField] === undefined
			) {
				let temp = data[index];
				data[index] = data[jIndex];
				data[jIndex] = temp;
			}
		}
	}
	// console.log("sortedArray......", data);
	return data;
};
