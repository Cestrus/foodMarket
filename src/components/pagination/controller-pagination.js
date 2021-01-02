import { ModelPagination } from './model-pagination.js';
import { ViewPagination } from './view-pagination.js';

export class ControllerPagination {
	constructor({ notify, subscribe }) {
		this.model = new ModelPagination();
		this.view = new ViewPagination();
		this.notify = notify;
		this.subscribe = subscribe;
		this.renderPagination();
		this.addListeners();
		this.reducer = null;

		// this.subscribe('LOADED_PRODUCTS', this.countPages.bind(this));
	}

	renderPagination(){
		this.view.renderPagination();
	}

	addListeners() {
		this.view.addListeners(this.changePage.bind(this, false), this.changePage.bind(this, true));
	}

	changePage(isNext){
		this.model.changePage(isNext);
		this.reducer.activityEvent('CHANGE_PAGE', this.model.currPage);
		// this.notify('CHANGE_PAGE', this.model.currPage);
	}

	countPages(count){
		this.model.countPages(count);
		this.reducer.activityEvent('CHANGE_PAGE', this.model.currPage);
		// this.notify('CHANGE_PAGE', this.model.currPage);
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}


}
