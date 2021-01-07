
export class Details {
  constructor({ getStore }){
    this.container = document.querySelector('.modal-container');
    this.btnExit = null;
    this.listener = null;
    this.getStore = getStore;
    console.log(this.getStore)
  }

  renderDetails( id ){
    const product = this.searchProduct( id );
    this.container.innerHTML =  `
      <div class="overlayModal" id="overlay-modal"></div>
      <div class="details">
        <p class="details-name">${product['PRODUCT_NAME']}</p>
        <div class="details-item">
          <div class="item-name">
            <p>Ingidients:</p>
          </div>
          <div class="item-discription">
            <p>${product['INGRIDIENTS'].toLowerCase()}</p>
          </div>
        </div>
        <div class="details-item">
          <div class="item-name">
            <p>Manufacture:</p>
          </div>
          <div class="item-discription">
            <p>${product['MANUFACTURE']}</p>
          </div>
        </div>
        <div class="details-item">
          <div class="item-name">
            <p>Price:</p>
          </div>
          <div class="item-discription">
            <p>${product['PRICE']}</p>
          </div>
        </div>
        <div class="details-item">
          <div class="item-name">
            <p>Pack:</p>
          </div>
          <div class="item-discription">
            <p>${product['UNITS']}</p>
          </div>
        </div>
        <button class="btn-exit btn-exit--details">EXIT</button>
      </div>`;
      this.btnExit = document.querySelector('.btn-exit');
      this.listener = this.btnExit.addEventListener('click', this.exitHandler.bind(this));
  }

  exitHandler(){
    document.body.style.overflow = 'scroll';
    this.container.innerHTML = '';
    this.btnExit.removeEventListener( this.btnExit, this.listener );
  }

  searchProduct( id ){
    console.log(this.getStore)
    return this.getStore().find(prod => prod.ID === Number(id));
  }
}

