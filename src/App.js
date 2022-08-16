import './App.css';
import { Switch, Route } from 'react-router-dom'

import { LandingPage, ProfilePage, LoginPage, PostPage, apiPage} from './pages'
import { useCookies } from 'react-cookie';

function App() {
	console.log("hij")
	const [cookies, setCookie, removeCookie] = useCookies(['interactToken']);
	console.log(cookies)

	// setCookie('interactToken', {
	// 	token: 'atbegining',
	// 	userid: '123'
	// });

	// removeCookie('interactToken');
	console.log(cookies)
	const local= localStorage.getItem("name",);
	console.log(local)

	const searchSocial = async (search) => {
		console.log(search)
		const data = "4qrq"
		// const response = await fetch(`https://social-backend.herokuapp.com/api/v1/search/${search}`);
		// const data = await response.json();
		return data;
	}
  	return (
		<Switch>
			<div class="mainArea">
				<div class="main-header">
					<h1>Welcome to <button class="buttonStyled"  onclick="test()">Interact!</button></h1>
					<p>Created by <i><button class="buttonStyled"  href="https://novapro.net/">Nova Productions</button></i></p>
				</div>

				<div class="search"><input type="text" id="searchBarArea" onKeyUp={searchSocial} placeholder="Search for Posts and Users..." /></div>
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
