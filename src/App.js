import React from "react";
import "./styles.css";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Career from "./Career";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import About from "./About";

export default function App() {
  const routes = [
    "/Home",
    "/Contact",
    "/Career",
    "/About",
    "/Login",
    "/Register"
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              >
                <Tab
                  label="Home"
                  value={routes[0]}
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  label="Contact"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  label="Career"
                  value={routes[2]}
                  component={Link}
                  to={routes[2]}
                />
                <Tab
                  label="About"
                  value={routes[3]}
                  component={Link}
                  to={routes[3]}
                />
                <Tab
                  label="Login"
                  value={routes[4]}
                  component={Link}
                  to={routes[4]}
                />
                <Tab
                  label="Register"
                  value={routes[5]}
                  component={Link}
                  to={routes[5]}
                />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Career" component={Career} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
