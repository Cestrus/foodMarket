import ModelSearch from "./model-search.js";
import ViewSearch from "./view-search.js";

import { dataFromFirebase } from '../../services/init-firebase.js';


export class ControllerSearch {
	constructor({setStore, getStore}) {
		this.model = new ModelSearch( setStore, getStore );
		this.view = new ViewSearch( this.activityReducer.bind(this) );
		this.reducer = null;

		this.renderSearchBar();
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}

	activityReducer( ...args ){
		return this.reducer.activityReducer( ...args );
	}

	renderSearchBar() {
		this.model.loadCategoriesFromDB( dataFromFirebase )
		.then(categories => {
			this.view.renderSearchBar( categories );
		})
	}

	searchByCategory( category ){
		this.model.searchByCategory( category );
	}

	searchByProduct( product ){
		this.model.searchByProduct( product )
	}

	hide(){
		this.view.hide();
	}

	visible(){
		this.view.visible();
	}

}

