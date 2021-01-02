class ViewSearch {
	constructor(){
		this.container = document.querySelector('.search');
		this.search_category = null;
		this.search_product = null;
		this.search_icon = null;

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

		this.search_category = document.querySelector('.search-category');
		this.search_product = document.querySelector('.search-product');
	}

	renderOptions( categories ){
		return `<option></option>` + categories.map(ctg => `<option>${ ctg }</option>` ).join('');
	}

	addListeners() {
		this.search_category.addEventListener('change', () => this.notify('SEARCH_BY_CATEGORY', this.search_category.value));
		this.search_product.addEventListener('change', () => this.notify('SEARCH_BY_PRODUCT', this.search_product.value))
	}

}

export default ViewSearch;
