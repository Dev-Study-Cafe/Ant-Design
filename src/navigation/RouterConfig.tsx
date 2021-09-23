import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import { HOME } from './CONSTANTS';

const RouterConfig = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={HOME} />

        <Redirect path="*" to={HOME} />
      </Switch>
    </Router>
  )
};

export default RouterConfig;