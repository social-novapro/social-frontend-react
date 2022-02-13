import './App.css';
import { Switch, Route } from 'react-router-dom'

import { LandingPage, ProfilePage, LoginPage, PostPage, apiPage} from './pages'

function App() {
  	return (
		<Switch>
			<div class="mainArea">
				<div class="main-header">
					<h1>Welcome to <button class="buttonStyled"  onclick="test()">Interact!</button></h1>
					<p>Created by <i><button class="buttonStyled"  href="https://novapro.net/">Nova Productions</button></i></p>
				</div>
				<div class="search"><input type="text" id="searchBarArea" onkeyup="searchSocial()" placeholder="Search for Posts and Users..." /></div>
				<Route path='/' exact={ true } component={ LandingPage } />
				<Route path='/login' exact={ true } component={ LoginPage } />
				<Route path='/post' exact={ true }  component={ PostPage } />
				<Route path='/api' exact={ true }  component={ apiPage } />
				<Route path='/:id' exact={ true } component={ ProfilePage } />
			</div>
		</Switch>
	);
}

export default App;
