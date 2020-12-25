
const SignInOut = () => {
	const isSign = false;
	const signImg = isSign
		? 'https://cdn.onlinewebfonts.com/svg/img_779.png'
		: 'https://cdn.onlinewebfonts.com/svg/img_328.png';

	return `
		<div class="sign-in-out">
      <div class="sign-in-out__img-wrap">
        <img src="${signImg}" alt="sign" class="sign-in-out__img">
      </div>
    </div>
	`
}
export default SignInOut;
