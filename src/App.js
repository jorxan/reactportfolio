import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'

function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
