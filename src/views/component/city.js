import React from 'react';
import './city.styl'
function searchingFor(term){
    return function(x,i){
        return x.id.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

function City(props){
	let items = props.items,
 		term= props.term;
 		console.log(items);
	return(
		<div className="container">
		
		{
			 items.filter(searchingFor(term)).map(function(d, idx) {
				return(
					<div className="card">
						<div key={idx} className="items">	
								<div className="cardHeader">
									<div className="cardName"><h1>{d.name}</h1></div>
									<div className="cardRank"><small>RANK <span>{d.rank}</span></small></div>
									<div className="cardSimbol"><small>{d.symbol}</small></div>
								</div>
								<div className="cardPrice">
									<div className="value">
										<h1>${d.price_usd}</h1>
									</div>
									<div className="porcent"><small>%{d.percent_change_24h}</small></div>
									<div className="valueMarket">
										<h5>${d.price_usd}</h5>
									</div>
									<div className="label">
										<small>MARKET CAP</small>
									</div>
									<div className="valueMarket">
										<h5>${d.price_usd}</h5>
									</div><div className="label">
										<small>VOLUME</small>
									</div>
									<div className="valueMarket">
										<h5>${d.price_usd}</h5>
									</div>
									<div className="label">
										<small>CIRCULATING SUPPLY</small>
									</div>
								</div>
								<div className="stripes"></div>
							</div>
						</div>
				)
			})
		}
		</div>
	);
}
export default City;