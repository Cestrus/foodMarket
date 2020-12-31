export class ViewMarket {
	constructor() {
		this.root = document.querySelector('#root');
	}

	createDOM(){
		this.DOM = {
			sort_by_price: document.querySelector('.sort-by__price'),
			sort_by_name: document.querySelector('.sort-by__name'),
			sort_by_sale: document.querySelector('.sort-by__sale'),
			basket: document.querySelector('.basket__img-wrap'),
			signInOut: document.querySelector('.signInOut'),
			profile: document.querySelector('.profile'),
		}
	}

	addListeners(){
		this.DOM.basket.addEventListener('click', () => console.log('click basket'));
		this.DOM.sort_by_price.addEventListener('click', () => { console.log('click sort price')	});
		this.DOM.sort_by_name.addEventListener('click', () => { console.log('click sort name')	});
		this.DOM.sort_by_sale.addEventListener('click', () => { console.log('click sort sale')	});

	}

	renderMainContent(content){
			this.root.innerHTML = content;
	}


}

export default ViewMarket;