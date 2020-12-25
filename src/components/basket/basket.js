
let instance = null;

class Basket {
	constructor() {
		if (instance) {
			return instance;
		} else {
			instance = this;
		}

		this.basket = [];
	}

	pushProduct(product) {
		if(this.basket.length){
			this.basket.forEach((prod, index) => {
				if (prod.id === product.id) {
					prod.count++;
				}	else if (index === this.basket.length - 1 && prod.id !== product.id) {
					product.count = 1;
					this.basket.push(product);
				}
			});
		} else {
			this.basket.push(product);
		}
	}

	delProduct(id) {
		this.basket.forEach(prod => {
			if (prod.id === id) {
				prod.count--;
			}
		});
		this.basket.filter(prod => prod.count !== 0);
	}
}

export default Basket;
