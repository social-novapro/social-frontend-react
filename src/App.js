import './App.css';
import { Switch, Route } from 'react-router-dom'

import { LandingPage, ProfilePage, LoginPage, PostPage, apiPage} from './pages'

function App() {
  return (
    <Switch>
      <Route path='/' exact={ true } component={ LandingPage } />
      <Route path='/login' exact={ true } component={ LoginPage } />
      <Route path='/post' exact={ true }  component={ PostPage } />
      <Route path='/api' exact={ true }  component={ apiPage } />
      <Route path='/:id' exact={ true } component={ ProfilePage } />
    </Switch>
  );
}

export default App;
