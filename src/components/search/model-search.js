class ModelSearch {
	constructor() {
	this.categories = null;
	}

	initDatabase(dataFromFirebase) {
		this.db = dataFromFirebase;
	}

	loadCategoriesFromDB() {
		return this.db.collection("store")
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

}

export default ModelSearch
