class ModelBasket {
	constructor() {
		this.basket = [];
		this.store = null; // products on page
		this.counter = 0;
	}

	changeCountProduct( id, count = null ){
		let product = this.basket.find(prod => prod.ID === +id);
		if (!product) {
			product = this.store.find( prod => prod.ID === +id );
			this.basket.push( product );
		}
		if(!product.countInBasket) {
			product.countInBasket = 1;
		} else if (!count) {
			product.countInBasket++;
		} else {
			product.countInBasket = Number(count);

		}
		this.changeCounter();
		return product.PRICE * product.countInBasket;
	}

	changeCounter(){
		this.counter = this.basket.reduce((acc, curr) => acc + curr.countInBasket, 0);
	}

	removeProduct( id ){
		this.basket = this.basket.filter( prod => prod.ID !== Number(id));
		this.changeCounter();
	}

	setStore( products ){
		this.store = products;
	}

}

export default ModelBasket;
