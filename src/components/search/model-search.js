class ModelSearch {
	constructor( setStore, getStore ) {
		this.categories = null;
		this.setStore = setStore;
		this.getStore = getStore;
	}

	loadCategoriesFromDB( dataFromFirebase ) {
		return dataFromFirebase.collection("store")
		.get()
		.then(query => {
			query.forEach(ctg => {
				if (!this.categories){
					this.categories = ctg.data().categories;
				}
			});
			return this.categories;
		})
	}

	searchByCategory( category = null ){
		if(!category) return this.getStore();
		return this.getStore().filter(prod => prod.CATEGORIES === categories);
	}

	searchByProduct( product ){
		return this.getStore().filter(prod => prod.PRODUCT_NAME.find(product));
	}

}

export default ModelSearch
