export class ViewMarket {
	constructor(notify) {
		this.notify = notify;
		this.root = document.querySelector('#root');

		this.createDOM();
		this.addListeners();
	}

	createDOM(){
		this.DOM = {
			sort_by_price: document.querySelector('.sort-by__price'),
			sort_by_sale: document.querySelector('.sort-by__sale'),
			basket: document.querySelector('.basket__img-wrap'),
			signInOut: document.querySelector('.signInOut'),
			profile: document.querySelector('.profile'),
		}
	}

	addListeners(){
		this.DOM.basket.addEventListener('click', () => console.log('click basket'));
		this.DOM.sort_by_price.addEventListener('click', () => this.notify('SORT_BY_PRICE'));
		this.DOM.sort_by_sale.addEventListener('click', () => this.notify('SORT_BY_SALE'));

	}

	renderMainContent(content){
			this.root.innerHTML = content;
	}


}

export default ViewMarket;
