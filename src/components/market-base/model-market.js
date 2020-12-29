
export class ModelMarket {
	constructor() {
		this.db = null;
		this.store = null; // array
		this.page = 1;
	}
	// link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/2/public/full?alt=json';

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
			})
	}

	loadProductsFromStore(page = 1, step = 20){
		this.page = page;
		return this.store.slice((this.page - 1) * step, this.page * step);
	}

	sortByPrice(){
		return this.store.sort((a, b) => {
			return a['PRICE'] - b['PRICE'];
		});
	}

	sortBySale(){
		return this.store.sort((a, b) => b['SALE'] - a['SALE']);
	}

	sortByCategories(categories){
		return this.store.filter(prod => prod['CATEGORIES'] === categories);
	}

	findProduct(name){
		if (name.length >= 3){
			return this.store.filter(name => prod['PRODUCT_NAME'].find(name))
		}
	}


}

export default ModelMarket;
