import ViewBar from "./view-bar.js";
import ModelBar from "./model-bar.js";


export class ControllerBar {
	constructor( {notify, subscribe} ) {
		this.notify = notify;
		this.subscribe = subscribe;
		this.model = new ModelBar();
		this.view = new ViewBar(this.notify);

		this.subscribe('GET_PAGE_PRODUCT', this.renderBar.bind(this));
	}

	renderBar(products) {
		this.view.renderBar(products);
	}





}
