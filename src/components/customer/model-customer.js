export class ModelCustomer{
  constructor(){
    this._name = '';
    this._email = '';
    this._basket = '';
  }

  set name( name ){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  set email( email ){
    this._email = email;
  } 

  get email(){
    return this._email;
  }

  validation

}

export default ModelCustomer;