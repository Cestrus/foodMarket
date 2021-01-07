
export class ModelMarket {
	constructor( setStore, getStore, loadProducts ) {
		this.setStore = setStore;
		this.getStore = getStore;
		this.loadProducts = loadProducts;
	}

	loadDataFromDB(){
		return this.loadProducts();
	}

	loadProductsFromStore(page = 1, step = 20){
		return this.getStore().slice((page - 1) * step, page * step);
	}

	sortByPrice( isAZ ){
		if(isAZ) this.setStore(this.getStore().sort((a, b) => a.PRICE - b.PRICE));
		else this.setStore(this.getStore().sort((a, b) => b.PRICE - a.PRICE));
	}

	sortBySale(){
		this.setStore(this.getStore().sort((a, b) => b.SALE - a.SALE));
	}

}

export default ModelMarket;
