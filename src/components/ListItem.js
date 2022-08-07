import React from "react";

const ListItem = ({ item, handleChange }) => {
  const { id, from, sent_date, subject, snippet, is_unread } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={is_unread}
        onChange={() => handleChange(id)}
      />
      {id} {from} {sent_date} {subject} {snippet}
    </li>
  );
};

export default ListItem;
