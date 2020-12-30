
class ViewBar {
	constructor() {
		this.container = document.querySelector('.main-component');
		this.container.addEventListener('click', this.buyProductListener.bind(this));
	}

	renderBar(products) {
		this.container.innerHTML = `
			<div class="bar">
				${products.map(product => this.renderCard(product)).join('')}
			</div>
		`
	}

	renderCard(product) {
		return `
			<div class="card-container" data-id="${product.ID}">
        <div class="item__img-wrap">
          <img src= ${product.IMG_LINK} alt="food" class="item__img">
        </div>
        <div class="item__description">
          <p class="item__title">${product.PRODUCT_NAME}</p>
          <button class="btn-buy">BUY</button>
          <div class="item__price">
            <p>${ product.PRICE } grn/${product.UNITS}</p>
          </div>
        </div>
        ${product.SALE? this.renderSale(product.SALE) : ''}
      </div>
		`
	}

	renderSale(sale) {
		return `<div class="card__sale">
      <p>SALE ${sale}%</p>
    </div>   
    `
	}

	buyProductListener(ev){
		if (ev.target.classList.contains('btn-buy')){
			console.log('click', ev);
		}

	}
}

export default ViewBar;
