import React from 'react';
import Imagedata from "ui/Imagedata";
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import {getResults} from 'api/data.js';
import { Link } from "react-router";


export default React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	componentWillMount:function(){
		this.setState({
			data:getResults()
		})
	},
	render: function () {
		return (
			<div>
				<Imagesdata data={this.state.data} />
			</div>
			
		)
	}
})