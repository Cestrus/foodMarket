import ModelMarket from './model-market.js';
import ViewMarket from './view-market.js';

import Header from "../components/header/header.js";
import Search from '../components/search/search.js';
import Aside from "../components/aside/aside.js";
import Pagin from "../components/pagin/pagin.js";
import Plate from "../components/plate/plate.js";
import Footer from "../components/footer/footer.js";

import Basket from '../components/basket/basket.js';
import { dataFromFirebase } from '../services/init-firebase.js';



export class ControllerMarket {
	constructor() {
		this.model = new ModelMarket();
		this.view = new ViewMarket();
		this.basket = new Basket();


	}

	start(){
		this.view.renderPage( Header(), Search(), Pagin(), Aside(), Plate(), Footer());
		this.view.createDOM();
		this.view.addListeners();
		this.model.initDatabase(dataFromFirebase);
		this.model.loadData();
		// console.log('controller', this.view.DOM)
	}






}
