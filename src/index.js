import { ControllerMarket } from "./components/market-base/controller-market.js";
import { ControllerSearch } from './components/search/controller-search.js';
import { ControllerBar } from './components/bar/controller-bar.js';
import { ControllerPagination } from "./components/pagination/controller-pagination.js";
import { Details } from './components/details/details.js';
import { Reducer } from './services/reducer.js';
import { ControllerBasket } from "./components/basket/controller-basket.js";
import { Store } from "./services/store.js";
import { Api } from "./services/api-firebase.js";

const store = new Store();
const api = new Api( store.methods );
const market = new ControllerMarket( store.methods, api.methods );

const searchBar = new ControllerSearch( store.methods, api.methods  );
const bar = new ControllerBar();
const pagination = new ControllerPagination();
const details = new Details( store.methods  );
const basket = new ControllerBasket( store.methods );
const reducer = new Reducer( market, searchBar, bar, pagination, details, basket );

market.start();
