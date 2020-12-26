import BasketIcon from "../basket-icon/basket-icon.js";
import Authorization from '../authorization/authorization.js';
import Logo from '../logo/logo.js';

const Header = () => {

	return `
		<header class="header">
			${ Logo() }
      <div class="title"><p>HEALTHY FOOD FOR YOU</p></div>
      ${ BasketIcon() }
      ${ Authorization() }
    </header>
	`
}

export default Header;
