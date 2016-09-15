import React from 'react';
import Images from "ui/Images";
import TopSidebar from "ui/TopSidebar";
import BottomSidebar from "ui/BottomSidebar";
// import Bottom from "ui/Bottom";


export default React.createClass({
	render: function () {
		return (
			<div id="background">
				<Images />
				<TopSidebar />
				<BottomSidebar />
				
			</div>
		)
	}
})