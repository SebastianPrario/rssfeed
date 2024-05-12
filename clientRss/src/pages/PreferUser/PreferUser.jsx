import React, { useEffect, useState } from 'react'
import Styled from './../UserForm/styles'
import { useNavigate } from 'react-router-dom'
import { db } from '../../FireBase/FireStore'
import { collection, doc, query, where, setDoc, getDocs, getDoc, addDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from '../../FireBase/fireBaseConfig'

const PreferUser = () => {
  const navigate = useNavigate()
  const auth = fireBaseConfig()
  const [selectedOption, setSelectedOption] = useState([])
  // Estado para almacenar la opción seleccionada
  const [user, setUser] = useState(null)
  // Estado para almacenar el usuario 
  const [documentInfo, setDocumentInfo] = useState(null)
  // Estado para guardar los datos del documento si lo hubiera

  // esta funcion busca el documento que tenga el campo igual al nombre del usuario
  const getUserPrefer = async () => {
    console.log(user)
    const q = query(collection(db, 'UserPreferRss'), where('usuario', '==', user))
    const querySnapshot = await getDocs(q)
    
    querySnapshot.forEach((doc) => {
      setDocumentInfo(doc.id)
      setSelectedOption((doc.data().userPrefer))
    })
  }
  console.log(documentInfo)
  const handleOptionChange = (event) => {
    setSelectedOption([...selectedOption, event.target.value]) //
  }
  // submit si ya existe el documento actualiza Bdd sino crea documento en bdd
  const onSubmit = async (data) => {
    try {
      if (documentInfo) {
        await setDoc(doc(db, 'UserPreferRss', documentInfo), {
          usuario: user,
          userPrefer: selectedOption
        })
      } else {
        const docRef = await addDoc(collection(db, 'UserPreferRss'), {
          usuario: user,
          userPrefer: selectedOption || []
        })
        console.log('Document written with ID: ', docRef.id)
      }
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setTimeout(() => {
      navigate('/')
    }, 500)
  }
  useEffect(() => {
    // recupera el usuario logeado
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid)
      } else { setUser(null) }
    })
    getUserPrefer()
  }, [user])
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
              <option value='Infobae'>Infobae</option>
              <option value='laNacion'>La Nación</option>
              <option value='BBC'>BBC en español</option>
            </select>
          </label>
        </form>
        <Styled.StyledSelection className='justify-content-center'>
          <p> {selectedOption && selectedOption?.map(source =>
            <span className='mx-2' key={source}>{source}</span>)}
          </p>
        </Styled.StyledSelection>
        <button className='btn btn-danger mt-2 me-4' type='button' onClick={() => setSelectedOption([])}>resetear elección</button>
     
      </div>
      <div className='ps-4 me-5 text-center'>
        <Styled.StyledButton className='me-5' type='submit' onClick={() => onSubmit()}>enviar</Styled.StyledButton>
        <Styled.StyledButton type='button' onClick={() => { navigate('/') }}> volver
          <i className='bi bi-arrow-left ms-1' />
        </Styled.StyledButton>
      </div>
    </div>
  )
}

export default PreferUser
