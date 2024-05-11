import React, { useEffect, useState } from 'react'
import Styled from './../UserForm/styles'
import { useNavigate } from 'react-router-dom'
import { db } from '../../FireBase/FireStore'
import { collection, doc, query, where, getDocs, getDoc, addDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { fireBaseConfig } from '../../FireBase/fireBaseConfig'

const PreferUser = () => {
  const navigate = useNavigate()
  const auth = fireBaseConfig()
  const [selectedOption, setSelectedOption] = useState([])
  // Estado para almacenar la opción seleccionada
  const [user, setUser] = useState(null)

  const getUserPrefer = async () => {
    const q = query(collection(db, 'UserPreferRss'), where('usuario', '==', 'TLvCo27ZECRgtv39CGWugLIxl4x1'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setSelectedOption((doc.data().userPrefer))
    })
  }

  const handleOptionChange = (event) => {
    setSelectedOption([...selectedOption, event.target.value]) //
  }

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'UserPreferRss'), {
        usuario: user,
        userPrefer: selectedOption || []
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }

    setTimeout(() => {
      navigate('/')
    }, 1500)
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid)
        setUser(user.uid)
      } else { setUser(null) }
    })
    getUserPrefer()
  }, [])
  return (
    <div>
      <div className='mt-4'>
        <h1>Elige dos Medios para personalizar tu App</h1>
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
        <Styled.StyledSelection>
          <p> {selectedOption && selectedOption?.map(source =>

            <span className='mx-2' key={source}>{source}</span>)}
          </p>
        </Styled.StyledSelection>
        <button className='btn btn-danger mt-2 me-4' type='button' onClick={() => setSelectedOption([])}>resetear elección</button>
      </div>
      <Styled.StyledButton className='ms-1 me-5' type='submit' onClick={() => onSubmit()}>enviar</Styled.StyledButton>
      <Styled.StyledButton type='button' onClick={() => { navigate('/') }}> volver
        <i className='bi bi-arrow-left ms-1' />
      </Styled.StyledButton>
    </div>
  )
}

export default PreferUser
