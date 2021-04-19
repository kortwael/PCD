import React from 'react'
import Login from './pages/Login'
import Client from './pages/Client'
import Crud from './pages/Crud'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css'
export default function App() {

  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Crud">
            <Crud />
          </Route>
          <Route path="/Client">
            <Client />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
