import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import TopBar from "ui/TopBar";
import ContentPg from "ui/ContentPg";



export default React.createClass({
	
	render: function () {
		return (
			<div>
				<TopBar />
				<ContentPg />
			</div>
		)
	}
})