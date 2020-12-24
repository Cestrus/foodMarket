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
			// sort_by_price: document.querySelector('.sort_by_price'),
			// sort_by_price: document.querySelector('.sort_by_price'),
			basket: document.querySelector('.basket__img-wrap'),
		}
	}

	addListeners(){
		this.DOM.btn_buy.addEventListener('click', () => console.log('click btn'));
		this.DOM.basket.addEventListener('click', () => console.log('click basket'));
		this.DOM.search.addEventListener('click', () => console.log('click search'));
		this.DOM.sort_by_price.addEventListener('click', () => console.log('click sort'));

	}

	renderPage(header, aside, plateContent, footer){
		this.renderHeader(header);
		this.renderAside(aside);
		this.renderPlate(plateContent);
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

	renderBasketPage(){
s
	}

}

export default ViewMarket;
