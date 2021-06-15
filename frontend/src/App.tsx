import React from 'react';
import {Route, Switch} from "react-router-dom";
import {SignIn} from "./pages/SignIn";
import {Home} from "./pages/Home/Home";




function App() {
  return (
    <div className="App">
        <Switch>
        <Route  path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        </Switch>
    </div>
  );
}

export default App;
