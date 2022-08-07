import React, { memo } from "react";
import { Link } from "react-router-dom";

const ListItem = memo(({ item, handleChange }) => {
  const { id, from, sent_date, subject, snippet, is_unread } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={is_unread}
        onChange={() => handleChange(id)}
      />
      <Link to={`/details/${id}`}>
        {id} {from} {sent_date} {subject} {snippet}
      </Link>
    </li>
  );
});

export default ListItem;
