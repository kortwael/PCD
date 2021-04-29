import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Client from "./pages/Client";
import Crud from "./pages/Crud/Crud";
import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";
import "./App.css";
import Searchdr from "./pages/dr/Searchdr";
export default function App() {
  const[loggedin,setloggedin]=useState()
  useEffect(() => {
   setloggedin(localStorage.getItem('user'))
   console.log(loggedin)
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {loggedin ? <Redirect to="/Crud" /> : <Login />}
          </Route>
          <Route path="/Crud">
            {loggedin ? <Crud /> : <Login />}
          </Route>
          <Route path="/Doctor">
          {loggedin ? <Searchdr /> : <Login />}
          </Route>
          <Route path="/Client/:id">
            <Client />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
