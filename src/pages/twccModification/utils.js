import React from "react";
import IconButton from "../../common/forms/IconButton";
import { transformVendorCodeListData } from "../procurement/utils";

export const listUsersMetaData = (handleViewMore, handleEdit) => {
	return [
		{
			text: "DA No",
			dataField: "dcNumber",
		},
		{
			text: "Struct. Name",
			dataField: "structrueName",
		},
		{
			text: "Struct. Code",
			dataField: "structureCode",
		},
		{
			text: "Struct. Family",
			dataField: "structureFamily",
		},
		{
			text: "Actions",
			formatter: (cell, row) => {
				return (
					<>
						<IconButton
							compKey={row.userId}
							iconname="faEdit"
							size="1x"
							onClick={() => handleViewMore(row.dispStructureId)}
						/>
					</>
				);
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

export const transformVendorData = (vendorCodeList) => {
	return transformVendorCodeListData(vendorCodeList);
};
