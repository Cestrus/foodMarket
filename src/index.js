import { ControllerMarket } from "./components/market-base/controller-market.js";
import { ControllerSearch } from './components/search/controller-search.js';
import { ControllerBar } from './components/bar/controller-bar.js';
import { ControllerPagination } from "./components/pagination/controller-pagination.js";
import { Details } from './components/details/details.js';
import { Reducer } from './services/reducer.js';
import { ControllerBasket } from "./components/basket/controller-basket.js";
import { Store } from "./services/store.js";
import { Api } from "./services/api-firebase.js";
import { ControllerCustomer } from "./components/customer/controller-customer.js";
import { Loader } from './components/loader/loader.js';

const store = new Store();
const api = new Api( store.methods );
const loader = new Loader();
const market = new ControllerMarket( store.methods, api.methods, loader.methods );
const searchBar = new ControllerSearch( store.methods, api.methods, loader.methods );
const bar = new ControllerBar();
const pagination = new ControllerPagination();
const details = new Details( store.methods  );
const basket = new ControllerBasket( store.methods );

const customer = new ControllerCustomer();

const reducer = new Reducer( market, searchBar, bar, pagination, details, basket, customer );


market.start();
