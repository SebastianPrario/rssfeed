import { useForm } from 'react-hook-form'
import Styled from './styles'
import { createUserWithEmail } from '../../FireBase/createUserWithEmail'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../FireBase/FireStore'
import { collection, addDoc } from 'firebase/firestore'

export default function UserForm () {
  const [fireBase, setFireBase] = useState(null)
  const [userPrefer, setUserPrefer] = useState(null)
  const navigate = useNavigate()
  const {
    register, // el register tiene informacion de cada campo
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    const { email, password } = data
    const statusCreateUser = await createUserWithEmail(email, password)
    setFireBase(statusCreateUser)
    if (statusCreateUser.status) {
      try {
        const docRef = await addDoc(collection(db, 'userId'), {
          usuario: email,
          userPrefer,
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
      
      setTimeout(() => {
        reset()
        setFireBase(null)
        navigate('/')
      }, 1500)
      console.log(statusCreateUser)
      
    }
  }

  const required = 'campo requerido'

  return (
    <Styled.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Styled.StyledLabel
        htmlFor='name'
      >Nombre
      </Styled.StyledLabel>
      <Styled.StyledInput
        id='name'
        {...register('name', { required: true, maxLength: 30 })}
      />
      {errors.name && errors.name.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <Styled.StyledAlert role='alert'>Hasta 30 caracteres</Styled.StyledAlert>
      )}

      <Styled.StyledLabel htmlFor='lastName'>Apellido</Styled.StyledLabel>
      <Styled.StyledInput
        id='lastname'
        {...register('lastName', { required: true, maxLength: 20 })}
      />
      {errors.lastName && errors.lastName.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.lastName && errors.lastName.type === 'maxLength' && (
        <Styled.StyledAlert role='alert'>Hasta 20 caracteres</Styled.StyledAlert>
      )}

      <Styled.StyledLabel htmlFor='email'>Email</Styled.StyledLabel>
      <Styled.StyledInput
        id='email' {...register('email',
          {
            required: 'el correo electronico es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ingresa una dirección de correo válida'
            }
          })}
      />
      {errors.email && errors.email.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.email && errors.email.message && (
        <Styled.StyledAlert role='alert'>{errors.email.message}</Styled.StyledAlert>
      )}
      <Styled.StyledLabel htmlFor='password'>Contraseña</Styled.StyledLabel>
      <Styled.StyledInput
        id='password' {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 10,
          message: 'la contraseña debe tener entre 6 y 8 caracteres'
        })}
      />
      {errors.password && errors.password.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <Styled.StyledAlert role='alert'>mínimo 6 caracteres</Styled.StyledAlert>
      )}

      <div>
        <Styled.StyledButton className='ms-1 me-5' type='submit'>crear cuenta</Styled.StyledButton>
        <Styled.StyledButton type='button' onClick={() => { navigate('/') }}> volver
          <i className='bi bi-arrow-left ms-1' />
        </Styled.StyledButton>
      </div>
      {fireBase && <p>{fireBase?.status}{fireBase?.message}</p>}
    </Styled.StyledForm>
  )
}
