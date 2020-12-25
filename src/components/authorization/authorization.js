import Profile from '../profile/profile.js';
import SignInOut from "../sign-in-out/sign-in-out.js";


const Authorization = () => {

	return `
		<div class="authorization">
			${ Profile() }
			${ SignInOut() }
		</div>
	`
}

export default Authorization;
