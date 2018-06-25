import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Test from '../pages/Test';

class Routers extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/test" component={Test}/>
      </Switch>
    );
  }
}

export default Routers