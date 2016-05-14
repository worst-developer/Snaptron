import React from 'react';  // eslint-disable-line
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import LoginPage from './components/login';
import NotificationsPage from './components/notifications';
import SettingsPage from './components/settings';

export class NotFound extends React.Component {
  render() {
    return <h2>Not found</h2>;
  }
};

function requireAuth (store, b, c) {
  const isLoggedIn = store.getState().auth.token !== null;

  if (!isLoggedIn) {
    return (nextState, replace) => {
      replace('/login/');
    };
  }
}

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={NotificationsPage} onEnter={requireAuth(store)} />
      <Route path="/notifications" component={NotificationsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="*" component={NotFound} />
    </Route>
  );
};
