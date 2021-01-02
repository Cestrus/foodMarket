
class ViewBar {
	constructor( notify ) {
		this.container = document.querySelector('.main-component');
		this.container.addEventListener('click', this.cardClickListener.bind(this));
		this.reducer = null;
		this.notify = notify;
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
			<div class="card-container" >
        <div class="item__img-wrap">
          <img src= ${product.IMG_LINK} alt="food" class="item__img">
        </div>
        <div class="item__description">
          <p class="item__title">${product.PRODUCT_NAME}</p>
          <button class="btn-details" data-id="${product.ID}">details</button>
          <button class="btn-buy" data-id="${product.ID}">BUY</button>
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

	cardClickListener(ev){
		if (ev.target.classList.contains('btn-buy')){
			this.reducer.activityEvent('BUY_PRODUCT', ev.target.getAttribute('data-id'));
			// this.notify('BUY_PRODUCT', ev.target.getAttribute('data-id'));
		} else if (ev.target.classList.contains('btn-details')){
			this.reducer.activityEvent('SHOW_DETAILS', ev.target.getAttribute('data-id'));
			// this.notify('SHOW_DETAILS', ev.target.getAttribute('data-id'));
		}

	}

	initReducer( reducer ){
		this.reducer = reducer;
	}
}

export default ViewBar;
