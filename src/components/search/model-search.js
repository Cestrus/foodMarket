class ModelSearch {
	constructor( setStore, getStore, loadProducts, loadCategories ) {
		this.categories = null;
		this.setStore = setStore;
		this.getStore = getStore;
		this.loadCategories = loadCategories;
		this.loadProducts = loadProducts;
	}

	loadCategoriesFromDB() {
		return this.loadCategories();
	}

	searchByCategory( category = null ){
		if(!category) {
			return this.loadProducts().then(prod => {
				this.setStore( prod );
				return this.getStore().length;
			});
		} else {
			return this.loadProducts().then(prod => {
				this.setStore(prod);
				let products = this.getStore().filter(prod => prod.CATEGORY === category);
				this.setStore(products);
				return products.length;
			});
		}
	}

	searchByProduct( product ){
		let products =  this.getStore().filter(prod => {
			if(prod.PRODUCT_NAME) return	prod.PRODUCT_NAME.toLowerCase().includes(product);
		});
		return products;
	}

}

export default ModelSearch
