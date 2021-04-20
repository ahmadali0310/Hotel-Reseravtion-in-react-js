import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import Navbar from "./Compnents/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact render={(props) => <Home props={props} />} />
        <Route
          path="/rooms/"
          exact
          render={(props) => <Rooms props={props} />}
        />
        <Route
          path="/rooms/:slug"
          exact
          render={(props) => <SingleRoom props={props} />}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
