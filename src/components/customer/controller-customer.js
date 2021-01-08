import ViewCustomer from './view-customer.js';
import ModelCustomer from './model-customer.js';


export class ControllerCustomer{
  constructor( ){
    this.model = new ModelCustomer();
    this.view = new ViewCustomer( this.submitReg.bind(this), this.submitEnter.bind(this), this.activityReducer.bind(this));
    this.reducer = null;
  }

  initReducer( reducer ){
		this.reducer = reducer;
	}

	activityReducer( ...args ){
		return this.reducer.activityReducer( ...args );
	}

  submitReg({ name, email, pass }){
    const message = this.model.registration( name, email, pass );
    return this.view.chooseAlertWindow( message, name );
  }

  submitEnter({ name, pass }){
    const message = this.model.checkUser( name, pass );
    return this.view.chooseAlertWindow( message, name );
  }

  saveUserData( basket ){
    this.model.saveUserData( basket );
  }

}
