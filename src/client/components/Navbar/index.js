import React from 'react';
import { Link } from 'react-router-dom';
import './less/styles.less';

const Navbar = props => {
	const { title } = props;

	return (
		<nav>
			<ul className="menu">
				<li className="menu-item"><Link to="/">Home</Link></li>
				<li className="menu-item"><Link to="about">About</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;