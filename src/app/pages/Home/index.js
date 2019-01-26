import React from 'react';
import HomeReducer from './reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withReducer } from '../../components/withReducer';

const Home = props => {
	const { title } = props;

	return (
		<React.Fragment>
			<h1>{title}</h1>
		</React.Fragment>
	);
};

function mapStateToProps(state) {
	return {
		...state.HomePage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(dispatch)
	};
}

export default withReducer('HomePage', HomeReducer)(connect(mapStateToProps, mapDispatchToProps)(Home));