import FaIcon from "../common/FaIcon";

export const sortCaret = (order, column) => {
  return (
    <FaIcon iconname="faSort" className="sort-icon" size="1x" color="#242424" />
  );
};

export const sortDataByDate = (tableData) => {
  let data = JSON.parse(JSON.stringify(tableData));
  data.map((item) => {
    item.sortDate = item.updatedAt
      ? new Date(item.updatedAt)
      : new Date(item.createdAt);
  });
  console.log("data......", data);
  data &&
    data.sort((first, second) => {
      return second.sortDate.getTime() - first.sortDate.getTime();
    });

  return data;
};

export const sortByFieldName = (data, field) => {
  data.map((item) => {
    item.sortDcNumber = parseInt(item[field].split("C")[1]);
  });
  data &&
    data.sort((first, second) => {
      return second.sortDcNumber - first.sortDcNumber;
    });

  return data;
};
