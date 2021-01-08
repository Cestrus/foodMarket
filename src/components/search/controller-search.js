import ModelSearch from "./model-search.js";
import ViewSearch from "./view-search.js";


export class ControllerSearch {
	constructor({setStore, getStore}, {loadCategories, loadProducts}) {
		this.model = new ModelSearch( setStore, getStore, loadProducts, loadCategories );
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
		this.model.loadCategoriesFromDB()
		.then(categories => {
			this.view.renderSearchBar( categories );
		})
	}

	async searchByCategory( category ){
		let length = await this.model.searchByCategory( category );
		await this.activityReducer('LOADED_PRODUCTS', length )
	}

	async searchByProduct( product ){
		let products = await this.model.searchByProduct( product );
		await this.activityReducer('LOADED_PRODUCTS', products.length );
		await this.activityReducer('GET_PAGE_PRODUCT', products);
	}

	hide(){
		this.view.hide();
	}

	visible(){
		this.view.visible();
	}

}

