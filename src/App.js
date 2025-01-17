import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/LandingPage";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import PrivateRoute  from "./Components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <PrivateRoute  path="/dashboard" component={DashBoard} />
          <Route exact path="/" component={Landing}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
