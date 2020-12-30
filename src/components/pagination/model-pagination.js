export class ModelPagination {
	constructor() {
		this.currPage = 1;
		this.maxPage = null;
		this.countProdOnPage = 20;
	}

	changePage(isNext){
		(isNext) ? this.currPage++ : this.currPage-- ;
		if (this.currPage >= this.maxPage) this.currPage = this.maxPage;
		if (this.currPage < 1) this.currPage = 1;
		return this.currPage;
	}

	countPages(count){
		this.maxPage = Math.ceil(count / this.countProdOnPage);
	}


}

