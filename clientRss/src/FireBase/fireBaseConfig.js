import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'

export const fireBaseConfig = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCM-wPrJYzUTGL3TkzW1txbF86eCeBLVJ4',
    authDomain: 'rss-feed-6e294.firebaseapp.com',
    projectId: 'rss-feed-6e294',
    storageBucket: 'rss-feed-6e294.appspot.com',
    messagingSenderId: '174226069939',
    appId: '1:174226069939:web:36b3bfa367ae6fb7ec13c6'
  }
  const appFireBase = initializeApp(firebaseConfig)
  const auth = getAuth(appFireBase)
  auth.languageCode = 'es'

  onAuthStateChanged(auth, (user) => {
    if (user) { console.log(user) } else { console.log('usuario no logeado') }
  })
  
   return auth
}
// export default function Auth () {
//   const auth = fireBaseConfig()
//   console.log(auth)
//   const provider = new GoogleAuthProvider()

//   createUserWithEmailAndPassword(auth, 'sebastianprario@hotmail.com', 'Seba1977')
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user
//       console.log(user)
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       // ..
//     })

//   signInWithEmailAndPassword(auth, 'sebastianprar@hotmail.com', 'Seba1977')
//     .then((userCredential) => {
//     // Signed in
//       const user = userCredential.user
//       console.log(user)
//     // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       console.log(errorMessage)
//     })

//   //   onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       // User is signed in, see docs for a list of available properties
//   //       // https://firebase.google.com/docs/reference/js/auth.user
//   //       const uid = user.uid
//   //       // ...
//   //     } else {
//   //       // User is signed out
//   //       // ...
//   //     }
//   //   })

//   signInWithPopup(auth, provider)
//     .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result)
//       const token = credential.accessToken
//       // The signed-in user info.
//       const user = result.user
//       // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code
//       const errorMessage = error.message
//       // The email of the user's account used.
//       const email = error.customData.email
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error)
//     })

//   return (
//     <div>
//       <button onClick={signInWithEmailAndPassword}>Google</button>
//       <button onClick={signInWithEmailAndPassword}>Correo</button>
//     </div>
//   )
// }
