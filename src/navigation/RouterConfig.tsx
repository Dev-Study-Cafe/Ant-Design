import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import { BUTTON, HOME, ICON, TYPOGRAPHY } from './CONSTANTS';
import { Button, Icon, Typography } from '../components/antd';

const RouterConfig = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={HOME} />

        {/* General */}
        <Route exact path={BUTTON} component={Button} />
        <Route exact path={ICON} component={Icon} />
        <Route exact path={TYPOGRAPHY} component={Typography} />

        <Redirect path="*" to={HOME} />
      </Switch>
    </Router>
  )
};

export default RouterConfig;