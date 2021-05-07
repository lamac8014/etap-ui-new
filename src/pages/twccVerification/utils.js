import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";

export const listUsersMetaData = (setSelectedItems) => {
	return [
		{
			text: "",
			dataField: "",
			formatter: (cell, row) => {
				return (
					<Input
						key={row.dispatchRequirementId}
						type="checkbox"
						className="mx-auto"
						checked={row.checked}
						onChange={() => setSelectedItems(row)}
					/>
				);
			},
			style: { textAlign: "center" },
		},
		{
			text: "Structure",
			dataField: "structureName",
		},
		{
			text: "Struct. Code",
			dataField: "structureCode",
		},
		{
			text: "Struct. Family",
			dataField: "structureFamily",
		},
		// {
		// 	text: "Actions",
		// 	formatter: (cell, row) => {
		// 		return (
		// 			<div key={row.userId}>
		// 				<>
		// 					<IconButton
		// 						compKey={row.userId}
		// 						iconname="faEdit"
		// 						size="1x"
		// 						onClick={() => handleViewMore()}
		// 					/>
		// 				</>
		// 			</div>
		// 		);
		// 	},
		// },
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
