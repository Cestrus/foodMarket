import ModelMarket from './model-market.js';
import ViewMarket from './view-market.js';

// import BasketStore from '../basket/basket-store.js';

import { dataFromFirebase } from '../../services/init-firebase.js';


export class ControllerMarket {
	constructor({ notify, subscribe }) {
		this.notify = notify;
		this.subscribe = subscribe;
		this.model = new ModelMarket();
		this.view = new ViewMarket( notify );
		// this.basket = new BasketStore();
		this.subscribe('CHANGE_PAGE', this.getProductForPage.bind(this));
		this.subscribe('SORT_BY_PRICE', this.sortByPrice.bind(this))
		this.subscribe('SORT_BY_SALE', this.sortBySale.bind(this))



	}

	start(){
		this.view.createDOM();
		this.model.initDatabase(dataFromFirebase);
		this.model.loadDataFromDB()
		.then(products => {
			this.model.sortBySale();
			this.notify('LOADED_PRODUCTS', products.length);
		})
	}

	getProductForPage(page) {
		const products = this.model.loadProductsFromStore(page);
		this.notify('GET_PAGE_PRODUCT', products)
	}

	sortByPrice(){
		this.model.sortByPrice();
		const products = this.model.loadProductsFromStore();
		this.notify('GET_PAGE_PRODUCT', products)
	}

	sortBySale(){
		this.model.sortBySale();
		const products = this.model.loadProductsFromStore();
		this.notify('GET_PAGE_PRODUCT', products)
	}


}
