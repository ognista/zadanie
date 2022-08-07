import React, { useState } from "react";

import { mockData } from "../mockData";
import ListItem from "./ListItem";

const ListView = () => {
  const [data, setData] = useState(mockData);

  const handleChange = (idParameter) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === idParameter ? { ...item, is_unread: !item.is_unread } : item
      )
    );
  };

  const list = data.map((item) => {
    return <ListItem key={item.id} item={item} handleChange={handleChange} />;
  });

  return <ul>{list}</ul>;
};

export default ListView;
