import  { useEffect, useState } from 'react'
import { db } from './FireStore'
import { collection, doc, query, where, setDoc, getDocs, getDoc, addDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from './fireBaseConfig'

export default function getDocumentUser () {
  const auth = fireBaseConfig()
  const [selectedOption, setSelectedOption] = useState([])
  // Estado para almacenar la opción seleccionada
  const [user, setUser] = useState(null)
  // Estado para almacenar el usuario
  const [documentInfo, setDocumentInfo] = useState(null)
  // Estado para guardar los datos del documento si lo hubiera

  // esta funcion busca el documento que tenga el campo igual al nombre del usuario
  
  
  const getUserPrefer = async () => {
    const q = query(collection(db, 'UserPreferRss'), where('usuario', '==', user))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      setDocumentInfo(doc.id)
      setSelectedOption((doc.data().userPrefer))
    })
  }
  console.log(user)
  console.log(selectedOption)
  useEffect(() => {
    // recupera el usuario logeado
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid)
      } else { setUser(null) }
    })
    getUserPrefer()
  }, [user])
  return selectedOption
}
