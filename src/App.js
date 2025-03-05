import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import SecurityService from "./Routes/SecurityService";
import SecurityGuards from "./Routes/SecurityGuards";
import KeyHolding from "./Routes/KeyHolding";
import EmptyProperty from "./Routes/EmptyProperty";
import Events from "./Routes/Events";
import CCTV from "./Routes/CCTV";
import ContactUs from "./Routes/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/securityServices" component={SecurityService} />
          <Route path="/securityGuard" component={SecurityGuards} />
          <Route path="/keyholding" component={KeyHolding} />
          <Route path="/emptyProperty" component={EmptyProperty} />
          <Route path="/events" component={Events} />
          <Route path="/cctv" component={CCTV} />
          <Route path="/contactUs" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
