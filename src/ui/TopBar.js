import React from 'react';

export default React.createClass({
	render: function () {
		return (
			<div>
				<div id="toplistdiv"> 	
					<ul id="toplist">
						<li> Sell on Etsy </li>
						<li> Register </li>
						<li> <button id="signin"> Sign In </button> </li>
						<div id="cart">
							<img id="icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/5641-200.png" />
							<p> Cart </p>
						</div>
					</ul>
				</div>
				<div id="topdiv">
					<form>
						<p id="etsy"> Etsy </p> <input id="topinput" type="text" name="topsearch" /> 
						<button id="searchbutton"> Search </button>
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