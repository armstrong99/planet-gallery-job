import React from "react";
import "./App.css";
import { useReducer } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { reducer, ReducState } from "./store/reducer";
import Context from "./store";
import Home from "./views/home";


function App() {
  const [state, dispatch] = useReducer(reducer, ReducState);

  let GlobalStore = { state, dispatch };

  return (
    <Context.Provider value={GlobalStore}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
           <Redirect from={"*"} to="/" />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
