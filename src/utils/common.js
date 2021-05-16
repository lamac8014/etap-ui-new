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
  data &&
    data.sort((first, second) => {
      return second.sortDate.getTime() - first.sortDate.getTime();
    });

  return data;
};
