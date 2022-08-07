import React from "react";

const ListItem = ({ item }) => {
  const { id, from, sent_date, subject, snippet } = item;

  return (
    <li>
      {id} {from} {sent_date} {subject} {snippet}
    </li>
  );
};

export default ListItem;
