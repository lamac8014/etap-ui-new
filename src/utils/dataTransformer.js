export const transformGridList = (gridList) => {
	let tmpArr = [];
	gridList.map((grid) => {
		tmpArr.push({
			value: grid.id,
			label: grid.gridName,
		});
	});
	return tmpArr;
};

export const transformDropDownData = (
	data,
	valueKey,
	labelKey,
	strCode = false
) => {
	let tmpArr = [];
	if (strCode) {
		let tempObj = {
			label: "NEW",
			value: null,
		};
		tmpArr.push(tempObj);
	}
	data &&
		data.map((dt) => {
			if (dt.structureAttributes !== null) {
				tmpArr.push({
					label: dt[labelKey],
					value: dt[valueKey],
				});
			}
		});
	return tmpArr;
};

export const getSelectedValue = (data, value) => {
	// console.log("++++++++++++++++")
	// console.log("test",data,value);
	// console.log("++++++++++++++++")
	let tmpObj = {};
	data &&
		data.map((dt) => {
			if (dt.id === value) {
				tmpObj = {
					value: dt.id,
					label: dt.name,
				};
			}
		});
	return tmpObj;
};
