import { ControllerMarket } from "./components/market-base/controller-market.js";
import { ControllerSearch } from './components/search/controller-search.js';
import { ControllerBar } from './components/bar/controller-bar.js';
import { ControllerPagination } from "./components/pagination/controller-pagination.js";
import { Details } from './components/details/details.js';
import { Reducer } from './services/reducer.js';

const market = new ControllerMarket();

const searchBar = new ControllerSearch();
const bar = new ControllerBar();
const pagination = new ControllerPagination();
const details = new Details();
const reducer = new Reducer( market, searchBar, bar, pagination, details );

market.start();
