class ModelBasket {
	constructor( getStore, activityReducer ) {
		this.basket = [];
		this.counter = 0;
		this.getStore = getStore;
		this.activityReducer =activityReducer;
	}

	changeCountProduct( id, count = null, max = null ){
		let product = this.basket.find(prod => prod.ID === +id);
		if (!product) {
			product = {};
			Object.assign(product, this.getStore().find( prod => prod.ID === +id ));
			this.basket.push( product );
		}
		if(!product.countInBasket) {
			product.countInBasket = 1;
			this.changeCounter();
		} else if (!count) {
			product.countInBasket++;
			this.changeCounter();
		} else if (Number(count) < 0) {
			product.countInBasket = 0;
		} else if (Number(count) > Number(max)) {
			product.countInBasket = max;
		} else {
			product.countInBasket = Number(count);
			this.changeCounter();
		}
		this.activityReducer('SAVE_USER_DATA', this.basket);
		return product.PRICE * product.countInBasket;
	}

	changeCounter(){
		this.counter = this.basket.reduce((acc, curr) => acc + curr.countInBasket, 0);
	}

	removeProduct( id ){
		this.basket = this.basket.filter( prod => prod.ID !== Number(id));
		this.changeCounter();
		this.activityReducer('SAVE_USER_DATA', this.basket);
		return this.basket;
	}

}

export default ModelBasket;
