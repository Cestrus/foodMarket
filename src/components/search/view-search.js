class ViewSearch {
	constructor(){
		this.container = document.querySelector('.search');
	}

	renderSearchBar(categories){
		this.container.innerHTML =
			`<div class="search-container">
        <label for="">Search by category</label>
        <select name="" id="" class="sel-search search-category" >
					${this.renderOptions(categories)}
        </select>
      </div>
      <div class="search-container">
        <label for="">Search by product</label>
        <input type="search" placeholder="search" class="inp-search search-product">
      </div>`
	}

	renderOptions(categories){
		return `<option></option>` + categories.map(ctg => `<option>${ctg}</option>` ).join('');
	}

	addListeners() {
		document.querySelector('.search-category').addEventListener('click', () => {
			console.log('click category')
		});
		document.querySelector('.search-product').addEventListener('click', () => {
			console.log('click product')
		})
	}


}

export default ViewSearch;
