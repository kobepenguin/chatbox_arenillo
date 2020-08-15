import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/functions'

export const authApp = firebase.initializeApp(
{
apiKey: process.env.VUE_APP_AUTH_FIREBASE_API_KEY,
authDomain: process.env.VUE_APP_AUTH_FIREBASE_AUTH_DOMAIN,
databaseURL: process.env.VUE_APP_AUTH_FIREBASE_DATABASE_URL,
projectId: process.env.VUE_APP_AUTH_FIREBASE_PROJECT_ID,
storageBucket: process.env.VUE_APP_AUTH_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.VUE_APP_AUTH_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.VUE_APP_AUTH_FIREBASE_APP_ID,
measurementId: process.env.VUE_APP_AUTH_FIREBASE_MEASUREMENT_ID
}
)

export default firebase

// export default {
//     auth: firebase.auth(),
//     login() {
//       const provider = new firebase.auth.GoogleAuthProvider();
//       firebase.auth().signInWithPopup(provider)
//       .then(function(result) {
//         console.log(result);
//       })
//       .catch(function(error){
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = error.credential;
//         console.log(errorCode, errorMessage, email, credential);
//         })
//     },
//     logout() {
//       firebase.auth().signOut()
//       .then(function() {})
//       .catch(function(error) {
//         console.log(error)});
//     }
// }

