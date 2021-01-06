import ModelMarket from './model-market.js';
import ViewMarket from './view-market.js';

// import BasketStore from '../basket/basket-store.js';

import { dataFromFirebase } from '../../services/init-firebase.js';


export class ControllerMarket {
	constructor() {
		this.model = new ModelMarket();
		this.view = new ViewMarket( this.activityReducer.bind(this));
		this.reducer = null;
		// this.basket = new BasketStore();

	}

	start(){
		this.view.createDOM();
		this.model.initDatabase(dataFromFirebase);
		this.model.loadDataFromDB()
		.then(products => {
			this.model.sortBySale();
			this.reducer.activityReducer('LOADED_PRODUCTS', products.length)
		})
	}

	getProductForPage(page) {
		const products = this.model.loadProductsFromStore(page);
		this.reducer.activityReducer('GET_PAGE_PRODUCT', products);
	}

	sortByPrice(){
		this.model.sortByPrice();
		const products = this.model.loadProductsFromStore();
		this.reducer.activityReducer('GET_PAGE_PRODUCT', products);
	}

	sortBySale(){
		this.model.sortBySale();
		const products = this.model.loadProductsFromStore();
		this.reducer.activityReducer('GET_PAGE_PRODUCT', products);
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}

	activityReducer( ...args ){
		return this.reducer.activityReducer( ...args );
	}

}
