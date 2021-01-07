
export class ModelMarket {
	constructor( setStore, getStore ) {
		this.db = null;
		this.setStore = setStore;
		this.getStore = getStore;
	}

	initDatabase(dataFromFirebase){
		this.db = dataFromFirebase;
	}

	loadDataFromDB(){
		return this.db.collection("store")
			.get()
			.then(query => {
				query.forEach(product => {
					if (product.data().products) this.setStore(product.data().products);
				});
				return this.getStore();
			});
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
