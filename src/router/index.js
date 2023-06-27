import React from "react";
import { Route, Router ,Switch,} from "react-router-dom";

import Home from "../home";
import Teste from "../teste";

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route component={Home} path="/" exact /></Switch>
            <Switch>
            <Route component={Teste} path="/teste" /></Switch>
        </Router>
    )
}

export default Routes;