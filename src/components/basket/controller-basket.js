import ModelBasket from "./model-basket.js";
import ViewBasket from "./view-basket.js";

export class ControllerBasket {
	constructor({ getStore, setStore }, {loadProducts}){
		this.model = new ModelBasket( getStore, setStore, this.activityReducer.bind( this ), loadProducts);
		this.view = new ViewBasket( this.activityReducer.bind( this ));
		this.reducer = null;
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}

	activityReducer( ...args ){
		return this.reducer.activityReducer( ...args );
	}

	showBasket(){
		this.view.renderBasketDetails( this.model.basket );
		if( this.model.basket.length ) this.view.renderTotalPrice();
	}

	exitBasket( basket ){
		this.view.exitBasket( basket );
	}

	buyProduct({id, count}){
		this.model.changeCountProduct(id, count);
		this.view.renderCounter( this.model.counter );
	}

	changeCountProduct({id, count, max}){
		this.view.renderTotalPrice( id, this.model.changeCountProduct(id, count, max) );
		this.view.renderCounter( this.model.counter );
	}

	removeProduct( id ){
		const basket = this.model.removeProduct( id );
		this.view.renderCounter( this.model.counter );
		this.view.renderBasketDetails ( basket );
	}

	loadUserBasket( loadedBasket ){
		this.model.loadUserBasket( loadedBasket )
		.then(count => this.view.renderCounter( count ));
	}

	clearBasket(){
		const basket = this.model.clearBasket();
		this.view.renderCounter( basket.length );
		this.view.renderBasketDetails( basket );
	}

	buyAllBasket( totalPrice ){
		this.model.buyAllBasket( totalPrice );
	}

}
