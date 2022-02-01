import React from "react";
import IconButton from "../../common/forms/IconButton";
import { transformVendorCodeListData } from "../procurement/utils";

export const listUsersMetaData = (handleEdit, handleViewMore, redirectToComponentPage) => {
	return [
		{
			text: "DA No",
			dataField: "dcNumber",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Struct. Name",
			dataField: "structrueName",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Structure Code",
			dataField: "structureCode",
			style: { verticalAlign: "middle" },
			formatter: (cell, row) => {
			  return (
				<>
				  {
					<a
					  href="#"
					  onClick={(e) => {
						e.preventDefault();
						redirectToComponentPage(
						  row.dispStructureId,
						  row.structrueName,
						  row.structureCode,
						  row.projectName,
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
			text: "Struct. Family",
			dataField: "structureFamily",
			style: { verticalAlign:"middle"},
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
							onClick={() => handleEdit(row.tempId)}
						/>
						<IconButton
							iconname="faList"
							size="1x"
							onClick={() => handleViewMore(row.tempId)}
						/>
					</>
				);
			},
		},
	];

};

export const componentMetaData = (handleMore) => {
	return [
	  {
		text: "Component",
		dataField: "componentName",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Component Type",
		dataField: "componentType",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Comp ID",
		dataField: "compId",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Comp No",
		dataField: "componentNo",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Group",
		dataField: "isGroup",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Dr. No",
		dataField: "drawingNo",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Length",
		dataField: "leng",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Breadth",
		dataField: "breath",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Height",
		dataField: "height",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Thickness",
		dataField: "thickness",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Weight",
		dataField: "weight",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Type",
		dataField: "makeType",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Tag",
		dataField: "isTag",
		style: { verticalAlign: "middle" },
	  },
	  {
		text: "Modified(Y/N)",
		dataField: "isModified",
		// style: { verticalAlign: "middle" },
		// formatter: (cell, row) => {
		//   return (
		//     <>
		//       {
		//         <IconButton
		//           compKey={row.userId}
		//           iconname="faEdit"
		//           size="1x"
		//           onClick={() => handleMore(row.compId)}
		//         />
		//       }
		//     </>
		//   );
		// },
	  },
	];
  };

  export const getComponentTableData = (scr) => {
	let tmpArr = [];
	let data = scr.componentData;
	data &&
		data.map((data) => {
      data.isGroup = data.isGroup.toString().toLowerCase() === "true" || data.isGroup.toString().toLowerCase() === "yes" ? "Yes" : "No"
      data.isTag= data.isTag.toString().toLowerCase() === "true" || data.isTag.toString().toLowerCase() === "yes" ? "Yes" : "No"
		});
	return data;
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
  let tempArr = [];
  vendorCodeList.map((item) => {
    // return new fabrication vendors only
    item.serviceTypeId === 1 &&
      tempArr.push({
        value: item.id,
        label: item.name,
      });
  });

  return tempArr;
};
