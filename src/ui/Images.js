import React from 'react';
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';

export default React.createClass({
	render: function () {
		return (
			<div id="container">
					<ul id="images">
						<li> <img src={this.props.src} /> </li>
						
					</ul>	
				</div>
		)
	}
})