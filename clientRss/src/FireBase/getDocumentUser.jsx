import { useContext, useEffect, useState } from 'react'
import { db } from './FireStore'
import { collection, doc, query, where, setDoc, getDocs, getDoc, addDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from './fireBaseConfig'
import { userContext } from '../../context/user'

export default function getDocumentUser () {
  const { state, getDocument, getDocumentId, getUser, clearDocument, getUserId } = useContext(userContext)

  const auth = fireBaseConfig()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!state.user) {
        getUser(user.reloadUserInfo.email)
        getUserId(user.uid)
      }
    }
  })
  // // esta funcion busca el documento que tenga el campo igual al nombre del usuario

  const getUserPrefer = async (user) => {
    const q = query(collection(db, 'UserPreferRss'), where('usuario', '==', state.user))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // setDocumentInfo(doc.id)
      if (!state.document) {
        getDocument((doc.data().userPrefer))
      }
      if (!state.documentId) {
        getDocumentId((doc.id))
      }
    })
  }
  useEffect(() => {
    getUserPrefer(state.userId)
  }, [state.user])
}
