import { ModelPagination } from './model-pagination.js';
import { ViewPagination } from './view-pagination.js';

export class ControllerPagination {
	constructor( pubMethods ){
		this.model = new ModelPagination();
		this.view = new ViewPagination();
		this.pubMethods = pubMethods;
		this.renderPagination();
		this.addListeners();

		this.pubMethods.subscribe('LOADED_PRODUCTS', this.countPages.bind(this));
	}

	renderPagination(){
		this.view.renderPagination();
	}

	addListeners() {
		this.view.addListeners(this.changePage.bind(this, false), this.changePage.bind(this, true));
	}

	changePage(isNext){
		this.model.changePage(isNext);
		this.pubMethods.notify('CHANGE_PAGE', this.model.currPage);
	}

	countPages(count){
		this.model.countPages(count);
		this.pubMethods.notify('CHANGE_PAGE', this.model.currPage);
	}
}
