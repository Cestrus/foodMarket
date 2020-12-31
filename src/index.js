import { Publisher } from "./services/publisher.js";
import { ControllerMarket } from "./components/market-base/controller-market.js";
import { ControllerSearch } from './components/search/controller-search.js';
import { ControllerBar } from './components/bar/controller-bar.js';
import { ControllerPagination } from "./components/pagination/controller-pagination.js";
import { Details } from './components/details/details.js';

const publisher = new Publisher();
const market = new ControllerMarket( publisher.methods );

const searchBar = new ControllerSearch( publisher.methods );
const bar = new ControllerBar( publisher.methods );
const pagination = new ControllerPagination( publisher.methods );
const details = new Details( publisher.methods );


market.start();
