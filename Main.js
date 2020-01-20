import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import Dashboard from './Dashboard'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Dashboard" component={Dashboard} />
        </Switch>
    </main>
);

export default Main;
