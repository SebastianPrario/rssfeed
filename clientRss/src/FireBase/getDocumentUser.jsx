import { useContext, useEffect, useState } from 'react'
import { db } from './FireStore'
import { collection, doc, query, where, setDoc, getDocs, getDoc, addDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from './fireBaseConfig'
import { userContext } from '../../context/user'

export default function getDocumentUser () {
  const { state, getDocument, getDocumentId, getUser } = useContext(userContext)
  const auth = fireBaseConfig()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      getUserPrefer(user.reloadUserInfo.email)
      if (!state.user) {
        getUser({
          user: user.reloadUserInfo.email,
          userId: user.uid
        })
      }
    }
  })
  // // esta funcion busca el documento que tenga el campo igual al nombre del usuario

  const getUserPrefer = async () => {
    console.log(state.user)
    const q = query(collection(db, 'UserPreferRss'), where('usuario', '==', state.user))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // setDocumentInfo(doc.id)
      if (!state.document) {
        getUser({
          document: (doc.data().userPrefer),
          documentId: (doc.id)
        })
      }
    })
  }
  // useEffect(() => {
  //   getUserPrefer(state.userId)
  // }, [state.user])
}
