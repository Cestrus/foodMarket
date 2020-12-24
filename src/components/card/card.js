
const Card = () => {
	// const {img, price} = prop;

	return `
		<div class="card-container">
      <div class="item__img-wrap">
        <img src= ${ 'https://st2.depositphotos.com/1177973/6616/i/600/depositphotos_66162528-stock-photo-metal-shopping-basket-with-groceries.jpg' } alt="food" class="item__img">
      </div>
      <div class="item__description">
        <p class="item__title">Sweety pepper</p>
        <button class="btn-buy">BUY</button>
        <div class="item__price-container">
          <p class="item__price">${ 123.34 } грн/<span>кг</span></p>
        </div>
      </div>
    </div>
	`
}

export default Card;
