import Sale from './sale/sale.js';

const Card = (props) => {
  return (
    `
  		<div class="card-container" data-id="${props.ID}">
        <div class="item__img-wrap">
          <img src= ${props.IMG_LINK} alt="food" class="item__img">
        </div>
        <div class="item__description">
          <p class="item__title">${props.PRODUCT_NAME}</p>
          <button class="btn-buy">BUY</button>
          <div class="item__price">
            <p>${ props.PRICE } grn/${props.UNITS}</p>
          </div>
        </div>
        ${props.SALE? Sale(props.SALE) : ''}
      </div>
    `
  )
}

export default Card;
