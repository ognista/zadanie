import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ListView from "./components/ListView";
import DetailsView from "./components/DetailsView";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ListView} />
      <Route path="/details/:id" exact component={DetailsView} />
    </BrowserRouter>
  );
};

export default App;
