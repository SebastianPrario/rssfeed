/* eslint-disable no-unused-vars */
import { fireBaseConfig } from './fireBaseConfig'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import getDocumentUser from './getDocumentUser'

export const loginWithGoogle = async () => {
  const auth = fireBaseConfig()
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      // eslint-disable-next-line no-unused-vars
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
    // ...
    })
}
