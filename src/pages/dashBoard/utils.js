export const transformDropDownData = (data, id, name) => {
    let returnData = [];
    data.map(item => {
        returnData.push({
            label: item[name],
            value: item[id]
        })
    })

    return returnData
}