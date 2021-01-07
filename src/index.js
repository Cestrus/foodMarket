import { ControllerMarket } from "./components/market-base/controller-market.js";
import { ControllerSearch } from './components/search/controller-search.js';
import { ControllerBar } from './components/bar/controller-bar.js';
import { ControllerPagination } from "./components/pagination/controller-pagination.js";
import { Details } from './components/details/details.js';
import { Reducer } from './services/reducer.js';
import { ControllerBasket } from "./components/basket/controller-basket.js";
import { Store } from "./services/store.js";

const store = new Store();
const market = new ControllerMarket( store.methods );

const searchBar = new ControllerSearch( store.methods );
const bar = new ControllerBar();
const pagination = new ControllerPagination();
const details = new Details();
const basket = new ControllerBasket();
const reducer = new Reducer( market, searchBar, bar, pagination, details, basket );

market.start();
