import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import initializeStore from './store/configureStore';
// import './sass/styles.scss';

const store = initializeStore();

render(
  <Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Provider>,
  document.getElementById('app')
);