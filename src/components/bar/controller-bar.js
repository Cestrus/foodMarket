import ViewBar from "./view-bar.js";
import ModelBar from "./model-bar.js";


export class ControllerBar {
	constructor( pubMethods ) {
		this.pubMethods = pubMethods;
		this.model = new ModelBar();
		this.view = new ViewBar();

		this.pubMethods.subscribe('GET_PAGE_PRODUCT', this.renderBar.bind(this));

	}

	renderBar(products) {
		this.view.renderBar(products);
	}





}
