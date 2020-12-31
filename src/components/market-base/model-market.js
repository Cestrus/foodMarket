
export class ModelMarket {
	constructor() {
		this.db = null;
		this.store = null; // array
	}

	initDatabase(dataFromFirebase){
		this.db = dataFromFirebase;
	}

	loadDataFromDB(){
		return this.db.collection("store")
			.get()
			.then(query => {
				query.forEach(product => {
					this.store = product.data().products;
				});
				return this.store;
			});
	}

	loadProductsFromStore(page = 1, step = 20){
		return this.store.slice((page - 1) * step, page * step);
	}


	sortByPrice(){
		this.store.sort((a, b) => a.PRICE - b.PRICE);
	}

	sortBySale(){
		this.store.sort((a, b) => b.SALE - a.SALE);
	}

	searchByCategories(categories){
		return this.store.filter(prod => prod.CATEGORIES === categories);
	}

	findProduct(name){
		if (name.length >= 3){
			return this.store.filter(name => prod.PRODUCT_NAME.find(name))
		}
	}


}

export default ModelMarket;
