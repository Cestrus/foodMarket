import ModelMarket from './model-market.js';
import ViewMarket from './view-market.js';

// import BasketStore from '../basket/basket-store.js';
// import { ControllerBar } from '../bar/controller-bar.js'

import { dataFromFirebase } from '../../services/init-firebase.js';


export class ControllerMarket {
	constructor(pubMethods) {
		this.pubMethods = pubMethods;
		this.model = new ModelMarket();
		this.view = new ViewMarket();
		// this.bar = new ControllerBar();
		// this.basket = new BasketStore();
		this.pubMethods.subscribe('CHANGE_PAGE', this.getProductForPage.bind(this));
		this.pubMethods.subscribe()



	}

	start(){
		this.view.createDOM();
		this.model.initDatabase(dataFromFirebase);
		this.model.loadDataFromDB()
		.then(products => {
			this.model.sortBySale();
			this.pubMethods.notify('LOADED_PRODUCTS', products.length);
		})

	}

	getProductForPage(page) {
		const products = this.model.loadProductsFromStore(page);
		this.pubMethods.notify('GET_PAGE_PRODUCT', products)
	}


}
