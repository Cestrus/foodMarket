let instance = null;

export class Reducer {
	constructor( market, searchBar, bar, pagination, details, basket ) {
		if (instance) {
			return instance;
		} else {
			instance = this;
		}

		this.market = market;
		this.searchBar = searchBar;
		this.bar = bar;
		this.pagination = pagination;
		this.details = details;
		this.basket = basket;

		this.initReducer();
	}

	initReducer(){
		this.market.initReducer( this );
		this.searchBar.initReducer(this);
		this.bar.initReducer( this );
		this.pagination.initReducer( this );
		this.basket.initReducer( this );
	}

	activityReducer( actionType, payload ){
		switch( actionType ) {
			case 'LOADED_PRODUCTS': {
				this.pagination.countPages( payload );
				break;
			}
			case 'CHANGE_PAGE': {
				this.market.getProductForPage( payload );
				break;
			}
			case 'GET_PAGE_PRODUCT': {
				this.details.setStore( payload ); //TODO продумать получение данных из общего стора
				this.basket.setStore( payload ); //TODO продумать получение данных из общего стора
				this.bar.renderBar( payload );
				break;
			}
			case 'SORT_BY_PRICE': {
				this.market.sortByPrice( payload );
				break;
			}
			case 'SORT_BY_SALE': {
				this.market.sortBySale();
				break;
			}
			case 'SHOW_DETAILS': {
				this.details.renderDetails( payload );
				break;
			}
			case 'SHOW_BASKET': {
				this.bar.hide();
				this.basket.showBasket( payload );
				this.pagination.hide();
				this.market.asideHide();
				this.searchBar.hide();
				this.market.tansformRootContainer();
				break;
			}
			case 'EXIT_BASKET': {
				this.basket.exitBasket();
				this.bar.visible();
				this.pagination.visible();
				this.market.asideVisible();
				this.searchBar.visible();
				this.market.tansformRootContainer();
				break;
			}
			case 'BUY_PRODUCT': {
				this.basket.buyProduct( payload );
				break;
			}
			case 'CHANGE_COUNT_PRODUCT': {
				this.basket.changeCountProduct( payload );
				break;
			}
			case 'REMOVE_PRODUCT': {
				this.basket.removeProduct( payload );
				break;
			}
			case 'SEARCH_BY_CATEGORY': {
				this.searchBar.searchByCategory( payload );
				break;
			}
			case 'SEARCH_BY_PRODUCT': {
				console.log(payload);
				break;
			}


		}
	}

}
