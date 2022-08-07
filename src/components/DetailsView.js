import React from "react";
import { Link, useParams } from "react-router-dom";

import { mockData } from "../mockData";

const DetailsView = () => {
  const { id } = useParams();

  const details = mockData.find((item) => item.id === +id);

  return (
    <React.Fragment>
      <p>
        Details: {details.id} {details.from} {details.sent_date}{" "}
        {details.subject} {details.snippet}
      </p>
      <Link to="/">
        <h3>Go back</h3>
      </Link>
    </React.Fragment>
  );
};

export default DetailsView;
