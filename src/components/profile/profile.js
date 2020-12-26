
const Profile = ( props ) => {
	// const { name } = props;
	const name = 'Alexey';

	return `
		<div class="profile hide">
			<p class="profile__name">${ name }</p>
      <div class="profile__img-wrap">
        <img src="https://cdn.onlinewebfonts.com/svg/img_452602.png" alt="signIn" class="profile__img">
      </div>
    </div>
	`
}
export default Profile;
