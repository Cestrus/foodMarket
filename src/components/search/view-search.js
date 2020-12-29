class ViewSearch {
	constructor(){
		this.container = document.querySelector('.search');
	}

	renderSearchBar(categories){
		this.container.innerHTML =

			`<div class="search-container">
        <label for="">Search by category</label>
        <select name="" id="" class="sel-search search-category">
					${this.renderOptions(categories)}
        </select>
      </div>
      <div class="search-container">
        <label for="">Search by product</label>
        <input type="text" placeholder="search" class="inp-search search-product">
      </div>`
	}

	renderOptions(categories){
		return categories.map(ctg => `<option>${ctg}</option>` ).join('');
	}

}

export default ViewSearch;
