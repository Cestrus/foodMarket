let instance = null;

export class Store {
	constructor() {
		if (instance) {
			return instance;
		} else {
			instance = this;
		}

		this.storeProducts = [];
	}

	setStore( newStoreProducts ){
		this.storeProducts = [...newStoreProducts];
	}

	getStore() {
		return this.storeProducts;
	}

	get methods(){
		return {
			setStore: (newStore) => this.setStore(newStore),
			getStore: () => this.getStore(),
		}
	}
}


