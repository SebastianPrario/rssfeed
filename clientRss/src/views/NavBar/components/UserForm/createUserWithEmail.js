import { createUserWithEmailAndPassword } from 'firebase/auth'
import { fireBaseConfig } from '../../../../fireBase/fireBaseConfig'

export const createUserWithEmail = (email, password) => {
  const auth = fireBaseConfig()
  const statusUserCreate = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user
      return { status: true, message: 'Usuario Creado' }
    })
    .catch((error) => {
      const errorMessage = error.message
      console.log('con errores')
      return { status: false, message: errorMessage }
    })
  return statusUserCreate
}
