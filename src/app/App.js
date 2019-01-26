import React from 'react';
import Async from 'react-code-splitting';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import 'normalize.css';
import Navbar from './components/Navbar';
import './styles.less';

const Home = () => <Async load={import(/* webpackChunkName: "Home" */ './pages/Home')} />
const AboutUs = () => <Async load={import(/* webpackChunkName: "AboutUs" */ './pages/AboutUs')} />

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<main className="container">
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
			</main>
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