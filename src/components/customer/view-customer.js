export class ViewCustomer{
  constructor( submitReg, submitEnter, activityReducer){
    this.container = document.querySelector('.modal-container');
    this.singIcon = document.querySelector('.sign-in-out');
    this.profilePanel = document.querySelector('.profile');
    this.btnExit = null;
    this.btnSubmit = null;
    this.btnReg = null;
    this.inpName = null;
    this.inpEmail = null;
    this.inpPass = null;
    this.isSignIn = false;
    this.submitReg = submitReg;
    this.submitEnter = submitEnter;
    this.activityReducer = activityReducer;

    this.singIcon.addEventListener('click', this.singInHandler.bind(this));
  }

  singInHandler(){
    if(this.isSignIn){
      this.profilePanel.classList.add('hide');
      this.activityReducer('SING_OUT');
      this.isSignIn = false;
    } else {
      this.renderSignInForm()
    }
  }

  renderSignInForm(){
    this.container.innerHTML = `
      <div class="overlayModal" id="overlay-modal"></div>
      <div class="enterForm">
        <p class="enterTitle"> SIGN IN </p>
        <label class="lbl-enter" for="name">You name</label>
        <input class="inp-name" id="name" type="text">
        <label class="lbl-enter" for="password">You password</label>
        <input class="inp-pass" id="password" type="password">
        <div class="subm-wrap">
          <button class="btn-subm">Submit</button>
          <button class="btn-reg">Registration</button>
          <button class="btn-exit--signIn">Exit</button>
        </div>  
      </div>`;
      this.btnSubmit = document.querySelector('.btn-subm');
      this.btnExit = document.querySelector('.btn-exit--signIn');
      this.btnReg = document.querySelector('.btn-reg');
      this.inpName = document.querySelector('.inp-name');
      this.inpPass = document.querySelector('.inp-pass');
      this.btnSubmit.addEventListener('click', this.submEnterHandler.bind(this)); //
      this.btnExit.addEventListener('click', this.exitHandler.bind(this));
      this.btnReg.addEventListener('click', this.regFormHandler.bind(this));
  }

  renderRegForm(){
    this.container.innerHTML = `
      <div class="overlayModal" id="overlay-modal"></div>
      <div class="regForm">
        <p class="enterTitle"> Registration </p>
        <label class="lbl-enter" for="name">You name</label>
        <input class="inp-name" id="name" type="text">
        <label class="lbl-enter" for="email">You email</label>
        <input class="inp-email" id="email" type="email">
        <label class="lbl-enter" for="password">You password</label>
        <input class="inp-pass" id="password" type="password">
        <div class="subm-wrap">
          <button class="btn-subm">Submit</button>
          <button class="btn-exit--signIn">Exit</button>
        </div>  
      </div>`;
      this.btnSubmit = document.querySelector('.btn-subm');
      this.btnExit = document.querySelector('.btn-exit--signIn');
      this.inpName = document.querySelector('.inp-name');
      this.inpPass = document.querySelector('.inp-pass');
      this.inpEmail = document.querySelector('.inp-email');
      this.btnSubmit.addEventListener('click', this.submRegHandler.bind(this)); //
      this.btnExit.addEventListener('click', this.exitHandler.bind(this));
  }

  renderAlertWindow( message, form ){
    this.container.innerHTML = `
      <div class="overlayModal" id="overlay-modal"></div>
      <div class="noUser">
        <p class="noUser-title">${ message }<p>
        <button class="btn-exit--signIn">Exit</button>
      </div>`;
    this.btnExit = document.querySelector('.btn-exit--signIn');
    this.btnExit.addEventListener('click', this.exitHandler.bind(this, form));
  }

  exitHandler(form = 'correct'){
    if(form === 'reg') this.renderRegForm();
    else if(form === 'signin') this.renderSignInForm();
    else this.container.innerHTML = '';
  }

  regFormHandler(){
    this.container.innerHTML = '';
    this.renderRegForm();
  }

  renderUserProfile( name ){
    this.profilePanel.classList.remove('hide');
    this.profilePanel.innerHTML = `
      <p class="profile__name">${ name }</p>
      <div class="profile__img-wrap">
        <img src="https://cdn.onlinewebfonts.com/svg/img_452602.png" alt="signIn" class="profile__img">
      </div>`;
    this.changeSignIcon();
    this.isSignIn = true;
  }

  changeSignIcon(){
    const urlSignIn = 'https://cdn.onlinewebfonts.com/svg/img_328.png';
    const urlSignOut = 'https://cdn.onlinewebfonts.com/svg/img_779.png';
    const icon = this.singIcon.children[0].children[0];
    icon.src = (icon.src === urlSignIn)? urlSignOut : urlSignIn;
  }

  submRegHandler(){
    const userData = {
      name: this.inpName.value,
      email: this.inpEmail.value,
      pass: this.inpPass.value,
    };
    this.submitReg( userData );

  }

  submEnterHandler(){
    const userData = {
      name: this.inpName.value,
      pass: this.inpPass.value,
    };
    this.submitEnter( userData );
  }

  chooseAlertWindow( message ){
    if(message === 'correct'){
      this.exitHandler();
    } else if (message === 'User not found'){
      this.renderAlertWindow( message, 'signin' );
    } else if(message === 'Invalid password') {
      this.renderAlertWindow( message, 'signin' );
    } else {
      this.renderAlertWindow( message, 'reg' );
    }
  }

}

export default ViewCustomer;
