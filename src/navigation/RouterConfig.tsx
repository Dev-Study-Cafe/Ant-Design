import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import { BUTTON, HOME, TYPOGRAPHY } from './CONSTANTS';
import { Button, Typography } from '../components/antd';

const RouterConfig = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={HOME} />
        <Route exact path={BUTTON} component={Button} />
        <Route exact path={TYPOGRAPHY} component={Typography} />

        <Redirect path="*" to={HOME} />
      </Switch>
    </Router>
  )
};

export default RouterConfig;