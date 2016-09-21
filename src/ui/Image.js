import React from 'react';
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';

export default React.createClass({
	render: function () {
		return (
			<div className="innercontainer"> 
				<ul>
					<li> <img src={this.props.src} /> <div id="caption"><p className="caption">TEXT</p> </div></li>

				</ul>
			</div>
		)
	}
})
