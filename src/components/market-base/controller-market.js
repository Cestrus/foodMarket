import ModelMarket from './model-market.js';
import ViewMarket from './view-market.js';

import { dataFromFirebase } from '../../services/init-firebase.js';


export class ControllerMarket {
	constructor({setStore, getStore}) {
		this.model = new ModelMarket( setStore, getStore );
		this.view = new ViewMarket( this.activityReducer.bind(this));
		this.reducer = null;
		console.log('contr market', getStore())
	}

	start(){
		this.view.createDOM();
		this.model.initDatabase( dataFromFirebase );
		this.model.loadDataFromDB()
		.then(products => {
			this.model.sortBySale();
			this.reducer.activityReducer('LOADED_PRODUCTS', products.length)
		})
	}

	getProductForPage( page ) {
		const products = this.model.loadProductsFromStore(page);
		this.reducer.activityReducer('GET_PAGE_PRODUCT', products);
	}

	sortByPrice( isAZ ){
		this.model.sortByPrice( isAZ );
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

	asideHide(){
		this.view.asideHide();
	}

	asideVisible(){
		this.view.asideVisible();
	}

	tansformRootContainer(){
		this.view.tansformRootContainer();
	}

}
