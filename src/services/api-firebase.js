
// Initialize Firebase

firebase.initializeApp({
	apiKey: "AIzaSyDgpCC0TMCArG0UjliBY0o8eDQk1G-oNNA",
	authDomain: "foodmarket-de4d0.firebaseapp.com",
	projectId: "foodmarket-de4d0",
	storageBucket: "foodmarket-de4d0.appspot.com",
	messagingSenderId: "483515338135",
	appId: "1:483515338135:web:9d442fed58ff945749c8d2"
});

const dataFromFirebase = firebase.firestore();


export class Api {
	constructor({setStore, getStore}) {
		this.setStore = setStore;
		this.getStore = getStore;
	}

	loadProducts() {
		return dataFromFirebase.collection("store")
		.get()
		.then(query => {
			query.forEach(product => {
				if (product.data().products) this.setStore(product.data().products);
			});
			return this.getStore();
		});
	}

	loadCategories() {
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

	get methods(){
		return {
			loadProducts: () => this.loadProducts(),
			loadCategories: () => this.loadCategories(),
		}
	}

}
