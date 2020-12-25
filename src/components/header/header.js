import BasketIcon from "../basket-icon/basket-icon.js";

const Header = () => {

	return `
		<header class="header">
      <div class="logo">
        <div class="logo__img-wrap">
          <img src="https://i.pinimg.com/originals/e4/4c/57/e44c577196d295eb166d7455078f5ca9.png" alt="logo" class="logo__img">
        </div>
      </div>
      <div class="title"><p>HEALTHY FOOD FOR YOU</p></div>
      <div class="search">
        <input type="text" placeholder="search" class="inp-search">
      </div>
      ${ BasketIcon() }
<!--      <div class="basket">-->
<!--        <div class="basket__img-wrap">-->
<!--          <img src="https://cdn.onlinewebfonts.com/svg/img_220118.png" alt="basket" class="basket__img">-->
<!--        </div>-->
<!--      </div>-->
    </header>
	`

}

export default Header;
