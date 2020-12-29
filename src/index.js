import { ControllerMarket } from "./components/market-base/controller-market.js";
import { ControllerSearch } from './components/search/controller-search.js';

const market = new ControllerMarket();
const searchBar = new ControllerSearch();
market.start();
