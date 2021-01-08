export class ViewCustomer{
  constructor(){
    this.container = document.querySelector('.modal-container');
    this.singIcon = document.querySelector('.sign-in-out');
    this.btnExit = null;
    this.btnSubmit = null
    this.isSignIn = false;
    // this.listener = null;
    
    this.singIcon.addEventListener('click', this.singInHendler.bind(this));
  }

  singInHendler(){
    if(this.isSignIn){
      singOut();
      this.isSignIn = false;
    } else {
      this.renderSignInForm()
    }
  }

  renderSignInForm(){
    this.container.innerHTML = `
      <div class="overlayModal" id="overlay-modal"></div>
      <form class="enterForm" onsubmit="" name="enterForm">
        <p class="enterTitle"> SIGN IN </p>
        <label class="lbl-enter" for="name">You name</label>
        <input class="inp-name" id="name" type="text">
        <label class="lbl-enter" for="password">You password</label>
        <input class="inp-pass" id="password" type="password">
        <div class="subm-wrap">
          <input class="inp-subm" type="submit" value="Submit">
          <button class="btn-reg">Registration</button>
          <button class="btn-exit--signIn">Exit</button>
        </div>  
      </form>`;
      document.querySelector('.btn-exit--signIn').addEventListener('click', this.exitHandler.bind(this));
      document.querySelector('.btn-reg').addEventListener('click', this.regFormHandler.bind(this));
  }

  renderRegForm(){
    this.container.innerHTML = `
      <div class="overlayModal" id="overlay-modal"></div>
      <form class="regForm" onsubmit="" name="regForm">
        <p class="enterTitle"> Registration </p>
        <label class="lbl-enter" for="name">You name</label>
        <input class="inp-name" id="name" type="text">
        <label class="lbl-enter" for="email">You email</label>
        <input class="inp-email" id="email" type="email">
        <label class="lbl-enter" for="password">You password</label>
        <input class="inp-pass" id="password" type="password">
        <div class="subm-wrap">
          <input class="inp-subm" type="submit" value="Registration">
          <button class="btn-exit--signIn">Exit</button>
        </div>  
      </form>`;
      document.querySelector('.btn-exit--signIn').addEventListener('click', this.renderNoUserWindow.bind(this));
      // document.querySelector('.btn-reg').addEventListener('click', this.regFormHandler.bind(this));
    
  }

  renderNoUserWindow(){
    this.container.innerHTML = `
      <div class="overlayModal" id="overlay-modal"></div>
      <div class="noUser">
        <p class="noUser-title">User not found<p>
        <button class="btn-exit--signIn">Exit</button>
      </div>`;
    document.querySelector('.btn-exit--signIn').addEventListener('click', this.exitHandler.bind(this));
  }

  exitHandler(){
    this.container.innerHTML = '';
  }

  regFormHandler(){
    this.container.innerHTML = '';
    this.renderRegForm();
  }

  regHandler(){
    this.container.innerHTML = '';
  }



}

export default ViewCustomer;