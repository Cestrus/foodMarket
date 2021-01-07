export class ViewMarket {
	constructor( activityReducer ) {
		this.activityReducer = activityReducer;
		// this.root = document.querySelector('#root');
		this.root = document.querySelector('.root-container');
		this.aside = document.querySelector('.aside');

		this.createDOM();
		this.addListeners();
	}

	createDOM(){
		this.DOM = {
			sort_by_price_A_Z: document.querySelector('.sort-by__price_a-z'),
			sort_by_price_Z_A: document.querySelector('.sort-by__price_z-a'),
			sort_by_sale: document.querySelector('.sort-by__sale'),
			basket: document.querySelector('.basket__img-wrap'),
			signInOut: document.querySelector('.signInOut'),
			profile: document.querySelector('.profile'),
		}
	}

	addListeners(){
		this.DOM.basket.addEventListener('click', () =>  this.activityReducer('SHOW_BASKET'));
		this.DOM.sort_by_price_A_Z.addEventListener('click', () => this.activityReducer('SORT_BY_PRICE', true));
		this.DOM.sort_by_price_Z_A.addEventListener('click', () => this.activityReducer('SORT_BY_PRICE', false));
		this.DOM.sort_by_sale.addEventListener('click', () => this.activityReducer('SORT_BY_SALE'));
	}

	// renderMainContent( content ){
	// 		this.root.innerHTML = content;
	// }

	asideHide(){
		this.aside.classList.add('hide');
	}

	asideVisible(){
		this.aside.classList.remove('hide');
	}

	tansformRootContainer(){
		this.root.classList.toggle('root-container');
		this.root.classList.toggle('root-container-basket');
	}

}

export default ViewMarket;
