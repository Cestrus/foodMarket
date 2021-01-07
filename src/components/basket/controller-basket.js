import ModelBasket from "./model-basket.js";
import ViewBasket from "./view-basket.js";

export class ControllerBasket {
	constructor() {
		this.model = new ModelBasket();
		this.view = new ViewBasket( this.activityReducer.bind( this ));
		this.reducer = null;
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}

	activityReducer( ...args ){
		return this.reducer.activityReducer( ...args );
	}

	setStore( products ){
		this.model.setStore( products );
	}

	showBasket(){
		this.view.renderBasketDetails( this.model.basket );
		if( this.model.basket.length ) this.view.renderTotalPrice();
	}

	exitBasket(){
		this.view.exitBasket();
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
