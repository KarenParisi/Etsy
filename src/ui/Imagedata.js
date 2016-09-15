import React from 'react';
import Images from "ui/Images";
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';


export default React.createClass({
	render: function () {
		return (
			{this.props.data.map(function(image, i){
					return <Images key={i} id={image.listing_id} src={image.Images.url_75x75} />
					})}
			
		)
	}
})