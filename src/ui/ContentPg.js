import React from 'react';
import TopSidebar from "ui/TopSidebar";
import BottomSidebar from "ui/BottomSidebar";
import {getImages} from "api/data";
import ImageList from "ui/ImageList";

export default React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	componentWillMount:function(){
		this.setState({
			data:getImages()
		})
	},
	render: function () {
		return (
			<div>
				<div id="background">
					<TopSidebar />
					<BottomSidebar />
				</div>
				<div className="flexcontainer">
					<ImageList data={this.state.data} />
				</div>
			</div>
		)
	}
})