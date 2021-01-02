
export class Reducer {
	constructor( market, searchBar, bar, pagination, details ) {
		this.market = market;
		this.searchBar = searchBar;
		this.bar = bar;
		this.pagination = pagination;
		this.details = details;

		this.initReducer();
	}

	initReducer(){
		this.market.initReducer( this );
		// this.searchBar.initReducer(this);
		this.bar.initReducer( this );
		this.pagination.initReducer( this );
		// this.details.initReducer( this );
	}

	activityEvent( actionType, payload ){
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
				this.details.setStore( payload );
				this.bar.renderBar( payload );
				break;
			}
			case 'SORT_BY_PRICE': {
				this.market.sortByPrice();
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
			case 'BUY_PRODUCT': {
				console.log('buy')
			}


		}
	}

}
