import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listUsersMetaData = (handleViewMore, handleEdit) => {
	return [
		{
			text: "DC/DA No",
			dataField: "dispatchNumber",
		},
		{
			text: "Struct. Name",
			dataField: "structureName",
		},
		{
			text: "Struct. Code",
			dataField: "projectStructureCode",
		},
		{
			text: "No of Components",
			dataField: "componentsCount",
		},
		{
			text: "Actions",
			formatter: (cell, row) => {
				return (
					<div key={row.userId}>
						<>
							<IconButton
								iconname="faEdit"
								size="1x"
								onClick={() => handleEdit(row.dispatchRequirementId)}
							/>
							<IconButton
								iconname="faList"
								size="1x"
								onClick={() => handleViewMore(row.dispatchRequirementId)}
							/>
						</>
					</div>
				);
			},
		},
	];
};

export const surplusApproveMetaData = (
	handleApprove,
	handleReject,
	handleViewMore
) => {
	return [
		{
			text: "Struct. Name",
			dataField: "structureName",
		},
		{
			text: "Struct. Code",
			dataField: "structureCode",
		},
		{
			text: "Struct. Type",
			dataField: "structureTypeName",
		},
		{
			text: "Project",
			dataField: "projectName",
		},
		{
			text: "Surplus From",
			dataField: "surplusDate",
		},
		{
			text: "Actions",
			formatter: (cell, row) => {
				if (row.isAction == "1") {
					return (
						<>
							{
								<IconButton
									type="success"
									iconname="faThumbsUp"
									onClick={() => handleApprove(row.id)}
								/>
							}
							{
								<IconButton
									type="danger"
									iconname="faThumbsDown"
									onClick={() => handleReject(row.id)}
								/>
							}
							{
								<IconButton
									iconname="faList"
									onClick={() => handleViewMore(row.id)}
								/>
							}
						</>
					);
				} else {
					return (
						<>
							{
								<IconButton
									iconname="faList"
									onClick={() => handleViewMore(row.id)}
								/>
							}
						</>
					);
				}
			},
		},
	];
};

export const transformUsersList = (usersList) => {
	let tmpArr = [];
	usersList &&
		usersList.map((user) => {
			let tmpObj = {
				id: user.userId,
				userID: user.userId,
				firsttext: user.firstName,
				lasttext: user.lastName,
				usertext: user.userName,
				email: user.email,
				mobileNo: user.mobileNo,
			};
			tmpArr.push(tmpObj);
		});
	return tmpArr;
};
