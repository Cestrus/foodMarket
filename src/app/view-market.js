export class ViewMarket {
	constructor() {
		this.root = document.querySelector('#root');
	}

	createDOM(){
		this.DOM = {
			plate_container: document.querySelector('.plate-container'),
			btn_buy: document.querySelector('.btn-buy'),
			search: document.querySelector('.inp-search'),
			sort_by_price: document.querySelector('.sort-by__price'),
			sort_by_name: document.querySelector('.sort-by__name'),
			sort_by_sale: document.querySelector('.sort-by__sale'),
			basket: document.querySelector('.basket__img-wrap'),
			signInOut: document.querySelector('.signInOut'),
			profile: document.querySelector('.profile'),
		}
	}

	addListeners(){
		this.DOM.btn_buy.addEventListener('click', () => console.log('click btn'));
		this.DOM.basket.addEventListener('click', () => console.log('click basket'));
		this.DOM.search.addEventListener('click', () => console.log('click search'));
		this.DOM.sort_by_price.addEventListener('click', () => { console.log('click sort price')	});
		this.DOM.sort_by_name.addEventListener('click', () => { console.log('click sort name')	});
		this.DOM.sort_by_sale.addEventListener('click', () => { console.log('click sort sale')	});

	}

	renderPage(header, search, pagin, aside, plateContent, footer){
		this.renderHeader(header);
		this.renderSearch(search);
		this.renderAside(aside);
		this.renderPlate(plateContent);
		this.renderPagin(pagin);
		this.renderFooter(footer);
	}

	renderHeader(header){
		this.root.innerHTML += header;
	}

	renderAside(aside){
		this.root.innerHTML += aside;
	}

	renderPlate(plateContent){
		this.root.innerHTML += plateContent;
	}

	renderFooter(footer){
		this.root.innerHTML += footer;
	}

	renderSearch(search){
		this.root.innerHTML += search;
	}

	renderPagin(pagin){
		this.root.innerHTML += pagin;
	}

	renderBasketPage(){

	}

}

export default ViewMarket;
