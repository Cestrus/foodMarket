import { ModelPagination } from './model-pagination.js';
import { ViewPagination } from './view-pagination.js';

export class ControllerPagination {
	constructor() {
		this.model = new ModelPagination();
		this.view = new ViewPagination();
		this.renderPagination();
		this.addListeners();
		this.reducer = null;
	}

	renderPagination(){
		this.view.renderPagination();
	}

	addListeners() {
		this.view.addListeners(this.changePage.bind(this, false), this.changePage.bind(this, true));
	}

	changePage(isNext){
		this.model.changePage(isNext);
		this.reducer.activityReducer('CHANGE_PAGE', this.model.currPage);
	}

	countPages(count){
		this.model.countPages(count);
		this.reducer.activityReducer('CHANGE_PAGE', this.model.currPage);
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}

	hide(){
		this.view.hide();
	}

	visible(){
		this.view.visible();
	}

}
