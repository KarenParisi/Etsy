import React from 'react';

export default React.createClass({
	render: function () {
		return (
			<div>
				<div id="toplistdiv"> 	
					<ul id="toplist">
						<li> Sell on Etsy </li>
						<li> Register </li>
						<li> <button id="singnin"> Sign In </button> </li>
						<li> Cart </li>
					</ul>
				</div>
				<div id="topdiv">
					<form>
						<p id="label"> Etsy </p> <input type="text" name="topsearch" /> 
						<button id="topbutton"> Search </button>
					</form>
					
				</div>
				<hr />	
				<ul id="topnav">
						<li> Clothing & Accessories </li>
						<li> Jewelry </li>
						<li> Craft Supplies & Tools</li>
						<li> Weddings</li>
						<li> Entertainment</li>
						<li> Home & Living</li>
						<li> Kids & Baby</li>
						<li> Vintage</li>	
					</ul>

			</div>

				
			
		)
	}
})	