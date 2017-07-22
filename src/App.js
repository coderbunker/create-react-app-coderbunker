import React, { Component } from 'react';
import MyLoadable from './MyLoadable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const LoadableApp = MyLoadable({
  loader: () => import('./MyApp')
});

const LoadableOtherApp = MyLoadable({
  loader: () => import('./MyOtherApp')
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoadableApp} />
          <Route exact path="/other" component={LoadableOtherApp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
