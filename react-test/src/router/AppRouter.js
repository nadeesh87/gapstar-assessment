import React, { PureComponent } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import * as browserHistory from 'history';

import PublicRoute from './PublicRoute';

import PageNotFound from '../page/PageNotFound';
import ImageSelect from '../page/ImageSelect';
import ImageFavorite from '../page/ImageFavorite';

export const history = browserHistory.createBrowserHistory();

class AppRouter extends PureComponent {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PublicRoute
            path="/"
            component={ImageSelect}
            exact
          />
          <PublicRoute
            path="/images/favorite"
            component={ImageFavorite}
          />
          <Route
            component={PageNotFound}
          />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
