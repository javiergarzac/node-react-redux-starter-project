import React from 'react';
import AboutUsReducer from './reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withReducer } from '../../components/withReducer';

const AboutUs = props => {
	const { title } = props;

	return (
		<React.Fragment>
			<h1>{title}</h1>
		</React.Fragment>
	);
};

function mapStateToProps(state) {
	return {
		...state.AboutUs
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(dispatch)
	};
}

export default withReducer('AboutUs', AboutUsReducer)(connect(mapStateToProps, mapDispatchToProps)(AboutUs));