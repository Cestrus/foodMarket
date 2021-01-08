export class ModelCustomer{
  constructor(){
    this.user = {
      name: 'unknow', 
      email: 'unknow', 
      pass: '', 
      basket: [],
    }

    this.validSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-1234567890";
  }

  // set user({name, email, pass}){
    // this.user = {name, email, pass}
  // }

  // get user(){
    // return this.user;
  // }

  isValidEmail( email ){
    return email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  }

  isValidName( name ){

    let str = [...name];
    for(let i = 0; i < str.length; i++){
      if(!this.validSymbols.match(str[i])){
        return false;
      } 
    }
    return true;
  }

  registration( name, email, pass ){
    if (!this.isValidEmail(email)) return 'Invalid email';
    else if (!this.isValidName(name)) return 'Invalid name';
    else {
      this.user = {name, email, pass};
      console.log('registr', this.user);
      return 'correct';
    }
  }

  checkUser( name, pass ){
    const userData = localStorage.getItem(name);
    if(!userData) {
      return 'User not found';
    } else {
      this.parseUserData(userData)
    }
      this.user = {name, email, pass};
      return 'correct';

  }

  saveUserData( products ){
    products.forEach(prod => {
      this.user.basket.push({id: prod.ID, count: prod.countInBasket})
    })
    const userJSON = JSON.stringify(this.user);
    localStorage.setItem(this.user.name, userJSON);
  }

  parseUserData(){

  }


}

export default ModelCustomer;