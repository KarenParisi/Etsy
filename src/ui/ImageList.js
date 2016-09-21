import React from 'react';
import Image from "ui/Image";
import { Link } from "react-router";
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';


export default React.createClass({
	render: function () {
		return (
			<div> 
				{this.props.data.map(function(item, i){
					return <Image key={i} id={item.id} src={item.image} />
				})}
			</div>	
			
		)
	}
})




/////////////////works////////

// import React from 'react';
// import Images from "ui/Images";
// import { Link } from "react-router";
// import { Router, Route, browserHistory, hashHistory } from 'react-router';


// export default React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<Images image={"image"} />
// 			</div>	
					
			
// 		)
// 	}
// })

// import React from 'react';
// import { Link } from "react-router";
// import { Router, Route, browserHistory, hashHistory } from 'react-router';


// export default React.createClass({
// 	render: function () {
// 		return (
// 			<div id="container">
// 					<ul id="images">
// 						<li>  {this.props.image} </li>
						
// 					</ul>	
// 				</div>
// 		)
// 	}
// })

// import React from 'react';
// import { Router, Route, browserHistory, hashHistory } from 'react-router';
// import { render } from 'react-dom';
// import ImageList from "ui/ImageList";


// export default React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<ImageList data={this.props.data}/>
// 			</div>
// 		)
// 	}
// })
/////////////////////////////

