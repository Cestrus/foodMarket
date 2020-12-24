import ModelMarket from './model-market.js';
import ViewMarket from './view-market.js';

import Header from "../components/header/header.js";
import Aside from "../components/aside/aside.js";
import Plate from "../components/plate/plate.js";
import Footer from "../components/footer/footer.js";




export class ControllerMarket {
	constructor() {
		this.model = new ModelMarket();
		this.view = new ViewMarket();


	}

	start(){
		this.view.renderPage( Header(), Aside(), Plate(), Footer());
		this.view.createDOM();
		this.view.addListeners();
		console.log('controller', this.view.DOM)
	}



}
