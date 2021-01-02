import ModelSearch from "./model-search.js";
import ViewSearch from "./view-search.js";

import { dataFromFirebase } from '../../services/init-firebase.js';

export class ControllerSearch {
	constructor({ notify }) {
		this.model = new ModelSearch();
		this.view = new ViewSearch( notify );
		this.renderSearchBar();
	}

	renderSearchBar() {
		this.model.initDatabase( dataFromFirebase );
		this.model.loadCategoriesFromDB()
		.then(categories => {
			this.view.renderSearchBar( categories );
			this.view.addListeners();
		})
	}


}

