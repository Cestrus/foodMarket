
// Initialize Firebase

firebase.initializeApp({
	apiKey: "AIzaSyDgpCC0TMCArG0UjliBY0o8eDQk1G-oNNA",
	authDomain: "foodmarket-de4d0.firebaseapp.com",
	projectId: "foodmarket-de4d0",
	storageBucket: "foodmarket-de4d0.appspot.com",
	messagingSenderId: "483515338135",
	appId: "1:483515338135:web:9d442fed58ff945749c8d2"
});

export const dataFromFirebase = firebase.firestore();

