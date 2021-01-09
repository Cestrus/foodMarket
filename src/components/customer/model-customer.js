export class ModelCustomer{
  constructor( activityReducer ){
    this.user = {
      name: 'unknow',
      email: 'unknow',
      pass: '',
      basket: [],
    }
    this.activityReducer = activityReducer;
    this.validSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-1234567890";
  }

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
      this.user.name = name;
      this.user.email = email;
      this.user.pass = pass;
      console.log('registr', this.user);
      this.saveUserData();
      return 'correct';
    }
  }

  checkUser( name, pass ){
    let userData = localStorage.getItem(name);
    if(!userData) {
      return 'User not found';
    } else {
      userData = JSON.parse( userData );
      if( userData.pass !== pass ){
        return 'Invalid password';
      } else {
        this.user = userData;
        this.activityReducer('SING_IN', this.user.basket);
        return 'correct';
      }
    }
  }

  saveUserData( products = [] ){
    this.user.basket.length = 0;
    products.forEach(prod => {
      this.user.basket.push({id: prod.ID, count: prod.countInBasket})
    })
    const userJSON = JSON.stringify(this.user);
    localStorage.setItem(this.user.name, userJSON);
  }
}

export default ModelCustomer;
