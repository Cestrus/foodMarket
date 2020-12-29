import ModelMarket from './model-market.js';
import ViewMarket from './view-market.js';

import Plate from "../bar/plate.js";
import BasketStore from '../basket/basket-store.js';

import { dataFromFirebase } from '../../services/init-firebase.js';



export class ControllerMarket {
	constructor() {
		this.model = new ModelMarket();
		this.view = new ViewMarket();
		this.basket = new BasketStore();


	}

	start(){
		this.model.initDatabase(dataFromFirebase);
		this.model.loadDataFromDB()
		.then(store => {
			console.log('cont market', store)
			this.model.sortBySale();
			this.view.renderMainContent(Plate(this.model.loadProductsFromStore()));
			this.view.createDOM();
			this.view.addListeners();
		})

	}






}
