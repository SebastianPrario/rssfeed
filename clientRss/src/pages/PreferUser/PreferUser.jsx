import React, { useContext, useEffect, useState } from 'react'
import Styled from './../UserForm/styles'
import { useNavigate } from 'react-router-dom'
import { db } from '../../FireBase/FireStore'
import { collection, doc, query, where, setDoc, getDocs, getDoc, addDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from '../../FireBase/fireBaseConfig'
import { userContext } from '../../../context/user'

const PreferUser = ({ setHandleChange }) => {
  const { state, getUser, getDocument, getDocumentId } = useContext(userContext)
  const { document, documentId, user } = state
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(document || [])

  const handleOptionChange = (event) => {
    setSelectedOption([...selectedOption, event.target.value]) //
  }
  // submit si ya existe el documento actualiza Bdd sino crea documento en bdd
  const onSubmit = async () => {
    try {
      if (documentId) {
        await setDoc(doc(db, 'UserPreferRss', documentId), {
          usuario: user,
          userPrefer: selectedOption
        })
        getUser({ document: selectedOption })
      } else {
        const docRef = await addDoc(collection(db, 'UserPreferRss'), {
          usuario: user,
          userPrefer: selectedOption || []
        })
        getUser({
          document: selectedOption,
          documentId: docRef.id
        })

        console.log('Document written with ID: ', docRef.id)
      }
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setTimeout(() => {
      setHandleChange('')
    }, 500)
  }
  return (
    <div>
      <div className='mt-4 text-center'>
        <h1>Elige dos Medios </h1>
        <h3>para ver en</h3>
        <h3>Las Noticias YA</h3>
        <form>
          <label>
            Selecciona una opción:
            <select disabled={selectedOption.length === 2} value={selectedOption} onChange={handleOptionChange}>
              <option value=''>Selecciona una opción</option>
              <option value='Clarin'>Clarin</option>
              <option value='Perfil'>Perfil</option>
              <option value='Ole'>Olé</option>
            </select>
          </label>
        </form>
        <Styled.StyledSelection className='justify-content-center'>
          <p> {selectedOption && selectedOption?.map(source =>
            <span className='mx-2 text-white' key={source}>{source}</span>)}
          </p>
        </Styled.StyledSelection>
        <div className='mb-4'>
          <button className='btn btn-danger mt-2 me-4' type='button' onClick={() => setSelectedOption([])}>resetear elección</button>
          <button className='btn btn-danger mt-2 me-4' type='submit' onClick={() => onSubmit()}>enviar</button>
        </div>
      </div>

    </div>
  )
}

export default PreferUser
