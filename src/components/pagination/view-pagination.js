export class ViewPagination {
	constructor() {
		this.container = document.querySelector('.pagination');
	}

	renderPagination(){
		this.container.innerHTML = `
			<button class="btn-pag btn-pag__prev"><</i></button>
			<button class="btn-pag btn-pag__next">></i></button>
		`
	}

	addListeners(prevMethod, nextMethod) {
		document.querySelector('.btn-pag__prev').addEventListener('click', () => prevMethod());
		document.querySelector('.btn-pag__next').addEventListener('click', () => nextMethod());
	}

	hide(){
		this.container.classList.add('hide');
	}

	visible(){
		this.container.classList.remove('hide');
	}

}

