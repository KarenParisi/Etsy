import React from 'react';

export default React.createClass({
	render: function () {
		return (
			<div id="botsidediv">
				<p id="topp"> Refine your search </p>
					<div id="botsidelistdiv">
						<form id="sidebuttons" action="">
						<p> Item type </p>
							<li><input id="botinput" type="radio" name="item" value="all" /> All items </li><br/>
							<li><input type="radio" name="item" /> Handmade </li><br/>
							<li><input type="radio" name="item" value="vintage" /> Vintage </li>
						</form>	
						<hr id="sideline" />
						<form id="sidebuttons">
							<p> Price ($) </p>
							<li><input className="priceinput" id="priceinput" type="text" placeholder="Low"/> to </li>
							<li><input className="priceinput2" id="priceinput" type="text" placeholder="High"/> </li>
							<li><button id="pricesubmit" type="button"> > </button>  </li>
						</form>
						<hr id="sideline" />
						<form id="sidebuttons">
						<p> Filter by color </p>
							<li> <button className="colorbuttons" id="col1"> </button> </li>
							<li> <button className="colorbuttons" id="col2" type="button"> </button> </li>
							<li> <button className="colorbuttons" id="col3" type="button"> </button> </li>
							<li> <button className="colorbuttons" id="col4" type="button"> </button> </li>
							<li> <button className="colorbuttons" id="col5" type="button"> </button> </li>
							<li> <button className="colorbuttons" id="col6" type="button"> </button> </li>
							<li> <button className="colorbuttons" id="col7" type="button"> </button> </li>
							<li> <button className="colorbuttons" id="col8" type="button"> </button> </li>
						</form>
						<hr id="sideline" />
						<form id="sidebuttons">
						<p> Ordering options</p>
							<li> <button  type="button"> </button> Accepts Etsy gift cards</li> <br/>
							<li> <button type="button"> </button> Customizable </li>
						</form>
						<hr id="sideline" />
						<form id="sidebuttons" action="">
						<p> Shop locations </p>
							<li><input type="radio" /> Anywhere </li> <br/>
							<li><input type="radio" /> United States </li><br/>
							<li>Choose a custom location </li>
						</form>
						<hr id="sideline" />
						<form id="sidebuttons" action="">
						<p> Ship to </p>
						<select id="country" name="country">
							<option value="US"> United States </option> 
							<option value="Canada"> Canada </option>
							<option value="Italy"> Italy </option>
							<option value="France"> France </option>
							<option value="Germany"> Germany </option>
							<option value="Japan"> Japan </option>
							<option value="India"> India </option>
							<option value="U.K"> United Kingdom </option>
						</select>
						</form>


					</div>
			</div>
		)
	}
})

