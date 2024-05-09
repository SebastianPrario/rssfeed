import { fireBaseConfig } from './fireBaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const loginWithMail = async (email, password) => {
  const auth = fireBaseConfig()
  let user = ''
  let errors = ''
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      user = userCredential.user
    })
    .catch((error) => {
      errors = error.message
    })
  return { user, errors }
}
