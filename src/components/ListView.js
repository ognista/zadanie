import React, { useCallback, useState } from "react";

import { mockData } from "../mockData";
import ListItem from "./ListItem";

const ListView = () => {
  const [data, setData] = useState(mockData);

  const handleChange = useCallback((idParameter) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === idParameter ? { ...item, is_unread: !item.is_unread } : item
      )
    );
  }, []);

  const list = data.map((item) => {
    return <ListItem key={item.id} item={item} handleChange={handleChange} />;
  });

  const numberOfCheckedCheckboxes = data.filter(
    (item) => item.is_unread === true
  ).length;

  return (
    <React.Fragment>
      <ul>{list}</ul>
      <p>
        Total number of currently selected items: {numberOfCheckedCheckboxes}
      </p>
    </React.Fragment>
  );
};

export default ListView;
