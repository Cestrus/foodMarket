import ViewBar from "./view-bar.js";
import ModelBar from "./model-bar.js";


export class ControllerBar {
	constructor() {
		this.model = new ModelBar();
		this.view = new ViewBar( this.activityReducer.bind( this ));
		this.reducer = null;
	}

	renderBar( products ) {
		this.view.renderBar( products );
	}

	initReducer( reducer ){
		this.reducer = reducer;
	}

	activityReducer( ...args ){
		return this.reducer.activityReducer( ...args );
	}

	hide(){
		this.view.hide();
	}

	visible(){
		this.view.visible();
	}
}
