import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// pages
import About from "./pages/about";
import Project from "./pages/project";
import Hobby from "./pages/hobby";
import Work from "./pages/careers";

// Components
import Header from "./components/Header";
import Aside from "./components/Aside";


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="wrap">
          <Header />
          <main>
            <Aside />
            <section className="content">
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/" component={About} />
                <Route path="/project" component={Project} />
                <Route path="/hobby" component={Hobby} />
                <Route path="/work" component={Work} />
              </Switch>
            </section>
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
