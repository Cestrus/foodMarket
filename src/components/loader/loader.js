export class Loader{
	constructor() {
		this.container = document.querySelector('.loader-wrap');
	}

	showLoader(){
		this.container.classList.remove('hidden');
	}

	hideLoader(){
		this.container.classList.add('hidden');
	}

	get methods(){
		return {
			showLoader: () => this.showLoader(),
			hideLoader: () => this.hideLoader(),
		}
	}
}
