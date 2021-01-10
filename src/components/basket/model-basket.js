class ModelBasket {
	constructor( getStore, setStore, activityReducer, loadProducts ) {
		this.basket = [];
		this.counter = 0;
		this.getStore = getStore;
		this.setStore = setStore;
		this.activityReducer = activityReducer;
		this.loadProducts = loadProducts;
	}

	changeCountProduct( id, count = null, max = null ){
		let isOverMax = false;
		let isOverMin = false;
		let product = this.basket.find(prod => prod.ID === +id);
		if (!product) {
			product = {};
			Object.assign(product, this.getStore().find( prod => prod.ID === +id ));
			this.basket.push( product );
		}
		if(!product.countInBasket && product.countInBasket !== 0) {
			product.countInBasket = 1;
			this.changeCounter();
		} else if (!count) {
			product.countInBasket++;
			this.changeCounter();
		} else if (Number(count) < 0) {
			product.countInBasket = 0;
			isOverMin = true;
		} else if (Number(count) > Number(max)) {
			product.countInBasket = max;
			isOverMax = true;
		} else {
			product.countInBasket = Number(count);
			this.changeCounter();
		}
		this.activityReducer('SAVE_USER_DATA', this.basket);
		return { totalPrice: product.PRICE * product.countInBasket, isOverMax, isOverMin };
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

	async loadUserBasket( loadedBasket ){ // id, count
		if(loadedBasket){
			return this.loadProducts().then(prod => {
				this.setStore( prod );
				loadedBasket.forEach(userProd => {
					prod.forEach(product => {
						if(userProd.id === product.ID){
							product.countInBasket = userProd.count;
							this.basket.push( product );
						}
					})
				})
				this.activityReducer('LOADED_PRODUCTS', this.getStore().length);
				this.activityReducer('GET_PAGE_PRODUCT', this.getStore());
				this.changeCounter();
				return this.counter;
			});
		}
	}

	clearBasket(){
		this.activityReducer('SAVE_USER_DATA', this.basket);
		this.basket.length = 0;
		this.changeCounter();
		return this.basket;
	}

	buyAllBasket( totalPrice ){
		const message = `Sell products on ${totalPrice} `;
		this.activityReducer('SEND_MESSAGE', message);
		this.clearBasket();
		return this.basket;
	}
}

export default ModelBasket;
