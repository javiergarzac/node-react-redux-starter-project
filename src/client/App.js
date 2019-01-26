import React from 'react';
import Async from 'react-code-splitting';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

// import './sass/styles.scss';

const Home = () => <Async load={import(/* webpackChunkName: "Home" */ './pages/Home')} />
const AboutUs = () => <Async load={import(/* webpackChunkName: "AboutUs" */ './pages/AboutUs')} />

const App = () => {
	return (
		<React.Fragment>
			<h1>Hello From client side!!</h1>
			<aside>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="about">About</Link></li>
				</ul>
			</aside>
			<Switch>
				<Route
					exact path="/"
					render={() => <Home />}
				/>
				<Route
					exact path="/about"
					render={() => <AboutUs />}
				/>
				<Route
					render={() => 'NOT FOUND'}
				/>
			</Switch>
		</React.Fragment>
	);
};

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);