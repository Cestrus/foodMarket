
export class ModelMarket {
	constructor() {
		this.db = null;
	}
	// link = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/2/public/full?alt=json';

	initDatabase(dataFromFirebase){
		this.db = dataFromFirebase;
	}

	loadData(){
		this.db.collection("store")
			.get()
			.then(query => {
				query.forEach(product => {
					console.log(product.data())
				})})
	}




}

export default ModelMarket;
