
class ViewBar {
	constructor( activityReducer ) {
		this.container = document.querySelector('.main-bar');
		this.container.addEventListener('click', this.cardClickHandler.bind(this));
		this.activityReducer = activityReducer;
		this.bar = null;
	}

	renderBar(products) {
		this.container.innerHTML = `
			<div class="bar">
				${products.map(product => this.renderCard(product)).join('')}
			</div>
		`
		this.bar = document.querySelector('.bar');
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

	cardClickHandler(ev){
		if (ev.target.classList.contains('btn-buy')){
			this.activityReducer('BUY_PRODUCT', {id: ev.target.getAttribute('data-id')} );
		} else if (ev.target.classList.contains('btn-details')){
			this.activityReducer('SHOW_DETAILS', ev.target.getAttribute('data-id'));
		}
	}

	hide(){
		this.bar.classList.add('hide');
	}

	visible(){
		this.bar.classList.remove('hide');
	}

}

export default ViewBar;
