import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// pages
import About from "./pages/about";
import Project from "./pages/project";
import Hobby from "./pages/hobby";
import Work from "./pages/careers";

// conponents
import Layoutv1 from "./components/layout"

const App =() =>{
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layoutv1>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/hobby" component={Hobby} />
          <Route path="/work" component={Work} />
        </Switch>
      </Layoutv1>
    </Router>
  );
}
export default App;
