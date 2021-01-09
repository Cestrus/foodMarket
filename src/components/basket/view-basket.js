class ViewBasket{
	constructor( activityReducer ) {
		this.counter = document.querySelector('.basket__counter');
		this.container = document.querySelector('.main-basket');
		this.activityReducer = activityReducer;
		this.totalPriceContainer = null;
	}

	renderCounter( num ){
		if( num ){
			this.counter.innerHTML = `${num}`;
			this.counter.classList.remove('hide');
		} else {
			this.counter.classList.add('hide');
		}
	}

	renderBasketDetails( basket ){
		this.container.classList.remove('hide');
		if (basket.length) {
			this.renderFullBasket( basket );
		} else {
			this.renderEmptyBasket();
		}
		this.renderTotalPrice();
		document.querySelector('.btn-basket-exit').addEventListener('click', () => this.activityReducer('EXIT_BASKET', basket));
	}

	renderEmptyBasket() {
		this.container.innerHTML = `
			<div class="empty-basket">
				<p class="">BASKET IS EMPTY</p>
				<div class="btn-basket-wrap">
					<button class="btn-basket-exit">EXIT</button>
				</div>
			</div>
		`
	}

	renderFullBasket( basket ){
		this.container.innerHTML = `
			<div class="basket-title"><p>Products in basket</p></div>
			<div class="basket-container">
				<div class="basket-item-title-name"></div>
				<div class="basket-item-title-price">Price</div>
				<div class="basket-item-title-count">Count</div>			
				<div class="basket-item-title-totalPrice">Total cost</div>
				<div class="basket-item-title-empty"></div>			
				${ basket.map( product => this.renderProductList( product )).join('') }
			</div>
			<div class="total-price"></div>
			<div class="btn-basket-wrap">
					<button class="btn-basket-exit">EXIT</button>
			</div>
		`
		document.querySelectorAll('.basket-item-count').forEach(el => el.addEventListener('change', ev => this.activityReducer('CHANGE_COUNT_PRODUCT', { id: ev.target.attributes['data-id'].value, count: ev.target.value, max: ev.target.attributes['max'].value})));
		document.querySelectorAll('.basket-item-name').forEach(el => el.addEventListener('click', ev => this.activityReducer('SHOW_DETAILS', ev.target.attributes['data-id'].value)));
		document.querySelectorAll('.btn-remove-item').forEach(el => el.addEventListener('click', ev => this.activityReducer('REMOVE_PRODUCT', ev.target.attributes['data-id'].value)));
		this.totalPriceContainer = document.querySelector('.total-price');
	}

	renderProductList( product ){
		return `
			<div class="basket-item-name" data-id="${product.ID}">${product.PRODUCT_NAME.toLowerCase()}</div>
			<div class="basket-item-price" data-id="${product.ID}">${product.PRICE} uah</div>
			<input class="basket-item-count" type="number" min="0" step="1" max="${product.AMOUNT}" value="${product.countInBasket}" data-id="${product.ID}">
			<div class="basket-item-totalPrice" data-id="${product.ID}">${+product.PRICE * product.countInBasket} uah</div>
			<button class="btn-remove-item" data-id="${product.ID}">X</button>			
		`
	}

	renderTotalPrice( id = null, totalPrice = null ) {
		let allPricesEl = [...document.querySelectorAll('.basket-item-totalPrice')];
		if (id) {
			allPricesEl.find(el => el.attributes['data-id'].value === id).innerText = `${ totalPrice } uah`;
		}
		this.totalPriceContainer.innerText = `${allPricesEl.reduce((acc, curr) => acc + parseFloat(curr.innerText), 0)} uah`;
	}

	exitBasket( basket ){
		this.container.innerHTML = '';
		this.container.classList.add('hide');
		this.activityReducer('SAVE_USER_DATA', basket);
	}

}

export default ViewBasket;
