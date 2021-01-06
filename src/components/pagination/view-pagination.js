export class ViewPagination {
	constructor() {
		this.container = document.querySelector('.pagination');
	}

	renderPagination(){
		this.container.innerHTML = `
			<button class="btn-pag btn-pag__prev"><i class="fas fa-chevron-left"></i></button>
			<button class="btn-pag btn-pag__next"><i class="fas fa-chevron-right"></i></button>
		`
	}

	addListeners(prevMethod, nextMethod) {
		document.querySelector('.btn-pag__prev').addEventListener('click', () => prevMethod());
		document.querySelector('.btn-pag__next').addEventListener('click', () => nextMethod());
	}

	hide(){
		this.container.classList.add('hidden');
	}

	visible(){
		this.container.classList.remove('hidden');
	}

}

