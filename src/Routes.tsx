import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import ProfileGit from 'pages/ProfileGit';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profilegit">
        <ProfileGit/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
