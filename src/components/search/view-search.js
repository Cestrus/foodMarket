class ViewSearch {
	constructor( activityReducer ){
		this.container = document.querySelector('.search');
		// this.search_category = null;
		// this.search_product = null;
		// this.search_icon = null;
		this.activityReducer = activityReducer;

	}

	renderSearchBar( categories ){
		this.container.innerHTML =
			`<div class="search-container">
        <label for="">Search by category</label>
        <select name="" id="" class="sel-search search-category" >
					${this.renderOptions( categories )}
        </select>
      </div>
      <div class="search-container">
        <label for="">Search by product</label>
				<input type="text" placeholder="search" class="inp-search search-product">
			</div>`;

		document.querySelector('.search-category').addEventListener('change', ev => this.activityReducer('SEARCH_BY_CATEGORY', ev.target.value));
		document.querySelector('.search-product').addEventListener('input', ev => this.activityReducer('SEARCH_BY_PRODUCT', ev.target.value));
	}

	renderOptions( categories ){
		return `<option></option>` + categories.map(ctg => `<option>${ ctg }</option>` ).join('');
	}

	hide(){
		this.container.classList.add('hide');
	}

	visible(){
		this.container.classList.remove('hide');
	}

}

export default ViewSearch;
