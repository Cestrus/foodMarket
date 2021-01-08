import ModelBasket from "./model-basket.js";
import ViewBasket from "./view-basket.js";

export class ControllerBasket {
	constructor({ getStore }) {
		this.model = new ModelBasket( getStore );
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
		this.model.removeProduct( id );
		this.view.renderCounter( this.model.counter );
		this.view.removeProduct( id );
	}

}
